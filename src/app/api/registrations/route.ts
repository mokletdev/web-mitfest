import { authOptions } from "@/lib/auth";
import { createRegistration } from "@/utils/queries/registration.query";
import { getServerSession } from "next-auth";
import { $Enums, Prisma } from "@prisma/client";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  try {
    const {
      competition,
      instance_name,
      leader_name,
      leader_wa_number,
      team_name,
      transaction_proof,
      team_members,
    }: Prisma.registrationsUncheckedCreateInput = await req.json();

    await createRegistration({
      competition,
      instance_name,
      leader_name,
      leader_wa_number,
      team_name,
      transaction_proof,
      v: 0,
      user_id: session?.user?.id as string,
      team_members,
    });

    return Response.json({ status: 200, message: "success" });
  } catch (error) {
    return Response.json({ status: 500, message: "internal server error" });
  }
}
