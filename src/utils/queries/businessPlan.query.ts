import { connectMongo } from "../mongoose";
import BusinessPlanModel from "@/models/Business_Plan.model";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function getAllBusinessPlans() {
  return connectAndQuery(async () => await BusinessPlanModel.find({}));
}

export function getBusinessPlansCount() {
  return connectAndQuery(async () => await BusinessPlanModel.countDocuments({}));
}
