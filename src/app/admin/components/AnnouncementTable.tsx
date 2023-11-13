"use client";
import { FaPencilAlt } from "react-icons/fa";
import EditAnnouncementModal from "./EditAnnouncementModal";
import { Suspense, useState } from "react";
import type { Announcement } from "@/models/Announcement.model";

interface AnnoouncementTableProps {
  announcements: Announcement[];
}

export default function AnnoouncementTable({
  announcements,
}: AnnoouncementTableProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [content, setContent] = useState<any>(null);

  function edit(selectedContent: any) {
    setShowModal(true);
    setContent(selectedContent);
  }
  return (
    <table className="w-full whitespace-no-wrap">
      <thead>
        <tr className="text-xs font-semibold rounded-lg tracking-wide text-left text-gray-500 uppercase border-b bg-gray-300">
          <th className="px-4 py-3">Content</th>
          <th className="px-4 py-3">Date</th>
          <th className="px-4 py-3">Author</th>
          <th className="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200 divide-y">
        <Suspense fallback={<div>Loading...</div>}>
          {announcements.map((item: any, i: number) => {
            return (
              <tr
                key={i}
                className="text-gray-700 hover:bg-gray-300 transition-all"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{item.content}</p>
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
                  {String(item.user_id.name)}
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    type="button"
                    className="p-2 bg-green-600 hover:bg-green-700 transition-all text-white rounded-lg"
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
        showModal={showModal}
        setShowModal={setShowModal}
        content={content}
      />
    </table>
  );
}
