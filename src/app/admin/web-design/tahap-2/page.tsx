import React from "react";
import { findRegistrations } from "@/utils/queries/registration.query";
import ParticipantsTable from "../../components/ParticipantsTable";

export default async function Tahap() {
  const participants = (
    await findRegistrations({
      competition_type: "web_design",
      competition_submission: { status: { in: ["semifinalist", "finalist"] } },
    })
  ).reverse();

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">
            Web Desain{" "}
            <span className="rounded-md bg-red-500 p-1 text-white">
              Tahap 2
            </span>
          </h1>
        </div>
        <div className="shadow-xs w-full overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <ParticipantsTable
              participants={participants}
              submission="secondSubmission"
              status="finalist"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const revalidate = 0;
