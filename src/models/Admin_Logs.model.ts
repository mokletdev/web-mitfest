import { models, model, Schema, InferSchemaType } from "mongoose";

const AdminLogsSchema = new Schema({
  content: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export type AdminLogs = InferSchemaType<typeof AdminLogsSchema>;

const AdminLogsModel =
  models.Admin_Logs || model("Admin_Logs", AdminLogsSchema);
export default AdminLogsModel;
