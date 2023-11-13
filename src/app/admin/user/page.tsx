import { FaUser } from "react-icons/fa";
import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
export default function Admin() {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Data Pendaftar</h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 mb-4">
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">Cyber Security</span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">Cloud Computing</span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">Web Design</span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">Business Plan</span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">Mobile Legend</span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">All</span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="px-3 py-1 bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-100 hover:bg-green-600 rounded" endIcon={<AddIcon />}>
            Add
          </Button>
        </div>

        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-300">
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200 divide-y">
                <tr className="text-gray-700 hover:bg-gray-400 transition-all">
                  <td className="px-4 py-3 text-sm">1. </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Muhammad Zuhair Zuhdi</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">x3mnaufalnabilramadhan@gmail.com</td>
                  <td className="px-4 py-3 text-sm">User</td>
                  <td className="px-4 py-3 text-sm basis-2">
                    <Button className="ml-2 px-3 py-1 font-semibold text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded hover:bg-green-600" startIcon={<EditIcon />}>
                      Edit
                    </Button>
                    <Button className="ml-2 px-3 py-1 font-semibold text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100  rounded hover:bg-red-600" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
