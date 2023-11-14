import { Prisma } from "@prisma/client";

export type announcementWithUser = Prisma.announcementsGetPayload<{
  include: { user: true };
}>;
