import mongoose from "mongoose";

const { MONGO_URI } = process.env;

if (!MONGO_URI) throw new Error("MONGO_URI is not defined.");

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null };

export const connectMongo = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(MONGO_URI);

  return cached.conn;
};

export function stringToObjectId(id: string): mongoose.Types.ObjectId | null {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return new mongoose.Types.ObjectId(id);
  } else {
    return null;
  }
}
