"use server";

import { updateRegistration } from "@/utils/queries/registration.query";
import Prisma from "@prisma/client";

export async function updateStatusRegistration(
  status: string,
  registrationId: string,
) {
  await updateRegistration(registrationId, {
    status: status as Prisma.$Enums.RegistrationStatus,
  });
}
