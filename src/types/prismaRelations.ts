import { Prisma } from "@prisma/client";

export type announcementWithUser = Prisma.announcementsGetPayload<{
  include: { user: true };
}>;

export type registrationsWithCreatedByAndUpdatedBy =
  Prisma.registrationsGetPayload<{
    include: { user: true; updated_by: true };
  }>;
