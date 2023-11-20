import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getAllCompetitionRegistrations() {
  const competitionRegistrations =
    await prisma.competition_submissions.findMany({
      include: { updated_by: true, registration: true },
    });
  return competitionRegistrations;
}

export async function createCompetitionRegistration(
  data: Prisma.competition_submissionsUncheckedCreateInput,
) {
  const create = await prisma.competition_submissions.create({ data });
  return create;
}
