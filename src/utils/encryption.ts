import crypto from "crypto";

const { SECRET_KEY, SECRET_IV, ENCRYPTION_ALGORITHM } = process.env;

if (!SECRET_KEY || !SECRET_IV || !ENCRYPTION_ALGORITHM) {
  throw new Error("secretKey, secretIV, and ecnryptionMethod are required");
}

// Generate secret hash with crypto to use for encryption
const key = crypto
  .createHash("sha512")
  .update(SECRET_KEY)
  .digest("hex")
  .substring(0, 32);
const encryptionIV = crypto
  .createHash("sha512")
  .update(SECRET_IV)
  .digest("hex")
  .substring(0, 16);

export function encryptData(data: string) {
  const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, key, encryptionIV);
  return Buffer.from(
    cipher.update(data, "utf8", "hex") + cipher.final("hex")
  ).toString("base64");
}

export function compareData(incomingData: string, encryptedData: string) {
  const buff = Buffer.from(encryptedData, "base64");
  const decipher = crypto.createDecipheriv(
    ENCRYPTION_ALGORITHM,
    key,
    encryptionIV
  );
  const decrypted =
    decipher.update(buff.toString("utf8"), "hex", "utf8") +
    decipher.final("utf8");

  return incomingData === decrypted;
}
