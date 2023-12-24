import stream, { Readable } from "stream";
import { serviceAccountConfig } from "@/config/service-account";
const { google } = require("googleapis"); // eslint-disable-line

/**
 * Browse the link below to see the complete object returned for folder/file creation and search
 *
 * @link https://developers.google.com/drive/api/v3/reference/files#resource
 */
type PartialDriveFile = {
  id: string;
  name: string;
};

type SearchResultResponse = {
  kind: "drive#fileList";
  nextPageToken: string;
  incompleteSearch: boolean;
  files: PartialDriveFile[];
};

export class GoogleDriveService {
  private driveClient;

  public constructor(credentials: object) {
    this.driveClient = this.createDriveClient(credentials);
  }

  createDriveClient(clientId: object) {
    const client = new google.auth.GoogleAuth({
      credentials: clientId,
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    return google.drive({
      version: "v3",
      auth: client,
    });
  }

  createFolder(folderName: string): Promise<PartialDriveFile> {
    return this.driveClient.files.create({
      resource: {
        name: folderName,
        mimeType: "application/vnd.google-apps.folder",
      },
      fields: "id, name",
    });
  }

  searchFolder(folderName: string): Promise<PartialDriveFile | null> {
    return new Promise((resolve, reject) => {
      this.driveClient.files.list(
        {
          q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
          fields: "files(id, name)",
        },
        (err: any, res: { data: SearchResultResponse }) => {
          if (err) {
            return reject(err);
          }

          return resolve(res.data.files ? res.data.files[0] : null);
        },
      );
    });
  }

  saveFile(
    fileName: string,
    fileStream: Buffer,
    fileMimeType: string | undefined,
    folderId?: string,
    ownerInfo?: string,
  ) {
    const newStream = new Readable({
      read() {
        this.push(fileStream);
        this.push(null); // Indicates the end of the stream
      },
    });
    return this.driveClient.files.create({
      requestBody: {
        name: fileName,
        mimeType: fileMimeType,
        parents: folderId ? [folderId] : [],
        description: `This file is owned by ${ownerInfo || "Unknown?"}`,
      },
      media: {
        mimeType: fileMimeType,
        body: newStream,
      },
    });
  }
}

const driveClientId = process.env.GOOGLE_CLIENT_ID;
const driveClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const driveRedirectUri = process.env.GOOGLE_REDIRECT_URI;
const driveRefreshToken = process.env.GOOGLE_REFRESH_TOKEN;

type driveFile = {
  url: string;
  id: string;
};

export async function uploadFile(
  filename: string,
  mimeType: string | undefined,
  stream: Buffer,
  folderId: string,
  ownerInfo?: string,
): Promise<driveFile> {
  const googleDriveService = new GoogleDriveService(serviceAccountConfig);

  const file = await googleDriveService.saveFile(
    filename,
    stream,
    mimeType,
    folderId,
    ownerInfo,
  );

  const result = {
    id: file.data.id,
    url: `https://drive.google.com/open?id=${file.data.id}`,
  };
  return result;
}
