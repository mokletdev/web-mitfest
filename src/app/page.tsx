import Link from "next/link";
import React from "react";

export default function Root() {
  return (
    <React.Fragment>
      <main className="w-screen bg-black">
        <section className="mx-auto flex h-screen w-full max-w-[1148px] items-center justify-center px-5">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[581px] w-[581px] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary-700 fixed left-0 top-0 h-[581px] w-[581px] rounded-[290.43px] blur-[320px]" />
          </div>
          <div className="z-10 mb-3 flex max-w-2xl flex-col items-center justify-center">
            <h1 className="text-center text-white">
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
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
