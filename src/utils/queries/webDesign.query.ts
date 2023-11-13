import WebDesignModel from "@/models/Web_Design.model";
import { connectMongo } from "../mongoose";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function getAllWebDesigns() {
  return connectAndQuery(async () => await WebDesignModel.find({}));
}

export function getWebDesignsCount() {
  return connectAndQuery(async () => await WebDesignModel.countDocuments());
}
