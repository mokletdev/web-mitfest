"use server";

import { prisma } from "@/lib/prisma";

export async function updateUserStatus(id: string, is_verified: boolean) {
  try {
    await prisma.users.update({
      where: { id },
      data: { is_verified: !is_verified },
    });
  } catch (error) {}
}
