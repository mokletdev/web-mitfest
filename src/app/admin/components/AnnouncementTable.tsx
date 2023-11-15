"use client";
import { FaPencilAlt } from "react-icons/fa";
import EditAnnouncementModal from "./EditAnnouncementModal";
import { Suspense, useState } from "react";
import CreateAnnouncementModal from "./CreateAnnouncementModal";
import { announcementWithUser } from "@/types/prismaRelations";
import { announcements } from "@prisma/client";

interface AnnoouncementTableProps {
  announcements: announcementWithUser[];
}

export default function AnnoouncementTable({
  announcements,
}: AnnoouncementTableProps) {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [announcement, setAnnouncement] = useState<announcements>({
    id: "",
    content: "",
    date: new Date(),
    type: "all",
    v: 0,
    user_id: "",
  });

  function edit(selectedContent: announcements) {
    setShowEditModal(true);
    setAnnouncement(selectedContent);
  }

  function add() {
    setShowCreateModal(true);
  }

  return (
    <>
      <button
        className="mb-1 mr-1 rounded bg-emerald-500 px-3 py-1 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-emerald-600 hover:shadow-lg focus:outline-none active:bg-emerald-700"
        type="button"
        onClick={() => add()}
      >
        Add New
      </button>
      <table className="whitespace-no-wrap w-full">
        <thead>
          <tr className="rounded-lg border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-4 py-3">Content</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Author</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-gray-200">
          <Suspense fallback={<div>Loading...</div>}>
            {announcements.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="text-gray-700 transition-all hover:bg-gray-300"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">
                          {item.content.length > 30
                            ? item.content.slice(0, 30) + "..."
                            : item.content}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">
                          {new Date(item.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {String(item.user.name)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      type="button"
                      className="rounded-lg bg-green-600 p-2 text-white transition-all hover:bg-green-700"
                      onClick={() => edit(item)}
                    >
                      <FaPencilAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </Suspense>
        </tbody>
        <EditAnnouncementModal
          showModal={showEditModal}
          setShowModal={setShowEditModal}
          announcement={announcement}
        />
        <CreateAnnouncementModal
          showModal={showCreateModal}
          setShowModal={setShowCreateModal}
        />
      </table>
    </>
  );
}
