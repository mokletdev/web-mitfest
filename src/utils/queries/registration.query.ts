import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { registrationsWithRelations } from "@/types/prismaRelations";

export async function getAllRegistrations() {
  const registrations = await prisma.registrations.findMany({
    include: { user: true, updated_by: true, competition_submission: true },
  });
  return registrations;
}

export async function getRegistrationsCount(
  where: Prisma.registrationsWhereInput,
) {
  const count = await prisma.registrations.count({ where });
  return count;
}

export async function findRegistrations(where: Prisma.registrationsWhereInput) {
  const registrations = await prisma.registrations.findMany({
    where,
    include: {
      user: true,
      updated_by: true,
      competition_submission: { include: { updated_by: true } },
    },
  });
  return registrations;
}

export async function createRegistration(
  data: Prisma.registrationsUncheckedCreateInput,
) {
  const create = await prisma.registrations.create({ data });
  return create;
}

export async function findRegistrationById(
  id: string,
): Promise<registrationsWithRelations> {
  const registration = await prisma.registrations.findUnique({
    where: { id },
    include: { user: true, updated_by: true, competition_submission: true },
  });
  return registration as registrationsWithRelations;
}

export async function updateRegistration(
  id: string,
  data: Prisma.registrationsUncheckedUpdateInput,
) {
  const updateQuery = await prisma.registrations.update({
    where: { id },
    data,
  });
  return updateQuery;
}
