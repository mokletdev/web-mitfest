import CyberSecurityModel from "@/models/Cyber_Security.model";
import { connectAndQuery } from "../connectAndQuery";

export function getAllCyberSecurities() {
  return connectAndQuery(async () => await CyberSecurityModel.find({}));
}

export function getCyberSecuritiesCount() {
  return connectAndQuery(async () => await CyberSecurityModel.countDocuments({}));
}
