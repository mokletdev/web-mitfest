import Link from "next/link";

export default function Kontak() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1148px] flex-col items-center justify-center gap-[36px] px-5 py-[82px] text-white sm:items-start sm:gap-[48px]">
      <h1 className="text-center text-[52px] leading-tight drop-shadow-glow-white md:text-[78px]">
        Hubungi Kami Jika Ada Pertanyaan atau Masalah
      </h1>
      <div className="flex w-full justify-center">
        <Link
          href={"/auth/register"}
          className="group inline-flex items-center gap-1 rounded-full border border-primary-400 bg-primary-500 px-7 py-2 text-white transition duration-300 hover:bg-primary-600"
        >
          Hubungi Kami{" "}
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3225 4.44727L15.875 8.99977L11.3225 13.5523"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.125 9H15.7475"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
