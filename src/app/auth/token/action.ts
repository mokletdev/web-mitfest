"use server";
import {
  findToken,
  deleteToken,
} from "@/utils/queries/verificationToken.query";
import { updateUser } from "@/utils/queries/user.query";
import { encryptData } from "@/utils/encryption";

export const resetPasswordAction = async (
  token: string,
  newPassword: string,
) => {
  try {
    const data = await findToken(token);
    if (!data) return false;

    const update = await updateUser(data.user_id, {
      password: encryptData(newPassword),
    });
    if (update) {
      await deleteToken(token);
      return true;
    } else return false;
  } catch (e) {}
};
