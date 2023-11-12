import stream, { Readable } from "stream";
import { google } from "googleapis";

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

export class GoogleSheetService {
  private sheetClient;

  public constructor(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    refreshToken: string
  ) {
    this.sheetClient = this.createSheetClient(
      clientId,
      clientSecret,
      redirectUri,
      refreshToken
    );
  }

  createSheetClient(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    refreshToken: string
  ) {
    const client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    client.setCredentials({ refresh_token: refreshToken });

    return google.sheets({
      version: "v4",
      auth: client,
    });
  }

  async updateSheets(spreadsheetId: string, range: string, values: any[][]) {
    const sheet = await this.sheetClient.spreadsheets.values.update({
      spreadsheetId,
      valueInputOption: "USER_ENTERED",
      range,
      requestBody: { range, values },
    });
    return sheet;
  }
}

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = process.env.GOOGLE_REDIRECT_URI;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

export async function updateSheet(
  spreadsheetId: string,
  range: string,
  value: any[][]
): Promise<any> {
  const googleSheetService = new GoogleSheetService(
    clientId,
    clientSecret,
    redirectUri,
    refreshToken
  );

  const result = await googleSheetService.updateSheets(
    spreadsheetId,
    range,
    value
  );

  return result;
}
