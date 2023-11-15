import { FaUser } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { getAllAnnounce } from "@/utils/queries/announcement.query";
import AnnouncementTable from "./components/AnnouncementTable";
import { getRegistrationsCount } from "@/utils/queries/registration.query";

export default async function Admin() {
  const announcements = await getAllAnnounce();
  const participantCount = {
    mobileLegend: await getRegistrationsCount({ competition: "mobile_legend" }),
    webDesign: await getRegistrationsCount({ competition: "web_design" }),
    businessPlan: await getRegistrationsCount({ competition: "business_plan" }),
    cyberSecurity: await getRegistrationsCount({
      competition: "cyber_security",
    }),
    cloudComputing: await getRegistrationsCount({
      competition: "cloud_computing",
    }),
  };

  return (
    <React.Fragment>
      <div className="mb-5 flex flex-col gap-2">
        <h1 className="text-xl font-bold">Data Pendaftar</h1>
        <div className="grid grid-cols-2 gap-2 md:gap-4 xl:grid-cols-3">
          <Link
            href={"/admin/cyber-security"}
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-600 p-4 transition-all duration-300 hover:bg-opacity-75"
          >
            <div className="text-primary rounded-xl bg-gray-200 p-2">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Cyber Security
              </span>
              <span className="text-xl text-white">
                {participantCount.cyberSecurity}
              </span>
            </div>
          </Link>
          <Link
            href={"/admin/cloud-computing"}
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-600 p-4 transition-all duration-300 hover:bg-opacity-75"
          >
            <div className="text-primary rounded-xl bg-gray-200 p-2">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Cloud Computing
              </span>
              <span className="text-xl text-white">
                {participantCount.cloudComputing}
              </span>
            </div>
          </Link>
          <Link
            href={"/admin/web-design"}
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-600 p-4 transition-all duration-300 hover:bg-opacity-75"
          >
            <div className="text-primary rounded-xl bg-gray-200 p-2">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Web Design
              </span>
              <span className="text-xl text-white">
                {participantCount.webDesign}
              </span>
            </div>
          </Link>
          <Link
            href={"/admin/business-plan"}
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-600 p-4 transition-all duration-300 hover:bg-opacity-75"
          >
            <div className="text-primary rounded-xl bg-gray-200 p-2">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Business Plan
              </span>
              <span className="text-xl text-white">
                {participantCount.businessPlan}
              </span>
            </div>
          </Link>
          <Link
            href={"/admin/mobile-legends"}
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-600 p-4 transition-all duration-300 hover:bg-opacity-75"
          >
            <div className="text-primary rounded-xl bg-gray-200 p-2">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Mobile Legends
              </span>
              <span className="text-xl text-white">
                {participantCount.mobileLegend}
              </span>
            </div>
          </Link>
          <Link
            href={"#"}
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-600 p-4 transition-all duration-300 hover:bg-opacity-75"
          >
            <div className="text-primary rounded-xl bg-gray-200 p-2">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">All</span>
              <span className="text-xl text-white">
                {Object.values(participantCount).reduce(
                  (sum, count) => sum + count,
                  0,
                )}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Pengumuman</h1>
        </div>
        <div className="shadow-xs w-full overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <AnnouncementTable announcements={announcements} type="all" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const revalidate = 0;
