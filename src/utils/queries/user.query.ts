import { connectMongo } from "../mongoose";
import User from "@/models/User.model";
import type { User as TUser } from "@/models/User.model";
import { compareData } from "../encryption";
import type { ObjectId } from "mongoose";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export function findUserByEmail(email: string) {
  return connectAndQuery(async () => await User.findOne({ email }));
}

export function findUserById(id: ObjectId) {
  return connectAndQuery(async () => await User.findById(id));
}

export function getAllUsers() {
  return connectAndQuery(async () => await User.find({}));
}

export function getAllAdmins() {
  return connectAndQuery(async () => await User.find({ role: "Admin" }));
}

export function getAllParticipants() {
  return connectAndQuery(async () => await User.find({ role: "User" }));
}

export function createUser(user: TUser) {
  return connectAndQuery(async () => await User.create(user));
}

type authenticate = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  user?: TUser;
};

export async function authenticate(email: string, password: string) {
  const findUser = await findUserByEmail(email);
  let res: authenticate = {
    status: "INVALID",
    user: undefined,
  };

  if (findUser) {
    if (findUser) {
      if (!password) res.status = "NO_PASSWORD";
      else {
        const validateUser = compareData(password, findUser.password!);
        if (!validateUser) res.status = "INVALID";
        else {
          res.status = "SUCCESS";
          res.user = findUser;
        }
      }
    } else res.status = "INVALID";
  }
  return res;
}
