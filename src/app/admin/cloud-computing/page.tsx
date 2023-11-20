import { FaUser } from "react-icons/fa";
import React from "react";
import {
  findAnnounceByType,
  getAllAnnounce,
} from "@/utils/queries/announcement.query";
import AnnouncementTable from "../components/AnnouncementTable";

export default async function cyberSecurity() {
  const announcements = (await findAnnounceByType("cloud_computing")).reverse();

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Pengumuman</h1>
        </div>
        <div className="shadow-xs w-full overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <AnnouncementTable
              announcements={announcements}
              type="cloud_computing"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const revalidate = 0;
