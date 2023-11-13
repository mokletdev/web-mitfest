"use client";

import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  const [nav, setNav] = useState(false);
  const pathname = usePathname().split("/");
  pathname.shift();
  return (
    <>
      <Navbar nav={nav} setNav={setNav} name={session?.user?.name || ""} />
      <div>
        <div className="w-full flex overflow-hidden bg-white pt-16 pb-6">
          <Sidebar nav={nav} />
          <div
            className={`bg-gray-900 opacity-50 ${
              nav ? "" : "hidden"
            } fixed inset-0 z-10`}
            id="sidebarBackdrop"
          />
          <div
            id="main-content"
            className="h-full w-full relative overflow-y-auto lg:ml-64"
          >
            <nav className="font-sans m-4 p-2 md:p-4 w-max bg-gray-200 rounded-lg capitalize">
              <ol className="flex">
                <li>
                  <Link href="/" className="text-blue-700 font-bold">
                    home
                  </Link>
                </li>
                {pathname.map((path, i) => {
                  const last = i + 1 == pathname.length;
                  return (
                    <React.Fragment key={i}>
                      <li>
                        <span className="mx-2">/</span>
                      </li>
                      <li>
                        <Link
                          className={`${last ? "" : "text-blue-700"} font-bold`}
                          href={"/" + pathname.slice(0, i + 1).join("/")}
                          key={i}
                        >
                          {path}
                        </Link>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
            <main>
              <div className="pt-6 px-4">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
