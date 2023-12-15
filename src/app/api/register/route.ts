import { mailMetaData, sendMailTo } from "@/lib/googleMail";
import { verify } from "@/lib/templateEmail";
import { encryptData } from "@/utils/encryption";
import { createUser, findUserByEmail } from "@/utils/queries/user.query";
import { createToken } from "@/utils/queries/verificationToken.query";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { email, password, name, v }: Prisma.usersUncheckedCreateInput =
      await req.json();
    const checkUser = await findUserByEmail(email);
    if (checkUser)
      return Response.json({
        status: 403,
        message: "Email sudah terdaftar",
      });
    const createAccount = await createUser({
      email,
      password: encryptData(password as string),
      name,
      v,
    });
    const token = await createToken("verify", createAccount.id);

    //send email
    const htmlMail = verify(
      name,
      `${process.env.NEXTAUTH_URL}auth/token?code=${token.token}`,
    );
    const mailMetaData: mailMetaData = {
      subject: "Verifikasi akun MITFest",
      to: email,
      html: htmlMail,
    };
    await sendMailTo(mailMetaData);

    return Response.json({ status: 200, message: "success" });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "internal server error",
    });
  }
}
