import React from "react";
import { getAllAdmins } from "@/utils/queries/user.query";
import UsersTable from "./components/UsersTable";

export default async function Users() {
  const admins = await getAllAdmins();

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-xl font-bold">Data Admin</h1>
        <div className="shadow-xs w-full overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <UsersTable users={admins} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const revalidate = 1;
