import Announcement from "@/models/Announcement.model";
import type { Announcement as TAnnouncement } from "@/models/Announcement.model";
import { ObjectId, UpdateQuery } from "mongoose";
import { connectAndQuery } from "../connectAndQuery";

export function findAnnounceByType(type: TAnnouncement["type"]) {
  return connectAndQuery(
    async () => await Announcement.find({ type }).populate("user_id")
  );
}

export function getAllAnnounce() {
  return connectAndQuery(
    async () => await Announcement.find({}).populate("user_id")
  );
}

export function updateAnnouncement(
  id: string | ObjectId,
  updateQuery: UpdateQuery<any>
) {
  return connectAndQuery(
    async () => await Announcement.findByIdAndUpdate(id, updateQuery)
  );
}

export function deleteAnnouncement(id: string | ObjectId) {
  return connectAndQuery(async () => await Announcement.findByIdAndDelete(id));
}

export function createAnnouncement(announcement: TAnnouncement) {
  return connectAndQuery(async () => await Announcement.create(announcement));
}
