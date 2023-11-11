import { models, model, Schema, InferSchemaType } from "mongoose";

const CyberSecuritySchema = new Schema({
  is_finalist: { type: Boolean, required: true, default: false },
  registration_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Registation",
  },
  updated_by: { type: Schema.Types.ObjectId, required: false, ref: "User" },
});

export type CyberSecurity = InferSchemaType<typeof CyberSecuritySchema>;

const CyberSecurityModel =
  models.Cyber_Security || model("Cyber_Security", CyberSecuritySchema);
export default CyberSecurityModel;
