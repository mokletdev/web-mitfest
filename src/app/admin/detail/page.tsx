import React from "react";
import RegistrationsTable from "../registrations/components/RegistrationsTable";
import { getAllRegistrations } from "@/utils/queries/registration.query";

export default async function RegistrationsPage() {
  const registrations = await getAllRegistrations();
// idk what i just doing, but just doing it. b̶t̶w̶ ̶s̶o̶m̶e̶t̶i̶n̶g̶ ̶e̶r̶r̶o̶r̶ ̶i̶n̶ ̶n̶o̶t̶f̶o̶u̶n̶d̶(̶)̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶
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