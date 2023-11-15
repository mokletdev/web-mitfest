import { registrationsWithCreatedBy } from "@/types/prismaRelations";
import React from "react";

interface RegistrationsTableProps {
  registrations: registrationsWithCreatedBy[];
}

export default function RegistrationsTable({
  registrations,
}: RegistrationsTableProps) {
  return (
    <React.Fragment>
      <button
        className="mb-1 mr-1 rounded bg-emerald-500 px-3 py-1 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-emerald-600 hover:shadow-lg focus:outline-none active:bg-emerald-700"
        type="button"
        // onClick={() => add()}
      >
        Add New
      </button>
      <table className="whitespace-no-wrap w-full">
        <thead>
          <tr className="border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Team Name</th>
            <th className="px-4 py-3">Instance Name</th>
            <th className="px-4 py-3">Transaction Proof</th>
            <th className="px-4 py-3">Competition</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Updated By</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-gray-200">
          {registrations.map((registration, i) => (
            <tr
              key={i}
              className="text-gray-700 transition-all hover:bg-gray-400"
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
                    <p className="font-semibold">
                      {registration.transaction_proof}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">{registration.competition}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">{registration.status}</p>
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
