import { prisma } from "@/lib/prisma";
import { generateSecureToken } from "../verificationToken";

export async function getAllTokens() {
  const tokens = await prisma.verification_tokens.findMany({});
  
  return tokens;
}

export async function createToken() {
  const generateToken = generateSecureToken();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const create = await prisma.verification_tokens.create({
    data: { token: generateToken, expires_at: tomorrow },
  });

  return create;
}
