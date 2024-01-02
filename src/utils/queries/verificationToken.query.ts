import prisma from "@/lib/prisma";
import { generateSecureToken } from "../verificationToken";
import { TokenType, users } from "@prisma/client";

export async function getAllTokens() {
  const tokens = await prisma.verification_tokens.findMany({});

  return tokens;
}

export async function createToken(type: TokenType, user_id: string) {
  const generateToken = generateSecureToken();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const create = await prisma.verification_tokens.create({
    data: { token: generateToken, expires_at: tomorrow, type, user_id },
  });

  return create;
}

export async function findToken(token: string) {
  const findToken = await prisma.verification_tokens.findUnique({
    where: { token },
  });
  return findToken;
}

export async function deleteToken(token: string) {
  const deleteToken = await prisma.verification_tokens.delete({
    where: { token },
  });
  return deleteToken;
}
