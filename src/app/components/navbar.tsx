"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import telkomlogos from "../../img/telkom_logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://www.smktelkom-mlg.sch.id/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={telkomlogos} className="" alt="Telkom Logo" height={40} width={40} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">MIT-FEST</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="">
              <Button variant="outlined" className="bg-white text-[#B10F00] border-[#B10F00] border border-solid focus:outline-none text-sm  normal-case mr-8 scale-125 hover:border-[#B10F00]">
                Daftar
              </Button>
            </a>
            <a href="">
              <Button
                variant="outlined"
                className=" border border-solid bg-[#B10F00] focus:outline-none text-sm text-white normal-case border-[#B10F00] mr-10 scale-125 shadow-[0_6px_22px_0px_rgba(177, 15, 0, 0.28)] hover:bg-[#7E0A00] hover:border-[#7E0A00]"
              >
                Masuk
              </Button>
            </a>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white ">
              <li>
                <a href="/" className="block py-2 px-3 md:p-0 text-black bg-white md:bg-transparent md:text-black hover:border-b-2 border-[#B10F00] md:hover:bg-transparent leading-6" aria-current="page">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/dashboard/tentang" className="block py-2 px-3 md:p-0 text-black bg-white md:bg-transparent md:text-black hover:border-b-2 border-[#B10F00] md:hover:bg-transparent leading-6">
                  Tentang
                </a>
              </li>
              <li>
                <a href="/dashboard/kategori" className="block py-2 px-3 md:p-0 text-black bg-white md:bg-transparent md:text-black hover:border-b-2 border-[#B10F00] md:hover:bg-transparent leading-6">
                  Kategori
                </a>
              </li>
              <li>
                <a href="/dashboard/timeline" className="block py-2 px-3 md:p-0 text-black bg-white md:bg-transparent md:text-black hover:border-b-2 border-[#B10F00] md:hover:bg-transparent leading-6">
                  Timeline
                </a>
              </li>
              <li>
                <a href="/dashboard/FAQ" className="block py-2 px-3 md:p-0 text-black bg-white md:bg-transparent md:text-black hover:border-b-2 border-[#B10F00] md:hover:bg-transparent leading-6">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
