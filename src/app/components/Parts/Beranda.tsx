import Link from "next/link";

export default function Beranda() {
  return (
    <section
      className="relative mx-auto flex h-screen w-full max-w-[1148px] items-center justify-center px-5"
      id="beranda"
    >
      <div className="animate-red-blob pointer-events-none absolute left-1/2 top-1/2 h-[581px] w-[581px] -translate-x-1/2 -translate-y-1/2">
        <div className="fixed left-0 top-0 h-[581px] w-[581px] rounded-full bg-primary-700 blur-[128px]" />
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
          className="inline-block rounded border border-primary-400 bg-primary-500 px-6 py-2 text-gray-50 transition duration-200 hover:bg-primary-600"
        >
          Daftar Sekarang
        </Link>
      </header>
    </section>
  );
}
