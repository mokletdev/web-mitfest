import { models, model, Schema, InferSchemaType, Document } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: false },
  role: {
    type: String,
    enum: ["SuperAdmin", "Admin", "User"],
    required: true,
    default: "User",
  },
  is_verified: { type: Boolean, required: true, default: true },
});
type _id = {
  _id?: Schema.Types.ObjectId;
};
export type User = InferSchemaType<typeof UserSchema> & _id;

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
