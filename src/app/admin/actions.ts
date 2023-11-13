"use server";
import {
  deleteAnnouncement,
  updateAnnouncement,
} from "@/utils/queries/announcement.query";
import { ObjectId } from "mongoose";

export async function updateAnnouncementAction(
  user_id: string | undefined,
  announceId: ObjectId,
  content: string
) {
  try {
    await updateAnnouncement(announceId, {
      content,
      user_id,
      date: new Date(),
    });
  } catch (err) {}
}

export async function deleteAnnouncementAction(announceId: ObjectId) {
  try {
    await deleteAnnouncement(announceId);
  } catch (err) {}
}
