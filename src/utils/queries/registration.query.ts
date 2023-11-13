import RegistrationModel, { Registration } from "@/models/Registration.model";
import { connectAndQuery } from "../connectAndQuery";

export function getAllRegistrations() {
  return connectAndQuery(async () => await RegistrationModel.find({}));
}

export function getRegistrationsCount(filter: any) {
  return connectAndQuery(
    async () => await RegistrationModel.countDocuments(filter),
  );
}

export function createRegistration(registration: any) {
  return connectAndQuery(
    async () => await RegistrationModel.create(registration),
  );
}
