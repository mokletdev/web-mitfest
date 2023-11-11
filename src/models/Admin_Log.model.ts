import { models, model, Schema, InferSchemaType } from "mongoose";

const AdminLogSchema = new Schema({
  content: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export type AdminLog = InferSchemaType<typeof AdminLogSchema>;

const AdminLogModel =
  models.Admin_Logs || model("Admin_Log", AdminLogSchema);
export default AdminLogModel;
