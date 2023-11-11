import { models, model, Schema, InferSchemaType, Types } from "mongoose";
const AnnouncementSchema = new Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Date, required: true, default: Date.now },
  content: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "all",
      "cyber_security",
      "cloud_computing",
      "web_design",
      "bussines_plan",
      "mobile_legend",
    ],
    required: true,
    default: "all",
  },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export type Announcement = InferSchemaType<typeof AnnouncementSchema>;

const AnnouncementModel =
  models.Announcement || model("Announcement", AnnouncementSchema);
export default AnnouncementModel;
