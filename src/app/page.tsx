import Link from "next/link";
import React from "react";

export default function Root() {
  return (
    <React.Fragment>
      <nav className="fixed left-1/2 z-[999] mx-auto flex w-full max-w-[1148px] -translate-x-1/2 items-center justify-between bg-transparent px-5 py-4 backdrop-blur-[5px]">
        <span className="text-2xl font-bold text-white">Logo</span>
        <div className="flex items-center gap-[52px]">
          <Link
            href={"#beranda"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Beranda
          </Link>
          <Link
            href={"#tentang"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Tentang
          </Link>
          <Link
            href={"#kategori"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Kategori
          </Link>
          <Link
            href={"#panduan"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Panduan
          </Link>
          <Link
            href={"#faq"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/auth/register"}
            className="bg-primary-700 border-primary-500 hover:bg-primary-600 inline-block rounded border px-6 py-2 text-white transition duration-200"
          >
            Daftar
          </Link>
          <Link
            href={"/auth/register"}
            className="bg-primary-500 border-primary-400 hover:bg-primary-600 inline-block rounded border px-6 py-2 text-white transition duration-200"
          >
            Masuk
          </Link>
        </div>
      </nav>
      <main className="w-screen bg-black">
        <section
          className="relative mx-auto flex h-screen w-full max-w-[1148px] items-center justify-center px-5"
          id="beranda"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[581px] w-[581px] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary-700 fixed left-0 top-0 h-[581px] w-[581px] rounded-[290.43px] blur-[320px]" />
          </div>
          <header className="z-10 mb-3 flex max-w-2xl flex-col items-center justify-center">
            <h1 className="text-center text-5xl font-bold leading-relaxed text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="mb-10 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              cursus ipsum odio, in pharetra metus tincidunt sed. Sed elementum
              sagittis congue.
            </p>
            <Link
              href={"/auth/register"}
              className="bg-primary-500 border-primary-400 hover:bg-primary-600 inline-block rounded border px-6 py-2 text-gray-50 transition duration-200"
            >
              Daftar Sekarang
            </Link>
          </header>
        </section>
      </main>
    </React.Fragment>
  );
}
