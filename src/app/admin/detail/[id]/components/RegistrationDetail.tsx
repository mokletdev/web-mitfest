"use client";
import { registrationsWithRelations } from "@/types/prismaRelations";
import Link from "next/link";
import { competitionType } from "@/utils/normalizeCompetitionType";
import { updateStatusRegistration } from "../actions";

interface RegistrationDetailProps {
  registration: registrationsWithRelations;
}

export default function RegistrationDetail({
  registration,
}: RegistrationDetailProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">Registration Detail</h1>

      <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-4">
        <div className="group relative z-0 mb-6 w-full">
          <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0">
            {registration?.user?.email}
          </span>
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
          >
            Email address
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0">
            {registration?.team_name}
          </span>
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
          >
            Team Name
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0">
            {registration?.instance_name}
          </span>
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
          >
            Instance
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0">
            {competitionType[registration?.competition_type || "none"]}
          </span>
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
          >
            Competition Type
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <Link
            href={registration?.transaction_proof || "/"}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
          >
            {registration?.transaction_proof}
          </Link>
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
          >
            Transaction Proof
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Team Members Information</h2>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Team Leader</h2>

          <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="group relative z-0 mb-6 w-full">
              <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0">
                {registration?.leader_name}
              </span>
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
              >
                Name
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <Link
                href={`https://wa.me/${registration?.leader_wa_number}}`}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
              >
                {registration?.leader_wa_number}
              </Link>
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
              >
                Whatsapp Number
              </label>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-3">
            <div className="group relative z-0 mb-6 w-full">
              <Link
                href={registration?.team_members[0]?.photo || "/"}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
              >
                {registration?.team_members[0]?.photo || "None"}
              </Link>
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
              >
                Photo
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <Link
                href={registration?.team_members[0]?.student_card || "/"}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
              >
                {registration?.team_members[0]?.student_card || "None"}
              </Link>
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
              >
                Student Card
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <Link
                href={registration?.team_members[0]?.twibbon_link || "/"}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
              >
                {registration?.team_members[0]?.twibbon_link || "None"}
              </Link>
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
              >
                Twibbon Link
              </label>
            </div>
          </div>
          {registration?.team_members[0]?.id_ml ? (
            <div className="group relative z-0 mb-6 w-full">
              <Link
                href={registration?.team_members[0]?.twibbon_link || "/"}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
              >
                {registration?.team_members[0]?.twibbon_link || "None"}
              </Link>
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
              >
                Twibbon Link
              </label>
            </div>
          ) : null}
        </div>
        {registration?.team_members?.slice(1).map((member, key) => {
          return (
            <div className="flex flex-col gap-2" key={key}>
              <h2 className="font-semibold">Team Member {key + 1}</h2>
              <div className="group relative z-0 mb-6 w-full">
                <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0">
                  {member.name}
                </span>
                <label
                  htmlFor="floating_email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
                >
                  Name
                </label>
              </div>
              <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-3">
                <div className="group relative z-0 mb-6 w-full">
                  <Link
                    href={member.photo || "/"}
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    {member.photo || "None"}
                  </Link>
                  <label
                    htmlFor="floating_email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
                  >
                    Photo
                  </label>
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <Link
                    href={member.student_card || "/"}
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    {member.student_card || "None"}
                  </Link>
                  <label
                    htmlFor="floating_email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
                  >
                    Student Card
                  </label>
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <Link
                    href={member.twibbon_link || "/"}
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    {member.twibbon_link || "None"}
                  </Link>
                  <label
                    htmlFor="floating_email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
                  >
                    Twibbon Link
                  </label>
                </div>
              </div>
              {member.id_ml ? (
                <div className="group relative z-0 mb-6 w-full">
                  <span className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-blue-600 hover:underline focus:border-blue-600 focus:outline-none focus:ring-0">
                    {member.id_ml}
                  </span>
                  <label
                    htmlFor="floating_email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
                  >
                    ID Mobile Legends
                  </label>
                </div>
              ) : null}
            </div>
          );
        })}
        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Status
          </label>
          <select
            onChange={(e) =>
              updateStatusRegistration(e.target.value, registration?.id || "")
            }
            id="status"
            defaultValue={registration?.status}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          >
            <option value="in_review" disabled hidden>
              Un Reviewed
            </option>
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
          </select>
        </div>
      </div>
    </div>
  );
}
