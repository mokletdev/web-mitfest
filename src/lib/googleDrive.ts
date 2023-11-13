import stream, { Readable } from "stream";
const { google } = require("googleapis");

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

  public constructor(clientId: string, clientSecret: string, redirectUri: string, refreshToken: string) {
    this.driveClient = this.createDriveClient(clientId, clientSecret, redirectUri, refreshToken);
  }

  createDriveClient(clientId: string, clientSecret: string, redirectUri: string, refreshToken: string) {
    const client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    client.setCredentials({ refresh_token: refreshToken });

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
        }
      );
    });
  }

  saveFile(fileName: string, fileStream: Buffer, fileMimeType: string | undefined, folderId?: string) {
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
};

export async function uploadFile(filename: string, mimeType: string | undefined, stream: Buffer, folderId: string): Promise<driveFile> {
  const googleDriveService = new GoogleDriveService(driveClientId, driveClientSecret, driveRedirectUri, driveRefreshToken);

  const file = await googleDriveService.saveFile(filename, stream, mimeType, folderId);

  const result = { url: `https://drive.google.com/open?id=${file.data.id}` };
  return result;
}
