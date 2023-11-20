"use server";
import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from "@/utils/queries/announcement.query";
import { $Enums } from "@prisma/client";

export async function updateAnnouncementAction(
  user_id: string,
  announceId: string,
  content: string,
) {
  try {
    await updateAnnouncement(announceId, {
      content,
      date: new Date(),
      user_id,
    });
  } catch (err) {}
}

export async function deleteAnnouncementAction(announceId: string) {
  try {
    await deleteAnnouncement(announceId);
  } catch (err) {}
}

export async function createAnnouncementAction(announcement: {
  content: string;
  type?: $Enums.AnnouncementType;
  user_id: string;
  v: number;
}) {
  try {
    await createAnnouncement(announcement);
  } catch (error) {}
}
