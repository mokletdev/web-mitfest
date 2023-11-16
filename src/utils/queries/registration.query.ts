import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getAllRegistrations() {
  const registrations = await prisma.registrations.findMany({
    include: { user: true, updated_by: true },
  });
  return registrations;
}

export async function getRegistrationsCount(
  where: Prisma.registrationsWhereInput,
) {
  const count = await prisma.registrations.count({ where });
  return count;
}

export async function createRegistration(
  data: Prisma.registrationsUncheckedCreateInput,
) {
  const create = await prisma.registrations.create({ data });
  return create;
}
