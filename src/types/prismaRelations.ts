import { Prisma } from "@prisma/client";

export type announcementWithUser = Prisma.announcementsGetPayload<{
  include: { user: true };
}>;

export type registrationsWithRelations = Prisma.registrationsGetPayload<{
  include: { user: true; updated_by: true; competition_submission: true };
}>;

export type tokensWithWithRelations = Prisma.verification_tokensGetPayload<{
  include: { user: true };
}>;
