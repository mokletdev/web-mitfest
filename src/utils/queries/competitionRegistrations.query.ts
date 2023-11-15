import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getAllCompetitionRegistrations() {
  const competitionRegistrations =
    await prisma.competition_registrations.findMany({});
  return competitionRegistrations;
}

export async function createCompetitionRegistration(
  data: Prisma.competition_registrationsUncheckedCreateInput,
) {
  const create = await prisma.competition_registrations.create({ data });
  return create;
}
