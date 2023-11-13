import BusinessPlanModel from "@/models/Business_Plan.model";
import { connectAndQuery } from "../connectAndQuery";

export function getAllBusinessPlans() {
  return connectAndQuery(async () => await BusinessPlanModel.find({}));
}

export function getBusinessPlansCount() {
  return connectAndQuery(async () => await BusinessPlanModel.countDocuments({}));
}
