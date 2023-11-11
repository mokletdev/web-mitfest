import { models, model, Schema, InferSchemaType } from "mongoose";

const WebDesignSchema = new Schema({
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

export type WebDesign = InferSchemaType<typeof WebDesignSchema>;

const WebDesignModel =
  models.Web_Design || model("Web_Design", WebDesignSchema);
export default WebDesignModel;
