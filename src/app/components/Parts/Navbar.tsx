import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 z-[999] mx-auto flex w-full max-w-[1148px] -translate-x-1/2 items-center justify-between bg-transparent px-5 py-4 backdrop-blur-lg">
      <span className="text-2xl font-bold text-white">Logo</span>
      <ul className="flex items-center gap-[52px]">
        <li>
          <Link
            href={"#beranda"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            href={"#tentang"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Tentang
          </Link>
        </li>
        <li>
          <Link
            href={"#kategori"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Kategori
          </Link>
        </li>
        <li>
          <Link
            href={"#panduan"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            Panduan
          </Link>
        </li>
        <li>
          <Link
            href={"#faq"}
            className="relative text-neutral-400 transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-4/5"
          >
            FAQ
          </Link>
        </li>
      </ul>
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
  );
}
