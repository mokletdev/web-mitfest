import CloudComputingModel, {
  CloudComputing,
} from "@/models/Cloud_Computing.model";
import { connectMongo } from "../mongoose";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function getAllCloudComputings() {
  return connectAndQuery(async () => await CloudComputingModel.find({}));
}

export function getCloudComputingsCount() {
  return connectAndQuery(async () => await CloudComputingModel.countDocuments({}));
}
