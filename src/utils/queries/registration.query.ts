import RegistrationModel, { Registration } from "@/models/Registration.model";
import { connectMongo } from "../mongoose";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function getAllRegistrations() {
  return connectAndQuery(async () => await RegistrationModel.find({}));
}

export function getRegistrationsCount(filter: any) {
  return connectAndQuery(
    async () => await RegistrationModel.countDocuments(filter),
  );
}
