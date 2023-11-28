import Link from "next/link";
import React from "react";
import Navbar from "./components/Parts/Navbar";
import Beranda from "./components/Parts/Beranda";
import Tentang from "./components/Parts/Tentang";

export default function Root() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="w-screen relative bg-black">
        <Beranda />
        <Tentang />
      </main>
    </React.Fragment>
  );
}
