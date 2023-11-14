"use client";
import { users } from "@prisma/client";
import { updateUserStatus } from "../actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface UsersTableProps {
  users: users[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const router = useRouter();

  return (
    <table className="whitespace-no-wrap w-full">
      <thead>
        <tr className="border-b bg-gray-300 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Role</th>
          <th className="px-4 py-3">Status</th>
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
            <td className="px-4 py-3 text-sm">{user.name}</td>
            <td className="px-4 py-3 text-sm">{user.role}</td>
            <td className="px-4 py-3 text-xs">
              <button
                className={`rounded-full ${
                  user.is_verified ? "bg-green-700" : "bg-black"
                } px-2 py-1 font-semibold leading-tight text-white`}
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  updateUserStatus(user.id, user.is_verified).then(() => {
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
                {user.is_verified ? "Verified" : "Unverified"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
