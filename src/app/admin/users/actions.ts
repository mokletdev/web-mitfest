"use server";

import { encryptData } from "@/utils/encryption";
import { createUser, deleteUser, updateUser } from "@/utils/queries/user.query";
import { Prisma } from "@prisma/client";

export async function updateUserAction(
  id: string,
  data: Prisma.usersUpdateInput,
) {
  try {
    if (data.password) {
      await updateUser(id, {
        ...data,
        password: encryptData(data.password as string),
      });
    } else {
      await updateUser(id, data);
    }
  } catch (error) {}
}

export async function createUserAction(data: Prisma.usersCreateInput) {
  try {
    await createUser({
      ...data,
      password: encryptData(data.password as string),
    });
  } catch (error) {}
}

export async function deleteUserAction(id: string) {
  try {
    await deleteUser(id);
  } catch (error) {}
}
