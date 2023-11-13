import WebDesignModel from "@/models/Web_Design.model";
import { connectAndQuery } from "../connectAndQuery";

export function getAllWebDesigns() {
  return connectAndQuery(async () => await WebDesignModel.find({}));
}

export function getWebDesignsCount() {
  return connectAndQuery(async () => await WebDesignModel.countDocuments());
}
