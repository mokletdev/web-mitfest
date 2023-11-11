import { models, model, Schema, InferSchemaType } from "mongoose";

const RegistrationSchema = new Schema({
  email: { type: String, required: true, unique: true },
  team_name: { type: String, required: true },
  leader_name: { type: String, required: true },
  leader_wa_number: { type: String, required: true },
  instance_name: { type: String, required: true },
  team_members: {
    type: [
      {
        name: { type: String, required: true },
        photo: { type: String, required: true },
        student_card: { type: String, required: true },
        twibbon_link: { type: String, required: true },
        id_ml: { type: String, required: false },
      },
    ],
    required: true,
  },
  transaction_proof: { type: String, required: true },
  competition: {
    type: String,
    enum: [
      "cyber_security",
      "cloud_computing",
      "web_design",
      "bussines_plan",
      "mobile_legend",
    ],
    required: true,
  },
  status: {
    type: String,
    enum: ["in_review", "aprroved", "rejected"],
    required: true,
    default: "in_review",
  },
  is_verified: { type: Boolean, required: true, default: true },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  updated_by: { type: Schema.Types.ObjectId, required: false, ref: "User" },
});

export type Registration = InferSchemaType<typeof RegistrationSchema>;

const RegistrationModel =
  models.Registration || model("Registration", RegistrationSchema);
export default RegistrationModel;
