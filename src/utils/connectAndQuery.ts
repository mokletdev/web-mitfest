import { connectMongo } from "./mongoose";

export async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}
