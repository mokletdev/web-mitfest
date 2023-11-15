import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getAllRegistrations() {
  const registrations = await prisma.registrations.findMany({});
  return registrations;
}

export async function getRegistrationsCount(
  where: Prisma.registrationsWhereInput,
) {
  const count = await prisma.registrations.count({ where });
  return count;
}

export async function createRegistration(
  data: Prisma.registrationsCreateInput,
) {
  const create = await prisma.registrations.create({ data });
  return create;
}
