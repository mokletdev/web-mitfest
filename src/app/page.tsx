import Link from "next/link";
import React from "react";
import Navbar from "./components/Parts/Navbar";
import Beranda from "./components/Parts/Beranda";

export default function Root() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="w-screen bg-black">
        <Beranda />
      </main>
    </React.Fragment>
  );
}
