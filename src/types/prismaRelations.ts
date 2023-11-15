import { Prisma } from "@prisma/client";

export type announcementWithUser = Prisma.announcementsGetPayload<{
  include: { user: true };
}>;

export type registrationsWithUpdatedBy = Prisma.registrationsGetPayload<{
  include: { updated_by: true };
}>;

export type registrationsWithCreatedBy = Prisma.registrationsGetPayload<{
  include: { user: true };
}>;
