"use client";
import { registrationsWithRelations } from "@/types/prismaRelations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { competitionType } from "@/utils/normalizeCompetitionType";

interface RegistrationsTableProps {
  registrations: registrationsWithRelations[];
}

export default function RegistrationsTable({
  registrations,
}: RegistrationsTableProps) {
  const router = useRouter();
  return (
    <React.Fragment>
      <table className="whitespace-no-wrap w-full">
        <thead>
          <tr className="border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Team Name</th>
            <th className="px-4 py-3">Instance Name</th>
            <th className="px-4 py-3">Transaction Proof</th>
            <th className="px-4 py-3">Competition</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last Updated By</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-gray-200">
          {registrations.map((registration, i) => (
            <tr
              key={i}
              className="text-gray-700 transition-all hover:cursor-pointer hover:bg-gray-300"
              onClick={() => router.push(`detail/${registration.id}`)}
            >
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">{registration.user?.email}</p>
                  </div>
                </div>
              </td>
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
                    <a
                      href={registration.transaction_proof}
                      className="font-semibold text-blue-500"
                    >
                      {registration.transaction_proof}
                    </a>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">
                      {competitionType[registration.competition_type] || "None"}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-xs">
                <span
                  className={`rounded-full ${
                    registration.status == "approved"
                      ? "bg-green-700 text-green-100"
                      : registration.status == "in_review"
                        ? "bg-yellow-500 text-yellow-100"
                        : "bg-red-700 text-red-100"
                  } px-2 py-1 font-semibold leading-tight`}
                >
                  {`${registration.status}`}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">
                      {registration.updated_by?.name || "None"}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
