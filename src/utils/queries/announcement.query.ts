import prisma from "@/lib/prisma";
import { Prisma, $Enums } from "@prisma/client";

export async function findAnnounceByType(type: $Enums.AnnouncementType) {
  const announcements = await prisma.announcements.findMany({
    where: { type },
    include: { user: true },
  });
  return announcements;
}

export async function getAllAnnounce() {
  const announcements = await prisma.announcements.findMany({
    include: { user: true },
  });
  return announcements;
}

export async function updateAnnouncement(
  id: string,
  data: Prisma.announcementsUncheckedUpdateInput,
) {
  const updateQuery = await prisma.announcements.update({
    where: { id },
    data,
  });
  return updateQuery;
}

export async function deleteAnnouncement(id: string) {
  const deleteQuery = await prisma.announcements.delete({ where: { id } });
  return deleteQuery;
}

export async function createAnnouncement(
  data: Prisma.announcementsUncheckedCreateInput,
) {
  const createQuery = await prisma.announcements.create({ data });
  return createQuery;
}
