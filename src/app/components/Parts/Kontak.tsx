import Link from "next/link";
import { LinkButton } from "../Button";

export default function Kontak() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1148px] flex-col items-center justify-center gap-[36px] px-5 py-[82px] text-white sm:items-start sm:gap-[48px]">
      <h1 className="text-center text-[52px] leading-tight drop-shadow-glow-white md:text-[78px]">
        Hubungi Kami Jika Ada Pertanyaan atau Masalah
      </h1>
      <div className="flex w-full justify-center">
        <LinkButton href={"https://wa.me/"} withArrow variant="red">
          Hubungi Kami{" "}
        </LinkButton>
      </div>
    </section>
  );
}
