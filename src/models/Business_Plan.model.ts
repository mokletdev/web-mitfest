import { models, model, Schema, InferSchemaType } from "mongoose";

const BusinessPlanSchema = new Schema({
  first_submission: { type: String, required: false },
  second_submission: { type: String, required: false },
  status: {
    type: String,
    enum: ["participant", "semifinalist", "finalist"],
    required: true,
    default: "participant",
  },
  registration_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Registation",
  },
  updated_by: { type: Schema.Types.ObjectId, required: false, ref: "User" },
});

export type BusinessPlan = InferSchemaType<typeof BusinessPlanSchema>;

const BusinessPlanModel =
  models.Business_Plan || model("Business_Plan", BusinessPlanSchema);
export default BusinessPlanModel;
