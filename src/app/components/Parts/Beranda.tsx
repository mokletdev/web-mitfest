import Link from "next/link";

export default function Beranda() {
  return (
    <section
      className="relative mx-auto flex h-screen w-full max-w-[1148px] items-center justify-center px-5 text-white"
      id="beranda"
    >
      <header className="mx-auto block w-full">
        <h1 className="mb-[22px] text-center text-[72px] leading-tight">
          Bergabung dan Siapkan Diri untuk Masa Depan
        </h1>
        <p className="mb-[52px] text-center text-neutral-500">
          Jelajahi berbagai kategori kompetisi, temukan bakat-bakat unik, dan
          raih prestasi.
        </p>
        <div className="flex w-full justify-center">
          <Link
            href={"/auth/register"}
            className="inline-block justify-center rounded-full border border-black bg-black px-7 py-2 text-white transition duration-200"
          >
            Daftar Sekarang
          </Link>
        </div>
      </header>
    </section>
  );
}
