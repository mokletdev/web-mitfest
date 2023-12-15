"use client";
import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";
import Header from "./components/Header";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname().split("/");
  pathname.shift();

  return (
    <>
      <Sidebar isActive={isActive} setIsActive={setIsActive} path={pathname} />
      <main className="bg-black-dashboard min-h-screen w-screen text-white lg:pl-64">
        <Header
          name={session?.user?.name!}
          setIsActive={setIsActive}
          title={`Selamat Datang, ${session?.user?.name || ""}👋🏻`}
        />
        {children}
      </main>
    </>
  );
}
