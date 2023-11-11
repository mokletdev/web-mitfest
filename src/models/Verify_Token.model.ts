import { models, model, Schema, InferSchemaType, Types } from "mongoose";
const VerifyTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    default: () => Math.random().toString(36).substring(2, 17).toUpperCase(),
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: "1d" },
  },
  type: { type: String, required: true, enum: ["verify", "reset_password"] },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export type VerifyToken = InferSchemaType<typeof VerifyTokenSchema>;

const VerifyTokenModel =
  models.Verify_Token || model("Verify_Token", VerifyTokenSchema);
export default VerifyTokenModel;
