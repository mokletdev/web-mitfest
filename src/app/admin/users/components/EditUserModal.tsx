import { updateUserAction } from "../actions";
import { users } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { success } from "@/utils/toast";

interface EditUserModalProps {
  user: users;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function EditUserModal({
  user,
  showModal,
  setShowModal,
}: EditUserModalProps) {
  const router = useRouter();

  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-[48rem] max-w-3xl">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
              <h3 className="text-3xl font-semibold">Edit User</h3>
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
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="name" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  defaultValue={user.email}
                  className="border px-4 py-2"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  defaultValue={user.name}
                  className="border px-4 py-2"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="name" className="font-bold">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border px-4 py-2"
                />
              </div>
            </div>
            <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
              <button
                className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-emerald-600 hover:shadow-lg focus:outline-none active:bg-emerald-700"
                type="button"
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  updateUserAction(user.id, {
                    email:
                      (document.getElementById("email") as HTMLInputElement)
                        .value || "",
                    name:
                      (document.getElementById("name") as HTMLInputElement)
                        .value || "",
                    password:
                      (document.getElementById("password") as HTMLInputElement)
                        .value || null,
                  }).then(() => {
                    success(toastId, router);
                    setShowModal(false);
                  });
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
