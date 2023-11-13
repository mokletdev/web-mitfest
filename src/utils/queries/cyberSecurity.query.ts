import CyberSecurityModel from "@/models/Cyber_Security.model";
import { connectMongo } from "../mongoose";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function getAllCyberSecurities() {
  return connectAndQuery(async () => await CyberSecurityModel.find({}));
}

export function getCyberSecuritiesCount() {
  return connectAndQuery(async () => await CyberSecurityModel.countDocuments({}));
}
