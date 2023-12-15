import React from "react";
import { findRegistrations } from "@/utils/queries/registration.query";
import ParticipantsTable from "../../components/ParticipantsTable";

export default async function Tahap() {
  const participants = (
    await findRegistrations({
      competition_type: "web_design",
      status: "approved",
    })
  ).reverse();

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Web Desain Tahap 1</h1>
        </div>
        <div className="shadow-xs w-full overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <ParticipantsTable
              participants={participants}
              submission="firstSubmission"
              status="semifinalist"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const revalidate = 0;
