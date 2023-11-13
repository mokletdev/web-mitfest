import { FaUser, FaPencilAlt } from "react-icons/fa";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { getAllAnnounce } from "@/utils/queries/announcement.query";
import AnnouncementTable from "./components/AnnouncementTable";

export default async function Admin() {
  const announcements = JSON.parse(JSON.stringify(await getAllAnnounce()));

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
              <span className="text-xl text-white">1000</span>
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
              <span className="text-xl text-white">1000</span>
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
              <span className="text-xl text-white">1000</span>
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
              <span className="text-xl text-white">1000</span>
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
              <span className="text-xl text-white">1000</span>
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
              <span className="text-xl text-white">1000</span>
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
            <AnnouncementTable announcements={announcements} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const revalidate = 0;