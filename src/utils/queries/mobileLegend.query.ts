import MobileLegendModel from "@/models/Mobile_Legend.model";
import { connectAndQuery } from "../connectAndQuery";

export function getAllMobileLegends() {
  return connectAndQuery(async () => await MobileLegendModel.find({}));
}

export function getMobileLegendsCount() {
  return connectAndQuery(async () => await MobileLegendModel.countDocuments({}));
}
