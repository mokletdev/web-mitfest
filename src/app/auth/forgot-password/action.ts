"use server";
import { findUserByEmail } from "@/utils/queries/user.query";
import { createToken } from "@/utils/queries/verificationToken.query";
import { forgotPassword } from "@/lib/templateEmail";
import { mailMetaData } from "@/lib/googleMail";
import { sendMailTo } from "@/lib/googleMail";

export const forgotPasswordAction = async (email: string) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) return false;
    const token = await createToken("forgot_password", user.id);

    //send email
    const htmlMail = forgotPassword(
      user.name,
      `${process.env.NEXTAUTH_URL}auth/token?code=${token.token}`,
    );
    const mailMetaData: mailMetaData = {
      subject: "Lupa Kata Sandi: Akun MITFest",
      to: user.email,
      html: htmlMail,
    };
    await sendMailTo(mailMetaData);

    return true;
  } catch (e) {}
};
