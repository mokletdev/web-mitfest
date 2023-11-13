import { FaUser } from "react-icons/fa";
import React from "react";

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
              <span className="text-sm font-medium text-gray-200">
                Cyber Security
              </span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Cloud Computing
              </span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Web Design
              </span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Business Plan
              </span>
              <span className="text-xl text-white">1000</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl w-full p-4 border flex items-center gap-4">
            <div className="p-2 bg-gray-200 text-primary rounded-xl">
              <FaUser />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Mobile Legend
              </span>
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
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-300">
                  <th className="px-4 py-3">Team Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Updated by</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200 divide-y">
                <tr className="text-gray-700 hover:bg-gray-400 transition-all">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">Gacorr kang</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">Slot Judi</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      Approved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">Rosy pembalap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
