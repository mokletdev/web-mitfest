import { connectMongo } from "../mongoose";
import User from "@/models/User.model";
import type { User as TUser } from "@/models/User.model";
import { compareData } from "../encryption";

async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectMongo();
  return queryFn();
}

export async function findUserByEmail(email: string) {
  return connectAndQuery(() => User.findOne({ email }));
}

export async function getAllUsers() {
  return connectAndQuery(() => User.find({}));
}

export async function getAllAdmins() {
  return connectAndQuery(() => User.find({ role: "Admin" }));
}

export async function getAllParticipants() {
  return connectAndQuery(() => User.find({ role: "User" }));
}

export async function createUser(user: TUser) {
  return connectAndQuery(() => User.create(user));
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
