import { LinkButton } from "@/app/components/Button";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Developers() {
  return (
    <section className="flex min-h-screen w-screen justify-center bg-black">
      <div className="w-full max-w-md space-y-4 rounded p-6">
        <div className="flex justify-center">
          <div className="relative rounded-full bg-primary-500 p-14 drop-shadow-glow-red">
            <FaCode className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-start">
          <h1 className="text-center text-[28px] font-bold leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Development Team
          </h1>
          <small className="mb-4 text-center text-base text-white">
            Moklet Developers
          </small>
          <ul className="text-semibold list-inside list-disc space-y-1 font-medium text-white">
            <li>
              <Link
                target="_blank"
                href="https://ben.is-a.dev"
                className="relative inline-flex items-center gap-2 text-white transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Kusindra Aji Rabbany <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.ahsanzizan.xyz/"
                className="relative inline-flex items-center gap-2 text-white transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Ahsan Awadullah Azizan <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://ben.is-a.dev"
                className="relative inline-flex items-center gap-2 text-white transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Naufal Nabil Ramadhan <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://linktr.ee/frostfire1"
                className="relative inline-flex items-center gap-2 text-white transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Muhammad Zuhair Zuhdi <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://ben.is-a.dev"
                className="relative inline-flex items-center gap-2 text-white transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Moch. Gilang Ramadhan (UI/UX) <FaArrowUpRightFromSquare />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
