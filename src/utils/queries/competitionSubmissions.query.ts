import prisma from "@/lib/prisma";
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

export async function updateCompetitionSubmission(
  id: string,
  data: Prisma.competition_submissionsUncheckedUpdateInput,
) {
  const updateQuery = await prisma.competition_submissions.upsert({
    where: { registrationId: data.registrationId as string },
    update: data,
    create: data as Prisma.competition_submissionsUncheckedCreateInput,
  });
  return updateQuery;
}
