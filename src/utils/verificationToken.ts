import crypto from "crypto";

export function generateSecureToken() {
  const secretKey = crypto.randomBytes(32);
  const hashKey = crypto.createHash("sha256").update(secretKey).digest();
  const token = crypto.randomBytes(32);
  const secureToken = Buffer.from(
    Array.from(token).map((byte, index) => byte ^ hashKey[index]),
  );

  return secureToken.toString();
}
