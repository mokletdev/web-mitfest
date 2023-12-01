import { createUser, findUserByEmail } from "@/utils/queries/user.query";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { email, password, name, v }: Prisma.usersUncheckedCreateInput =
      await req.json();
    const checkUser = await findUserByEmail(email);
    if (checkUser) return Response.json({ status: 403, message: "forbidden" });
    const createAccount = await createUser({ email, password, name, v });

    return Response.json({ status: 200, message: "success" });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "internal server error",
    });
  }
}
