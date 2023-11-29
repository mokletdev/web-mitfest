import Link from "next/link";
import React from "react";
import Navbar from "./components/Parts/Navbar";
import Beranda from "./components/Parts/Beranda";
import Tentang from "./components/Parts/Tentang";
import Kategori from "./components/Parts/Kategori";

export default function Root() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="relative w-screen bg-black">
        <Beranda />
        <Tentang />
        <Kategori />
      </main>
    </React.Fragment>
  );
}
