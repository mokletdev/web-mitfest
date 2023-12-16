"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "@/app/components/Icons/Arrow";
import type { Dispatch, SetStateAction } from "react";
import XIcon from "@/app/components/Icons/X";
import Logo from "@/app/components/Logo";

export default function Sidebar({
  isActive,
  setIsActive,
  path,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  path: string[];
}) {
  const [competitionOpen, setCompetitionOpen] = useState(false);

  return (
    <aside
      id="sidebar"
      className={`fixed ${
        isActive ? "left-0" : "-left-full"
      } top-0 z-20 flex h-full min-h-screen flex-shrink-0 flex-col transition-all duration-300 md:left-0 lg:w-64 lg:opacity-100`}
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-black px-6 pt-0">
        <div className="flex items-center gap-[18px] py-6 text-left">
          <button
            className="block h-6 w-6 md:hidden"
            onClick={() => setIsActive(false)}
          >
            <XIcon />
          </button>
          <Link href={"/"}>
            <Logo />
          </Link>
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
                      path[0] === "dashboard" && !path[1]
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
                <button
                  onClick={() => setCompetitionOpen(!competitionOpen)}
                  className="group flex w-full items-center justify-between rounded-lg px-[10px] py-3 text-base text-white transition-all duration-300 hover:bg-primary-500"
                  style={{
                    backgroundColor: path[1]
                      ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                      : "",
                  }}
                >
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
                  <ArrowIcon
                    className={`${
                      competitionOpen ? "rotate-0" : "rotate-180"
                    } transition-all duration-300`}
                  />
                </button>
                <ul
                  className="ml-6 mt-3 flex flex-col overflow-hidden border-l-2 border-primary-500 pl-3 text-sm text-white transition-all duration-300"
                  style={{
                    maxHeight: competitionOpen ? "999px" : "0",
                  }}
                >
                  <Link
                    href={"/dashboard/cyber-security"}
                    className="rounded-lg px-[14px] py-[10px] transition-all duration-300 hover:bg-primary-500"
                    style={{
                      backgroundColor: path.includes("cyber-security")
                        ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                        : "",
                    }}
                  >
                    Cyber Security
                  </Link>
                  <Link
                    href={"/dashboard/cloud-computing"}
                    className="rounded-lg px-[14px] py-[10px] transition-all duration-300 hover:bg-primary-500"
                    style={{
                      backgroundColor: path.includes("cloud-computing")
                        ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                        : "",
                    }}
                  >
                    Cloud Computing
                  </Link>
                  <Link
                    href={"/dashboard/web-design"}
                    className="rounded-lg px-[14px] py-[10px] transition-all duration-300 hover:bg-primary-500"
                    style={{
                      backgroundColor: path.includes("web-design")
                        ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                        : "",
                    }}
                  >
                    Web Design
                  </Link>
                  <Link
                    href={"/dashboard/business-plan"}
                    className="rounded-lg px-[14px] py-[10px] transition-all duration-300 hover:bg-primary-500"
                    style={{
                      backgroundColor: path.includes("business-plan")
                        ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                        : "",
                    }}
                  >
                    Business Plan
                  </Link>
                  <Link
                    href={"/dashboard/esport-ml"}
                    className="rounded-lg px-[14px] py-[10px] transition-all duration-300 hover:bg-primary-500"
                    style={{
                      backgroundColor: path.includes("esport-ml")
                        ? "rgb(177 15 0 / var(--tw-bg-opacity))"
                        : "",
                    }}
                  >
                    E-sport Mobile Legends
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-2 py-6">
          <li>
            <a
              href="https://wa.me/"
              className="group flex items-center rounded-lg px-[10px] py-3 text-base text-white transition-all duration-300 hover:bg-primary-500"
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
                  d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9965 11H16.0054"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9945 11H12.0035"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.99451 11H8.00349"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-3">Hubungi kami</span>
            </a>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="group flex w-full items-center rounded-lg px-[10px] py-3 text-base text-white transition-all duration-300 hover:bg-primary-500"
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
                  d="M8.90039 7.55999C9.21039 3.95999 11.0604 2.48999 15.1104 2.48999H15.2404C19.7104 2.48999 21.5004 4.27999 21.5004 8.74999V15.27C21.5004 19.74 19.7104 21.53 15.2404 21.53H15.1104C11.0904 21.53 9.24039 20.08 8.91039 16.54"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9991 12H3.61914"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.85 8.65002L2.5 12L5.85 15.35"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
