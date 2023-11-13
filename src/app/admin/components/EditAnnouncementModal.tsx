import type { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { deleteAnnouncementAction, updateAnnouncementAction } from "../actions";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface EditAnnouncementModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  content: any;
}

export default function EditAnnouncementModal({ showModal, setShowModal, content }: EditAnnouncementModalProps) {
  const router = useRouter();
  const { data: session } = useSession();
  if (!showModal) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[48rem] my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Announcement</h3>
              <button className="z-[999] p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <AiFillCloseCircle />
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <textarea id="content" defaultValue={content.content} className="my-4 text-blueGray-500 min-w-full text-lg leading-relaxed border-2 p-2"></textarea>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-red-500 text-white hover:bg-red-600 active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteAnnouncementAction(content._id).then(() => {
                    toast.update(toastId, {
                      render: "Sukses",
                      type: "success",
                      isLoading: false,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </button>
              <button
                className="bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  updateAnnouncementAction(session?.user?.id, content._id, (document.getElementById("content") as HTMLInputElement).value || "").then(() => {
                    toast.update(toastId, {
                      render: "Sukses",
                      type: "success",
                      isLoading: false,
                    });
                    router.refresh();
                  });
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
