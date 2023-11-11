import { models, model, Schema, InferSchemaType } from "mongoose";

const CloudComputingSchema = new Schema({
  is_finalist: { type: Boolean, required: true, default: false },
  registration_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Registation",
  },
  updated_by: { type: Schema.Types.ObjectId, required: false, ref: "User" },
});

export type CloudComputing = InferSchemaType<typeof CloudComputingSchema>;

const CloudComputingModel =
  models.Cloud_Computing || model("Cloud_Computing", CloudComputingSchema);
export default CloudComputingModel;
