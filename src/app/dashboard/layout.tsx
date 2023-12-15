"use client";
import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname().split("/");
  pathname.shift();

  return (
    <>
      <Sidebar isActive={isActive} path={pathname} />
      <main className="bg-black-dashboard">{children}</main>
    </>
  );
}
