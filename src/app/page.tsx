import Link from "next/link";
import React from "react";
import Navbar from "./components/Parts/Navbar";
import Beranda from "./components/Parts/Beranda";
import Tentang from "./components/Parts/Tentang";
import Kategori from "./components/Parts/Kategori";
import Panduan from "./components/Parts/Panduan";
import FAQ from "./components/Parts/FAQ";

export default function Root() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="relative w-screen bg-black">
        <Beranda />
        <Tentang />
        <Kategori />
        <Panduan />
        <FAQ />
      </main>
    </React.Fragment>
  );
}
