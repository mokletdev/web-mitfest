import MobileLegendModel from "@/models/Mobile_Legend.model";
import { connectMongo } from "../mongoose";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function getAllMobileLegends() {
  return connectAndQuery(async () => await MobileLegendModel.find({}));
}

export function getMobileLegendsCount() {
  return connectAndQuery(async () => await MobileLegendModel.countDocuments({}));
}
