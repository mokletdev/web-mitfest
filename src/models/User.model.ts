import { models, model, Schema, InferSchemaType } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["SuperAdmin", "Admin", "User"],
    required: true,
    default: "User",
  },
  is_verified: { type: Boolean, required: true, default: true },
});

export type User = InferSchemaType<typeof UserSchema>;

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
