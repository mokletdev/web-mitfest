"use client";
import { registrationsWithRelations } from "@/types/prismaRelations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import React from "react";
import { ParticipantStatus } from "@prisma/client";
import { updateCompetitionSubmissionAction } from "../actions";
import { useSession } from "next-auth/react";

interface RegistrationsTableProps {
  participants: registrationsWithRelations[];
  submission: "firstSubmission" | "secondSubmission";
  status: ParticipantStatus;
}

export default function ParticipantsTable({
  participants,
  submission,
  status,
}: RegistrationsTableProps) {
  const participantsStatusNumber = {
    participant: 0,
    semifinalist: 1,
    finalist: 2,
  };
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <React.Fragment>
      <table className="whitespace-no-wrap w-full overflow-scroll">
        <thead>
          <tr className="border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-3 py-2">No</th>
            <th className="px-4 py-3">Team Name</th>
            <th className="px-4 py-3">Instance Name</th>
            <th className="px-4 py-3">Submission</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last Updated By</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-gray-200">
          {participants.map((registration, i) => {
            const competitionSubmission = registration?.competition_submission;
            return (
              <tr
                key={i}
                className="text-gray-700 transition-all hover:cursor-pointer hover:bg-gray-300"
                onClick={() => router.push(`/admin/detail/${registration.id}`)}
              >
                <td className="px-3 py-2">
                  <div className="flex items-center text-sm">
                    <p className="font-semibold">{i + 1}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex max-w-[130px] items-center overflow-clip whitespace-nowrap text-sm">
                    <p className="font-semibold">{registration.team_name}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex max-w-[135px] items-center overflow-clip whitespace-nowrap text-sm">
                    <p className="font-semibold">
                      {registration.instance_name}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    {competitionSubmission?.[submission] == null ? (
                      <span className="whitespace-nowrap rounded-full bg-red-700 p-1.5 text-center font-semibold leading-tight text-red-100">
                        Not Submit
                      </span>
                    ) : (
                      <a
                        href={competitionSubmission![submission]!}
                        className="font-semibold text-blue-500"
                      >
                        {competitionSubmission![submission]}
                      </a>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-xs">
                  <select
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) =>
                      updateCompetitionSubmissionAction(
                        competitionSubmission?.id!,
                        e.target.value as ParticipantStatus,
                        session?.user?.id!,
                        registration.id,
                      ).then(() => toast.success("Status berhasil di-update"))
                    }
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    defaultValue={
                      participantsStatusNumber[status] <=
                      participantsStatusNumber[competitionSubmission?.status!]
                        ? status
                        : competitionSubmission?.status
                    }
                  >
                    <option
                      className="bg-red-500"
                      value={
                        Object.keys(participantsStatusNumber)[
                          participantsStatusNumber[status] - 1
                        ]
                      }
                    >
                      Tidak Lolos
                    </option>
                    <option className="bg-green-500" value={status}>
                      Lolos
                    </option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center whitespace-nowrap text-sm">
                    <p className="font-semibold">
                      {registration?.updated_by?.name || "None"}
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
