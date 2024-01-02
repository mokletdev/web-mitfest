import prisma from "@/lib/prisma";

export async function getALlAdminLogs() {
  const adminLogs = await prisma.admin_logs.findMany({});
  return adminLogs;
}
