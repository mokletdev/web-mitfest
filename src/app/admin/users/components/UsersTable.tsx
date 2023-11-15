"use client";
import { users } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { deleteUserAction } from "../actions";
import { toast } from "react-toastify";
import EditUserModal from "./EditUserModal";
import CreateUserModal from "./CreateUserModal";

interface UsersTableProps {
  users: users[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const router = useRouter();
  const [user, setUser] = useState<users>({
    id: "",
    email: "",
    name: "",
    password: "",
    v: 0,
    role: "Admin",
    is_verified: true,
    created_registration_id: "",
    updated_registration_id: [],
  });
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  function edit(user: users) {
    setShowEditModal(true);
    setUser(user);
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
          <tr className="border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-gray-200">
          {users.map((user, i) => (
            <tr
              key={i}
              className="text-gray-700 transition-all hover:bg-gray-400"
            >
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1 text-sm">
                  <button
                    type="button"
                    className="rounded-lg bg-green-600 p-2 text-white transition-all hover:bg-green-700"
                    onClick={() => edit(user)}
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-red-600 p-2 text-white transition-all hover:bg-red-700"
                    onClick={() => {
                      const toastId = toast.loading("Loading...");
                      deleteUserAction(user.id).then(() => {
                        toast.update(toastId, {
                          render: "Sukses",
                          type: "success",
                          isLoading: false,
                          autoClose: 3000,
                        });
                        router.refresh();
                      });
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditUserModal
        setShowModal={setShowEditModal}
        showModal={showEditModal}
        id={user.id}
        user={user}
      />
      <CreateUserModal
        showModal={showCreateModal}
        setShowModal={setShowCreateModal}
      />
    </>
  );
}
