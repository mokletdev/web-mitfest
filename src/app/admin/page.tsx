import { FaUser, FaPencilAlt } from "react-icons/fa";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { getAllAnnounce } from "@/utils/queries/announcement.query";
import AnnouncementTable from "./components/AnnouncementTable";

export default async function Admin() {
  const announcements = JSON.parse(JSON.stringify(await getAllAnnounce()));

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2 mb-5">
        <h1 className="text-xl font-bold">Data Pendaftar</h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
          <Link
            href={"/admin/cyber-security"}
            className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4 hover:bg-opacity-75 transition-all duration-300"
          >
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
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
            className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4 hover:bg-opacity-75 transition-all duration-300"
          >
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
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
            className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4 hover:bg-opacity-75 transition-all duration-300"
          >
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
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
            className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4 hover:bg-opacity-75 transition-all duration-300"
          >
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
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
            className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4 hover:bg-opacity-75 transition-all duration-300"
          >
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
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
            className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4 hover:bg-opacity-75 transition-all duration-300"
          >
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
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
        <h1 className="text-xl font-bold">Pengumuman</h1>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <AnnouncementTable announcements={announcements} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
