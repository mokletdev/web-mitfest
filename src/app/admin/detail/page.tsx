import React from "react";
import RegistrationsTable from "../registrations/components/RegistrationsTable";
import { getAllRegistrations } from "@/utils/queries/registration.query";

export default async function RegistrationsPage() {
  const registrations = await getAllRegistrations();
// idk what i just doing, but just doing it, btw someting error in notfound() function 
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

export const revalidate = 0;