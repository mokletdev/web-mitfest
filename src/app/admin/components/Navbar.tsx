import { signOut } from "next-auth/react";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type navbarParam = {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
  name: string;
};

export function Navbar({ nav, setNav, name }: navbarParam) {
  return (
    <nav className="fixed z-30 w-full border-b border-gray-200 bg-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"
              onClick={() => setNav(!nav)}
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className={`h-6 w-6 ${nav ? "hidden" : ""} `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className={`h-6 w-6 ${nav ? "" : "hidden"} `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Link
              href="/"
              className="flex items-center rounded-md bg-red-500 p-2 transition-all hover:bg-red-600 lg:ml-2.5"
            >
              {/* <Image
                src="/assets/images/LogoOSIS.png"
                alt="OSIS Logo"
                width={146}
                height={32}
                className="mr-2"
              /> */}
              <h1 className="text-center text-base font-bold text-white lg:text-xl">
                MITFest Admin
              </h1>
            </Link>
          </div>

          <div className="group inline-block">
            <button className="flex items-center rounded-md border-2 bg-slate-100 px-2 py-1 shadow-sm outline-none focus:outline-none">
              <span className="flex-1 pr-1 text-sm font-semibold">{name}</span>
              <span>
                <svg
                  className="h-4 w-4 transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul className="min-w-32 absolute origin-top scale-0 transform rounded-sm border bg-slate-100 transition duration-150 ease-in-out group-hover:scale-100">
              <li className="rounded-md px-4 py-2 hover:bg-slate-200">
                <button onClick={() => signOut({ callbackUrl: "/auth/login" })}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n",
            }}
          />
        </div>
      </div>
    </nav>
  );
}
