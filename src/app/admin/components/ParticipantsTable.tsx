"use client";
import { registrationsWithRelations } from "@/types/prismaRelations";
import Link from "next/link";
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
      <table className="whitespace-no-wrap w-full">
        <thead>
          <tr className="border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
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
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{registration.team_name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">
                        {registration.instance_name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      {competitionSubmission?.[submission] == null ? (
                        <span className="rounded-full bg-red-700 px-2 py-1 font-semibold leading-tight text-red-100">
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
                      )
                    }
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    defaultValue={competitionSubmission?.status}
                  >
                    <option
                      value={
                        Object.keys(participantsStatusNumber)[
                          participantsStatusNumber[status] - 1
                        ]
                      }
                    >
                      Tidak Lolos
                    </option>
                    <option value={status}>Lolos</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">
                        {registration?.updated_by?.name || "None"}
                      </p>
                    </div>
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
