"use client";
import Link from "next/link";

export default function Sidebar({
  isActive,
  path,
}: {
  isActive: boolean;
  path: string[];
}) {
  return (
    <aside
      id="sidebar"
      className={`fixed ${
        isActive ? "w-64" : "w-0 opacity-0"
      } left-0 top-0 z-20 flex h-full flex-shrink-0 flex-col transition-all duration-300 lg:w-64 lg:opacity-100`}
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-black px-6 pt-0">
        <div className="flex justify-center py-6 text-left md:justify-start">
          <h1 className="w-full text-2xl font-bold text-white">Logo</h1>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto pb-4">
          <div className="flex-1 space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  href="/dashboard"
                  className="group flex items-center rounded-lg px-[10px] py-3 text-base text-white transition-all duration-300 hover:bg-primary-500"
                  style={{
                    backgroundColor:
                      path[0] === "dashboard"
                        ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                        : "",
                  }}
                >
                  <svg
                    className="h-6 w-6 stroke-current transition duration-75"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17.99V14.99"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <button className="group flex w-full items-center justify-between rounded-lg px-[10px] py-3 text-base text-white transition-all duration-300 hover:bg-primary-500">
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 stroke-current transition duration-75"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5202 2.07001L13.0502 3.13C13.1202 3.28 13.3102 3.42 13.4702 3.44L14.4302 3.60001C15.0402 3.70001 15.1902 4.14999 14.7502 4.57999L14.0002 5.32999C13.8702 5.45999 13.8002 5.69999 13.8402 5.86999L14.0502 6.79001C14.2202 7.52001 13.8302 7.80001 13.1902 7.42001L12.2902 6.89001C12.1302 6.79001 11.8602 6.79001 11.7002 6.89001L10.8002 7.42001C10.1602 7.80001 9.77023 7.52001 9.94023 6.79001L10.1502 5.86999C10.1902 5.69999 10.1202 5.44999 9.99023 5.32999L9.25023 4.59C8.81023 4.15 8.95023 3.70998 9.57023 3.60998L10.5302 3.45001C10.6902 3.42001 10.8802 3.28001 10.9502 3.14001L11.4802 2.07999C11.7702 1.49999 12.2302 1.50001 12.5202 2.07001Z"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-3">Kompetisi</span>
                  </div>
                  <svg
                    className="rotate-180"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
