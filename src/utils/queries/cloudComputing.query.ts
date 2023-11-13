import CloudComputingModel, {
  CloudComputing,
} from "@/models/Cloud_Computing.model";
import { connectAndQuery } from "../connectAndQuery";

export function getAllCloudComputings() {
  return connectAndQuery(async () => await CloudComputingModel.find({}));
}

export function getCloudComputingsCount() {
  return connectAndQuery(async () => await CloudComputingModel.countDocuments({}));
}
