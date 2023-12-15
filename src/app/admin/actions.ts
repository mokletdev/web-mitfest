"use server";
import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from "@/utils/queries/announcement.query";
import { updateCompetitionSubmission } from "@/utils/queries/competitionSubmissions.query";
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

export async function updateCompetitionSubmissionAction(
  submissionId: string,
  status: $Enums.ParticipantStatus,
  updated_by_id: string,
  registrationId: string,
) {
  try {
    await updateCompetitionSubmission(submissionId, {
      status,
      updated_by_id,
      registrationId,
    });
  } catch (err) {
    console.log(err);
  }
}
