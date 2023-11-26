import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 z-[999] mx-auto flex w-full max-w-[1148px] -translate-x-1/2 items-center justify-between bg-transparent px-5 py-4 backdrop-blur-lg">
      <span className="w-56 text-2xl font-bold text-black">Logo</span>
      <ul className="flex items-center gap-[52px]">
        <li>
          <Link
            href={"#beranda"}
            className="relative transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 hover:after:w-4/5"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            href={"#tentang"}
            className="relative transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 hover:after:w-4/5"
          >
            Tentang
          </Link>
        </li>
        <li>
          <Link
            href={"#kategori"}
            className="relative transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 hover:after:w-4/5"
          >
            Kategori
          </Link>
        </li>
        <li>
          <Link
            href={"#panduan"}
            className="relative transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 hover:after:w-4/5"
          >
            Panduan
          </Link>
        </li>
        <li>
          <Link
            href={"#faq"}
            className="relative transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:origin-center after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 hover:after:w-4/5"
          >
            FAQ
          </Link>
        </li>
      </ul>
      <div className="flex w-56 items-center justify-between">
        <Link
          href={"/auth/register"}
          className="inline-block rounded-full border border-black bg-white px-7 py-2 transition duration-200"
        >
          Daftar
        </Link>
        <Link
          href={"/auth/register"}
          className="inline-block rounded-full border border-black bg-black px-7 py-2 text-white transition duration-200"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
}
