import type { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { deleteAnnouncementAction, updateAnnouncementAction } from "../actions";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { announcements } from "@prisma/client";
import { success } from "@/utils/toast";

interface EditAnnouncementModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  announcement: announcements;
}

export default function EditAnnouncementModal({
  showModal,
  setShowModal,
  announcement,
}: EditAnnouncementModalProps) {
  const router = useRouter();
  const { data: session } = useSession();
  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-[48rem] max-w-3xl">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
              <h3 className="text-3xl font-semibold">Edit Announcement</h3>
              <button
                className="z-[999] float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="block h-6 w-6 text-2xl text-black outline-none focus:outline-none">
                  <AiFillCloseCircle />
                </span>
              </button>
            </div>
            <div className="relative flex-auto p-6">
              <textarea
                id="content"
                defaultValue={announcement.content}
                className="text-blueGray-500 my-4 min-w-full border-2 p-2 text-lg leading-relaxed"
              ></textarea>
            </div>
            <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
              <button
                className="mb-1 mr-1 rounded bg-red-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-red-600 hover:shadow-lg focus:outline-none active:bg-red-700"
                type="button"
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteAnnouncementAction(announcement.id).then(() => {
                    toast.update(toastId, {
                      render: "Sukses",
                      type: "success",
                      isLoading: false,
                      autoClose: 3000,
                    });
                    router.refresh();
                    setShowModal(false);
                  });
                }}
              >
                Delete
              </button>
              <button
                className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-emerald-600 hover:shadow-lg focus:outline-none active:bg-emerald-700"
                type="button"
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  updateAnnouncementAction(
                    session?.user?.id as string,
                    announcement.id,
                    (document.getElementById("content") as HTMLInputElement)
                      .value || "",
                  ).then(() => {
                    success(toastId, router);
                    setShowModal(false);
                  });
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
