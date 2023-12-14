import { updateUser } from "@/utils/queries/user.query";
import {
  deleteToken,
  findToken,
} from "@/utils/queries/verificationToken.query";

export async function POST(req: Request) {
  try {
    const { token }: { token: string } = await req.json();
    if (!token)
      return Response.json(
        { status: 400, message: "Bad request" },
        { status: 400 },
      );
    const find = await findToken(token);
    if (!find)
      return Response.json(
        { status: 404, message: "Token not found" },
        { status: 404 },
      );
    else if (find.expires_at < new Date()) {
      await deleteToken(token);
      return Response.json(
        { status: 404, message: "Token not found" },
        { status: 404 },
      );
    } else if (find.type == "verify") {
      await updateUser(find.user_id, { is_verified: true });
      await deleteToken(token);
    }

    return Response.json({
      status: 200,
      message: "Token found!",
      type: find.type,
    });
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        status: 500,
        message: "internal server error",
      },
      { status: 500 },
    );
  }
}
