import { compareData } from "../encryption";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import type { users } from "@prisma/client";
import type { ObjectId } from "bson";

export async function findUserByEmail(email: string) {
  const user = await prisma.users.findUnique({ where: { email } });
  return user;
}

export async function findUserById(id: ObjectId) {
  const user = await prisma.users.findUnique({ where: { id: id.toString() } });
  return user;
}

export async function getAllUsers() {
  const users = await prisma.users.findMany({});
  return users;
}

export async function getAllAdmins() {
  const admins = await prisma.users.findMany({ where: { role: "Admin" } });
  return admins;
}

export async function getAllParticipants() {
  const participants = await prisma.users.findMany({ where: { role: "User" } });
  return participants;
}

export async function createUser(data: Prisma.usersCreateInput) {
  const create = await prisma.users.create({ data });
  return create;
}

type authenticate = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  user?: users;
};

export async function authenticate(email: string, password: string) {
  const findUser = await findUserByEmail(email);
  let res: authenticate = {
    status: "INVALID",
    user: undefined,
  };

  if (findUser) {
    if (!findUser.password) res.status = "NO_PASSWORD";
    else {
      const validateUser = compareData(password, findUser.password!);
      if (!validateUser) res.status = "INVALID";
      else {
        res.status = "SUCCESS";
        res.user = findUser;
      }
    }
  } else res.status = "INVALID";
  return res;
}

export async function updateUser(id: string, data: Prisma.usersUpdateInput) {
  const update = await prisma.users.update({ where: { id }, data });
  return update;
}

export async function deleteUser(id: string) {
  const deleteUser = await prisma.users.delete({ where: { id } });
  return deleteUser;
}
