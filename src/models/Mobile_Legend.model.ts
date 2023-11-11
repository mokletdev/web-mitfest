import { models, model, Schema, InferSchemaType } from "mongoose";

const MobileLegendSchema = new Schema({
  is_finalist: { type: Boolean, required: true, default: false },
  registration_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Registation",
  },
  updated_by: { type: Schema.Types.ObjectId, required: false, ref: "User" },
});

export type MobileLegend = InferSchemaType<typeof MobileLegendSchema>;

const MobileLegendModel =
  models.Mobile_Legend || model("Mobile_Legend", MobileLegendSchema);
export default MobileLegendModel;
