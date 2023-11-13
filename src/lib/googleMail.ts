const { google } = require("googleapis");
import MailComposer from "nodemailer/lib/mail-composer";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = process.env.GOOGLE_REDIRECT_URI;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

const getGmailService = () => {
  const oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );
  oAuth2Client.setCredentials({ refresh_token: refreshToken });
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  return gmail;
};

const encodeMessage = (message: Buffer) => {
  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const createMail = async (options: any) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

export const sendMail = async (options: any) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const data = await gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: rawMessage,
    },
  });
  return data;
};

type mailMetaData = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  fileAttachments?: Array<{
    filename: string;
    path?: string;
    content?: string;
  }>;
};

export const sendMailTo = async (metadata: mailMetaData) => {
  const options = {
    to: metadata.to,
    from: "Moklet IT Fest 2023 <mit_fest@smktelkom-mlg.sch.id>",
    // cc: "cc@mail.com",
    // replyTo: 'amit@labnol.org',
    subject: metadata.subject,
    text: metadata.text,
    html: metadata.html,
    attachments: metadata.fileAttachments,
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Moklet Developers" },
      { key: "X-Application-Version", value: "v1" },
    ],
  };

  const mail = await sendMail(options);
  return mail;
};
