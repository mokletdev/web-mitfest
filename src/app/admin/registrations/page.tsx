import React from "react";
import RegistrationsTable from "./components/RegistrationsTable";
import { getAllRegistrations } from "@/utils/queries/registration.query";

export default async function RegistrationsPage() {
  const registrations = await getAllRegistrations();

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Data Registran</h1>
        </div>
        <div className="shadow-xs w-full overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <RegistrationsTable registrations={registrations} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
