"use client";
import useMousePosition from "@/app/hooks/useMousePosition";
import Link from "next/link";
import { LinkButton } from "../Button";

export default function Beranda() {
  return (
    <>
      <svg
        className="animate-on-and-off pointer-events-none absolute left-0 top-0 z-10 h-screen w-screen opacity-20 drop-shadow-glow-white"
        viewBox="0 0 658 458"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M555.647 2.4361H606.013M555.647 2.4361V52.8021M555.647 2.4361H505.281M606.013 2.4361V52.8021M606.013 2.4361H656.379V52.8021M606.013 52.8021H555.647M606.013 52.8021H656.379M606.013 52.8021V103.168M555.647 52.8021V103.168M555.647 52.8021H505.281M656.379 52.8021V103.168M606.013 103.168H555.647M606.013 103.168V153.534M606.013 103.168H656.379M555.647 103.168V153.534M555.647 103.168H505.281M606.013 153.534H555.647M606.013 153.534V203.9M606.013 153.534H656.379M555.647 153.534V203.9M555.647 153.534H505.281M606.013 203.9H555.647M606.013 203.9V254.266M606.013 203.9H656.379M555.647 203.9V254.266M555.647 203.9H505.281M606.013 254.266H555.647M606.013 254.266V304.632M606.013 254.266H656.379M555.647 254.266V304.632M555.647 254.266H505.281M606.013 304.632H555.647M606.013 304.632V354.998M606.013 304.632H656.379M555.647 304.632V354.998M555.647 304.632H505.281M606.013 354.998H555.647M606.013 354.998V405.364M606.013 354.998H656.379M555.647 354.998V405.364M555.647 354.998H505.281M606.013 405.364H555.647M606.013 405.364V455.73M606.013 405.364H656.379M555.647 405.364V455.73M555.647 405.364H505.281M606.013 455.73H555.647M606.013 455.73H656.379V405.364M555.647 455.73H505.281M656.379 103.168V153.534M656.379 153.534V203.9M656.379 203.9V254.266M656.379 254.266V304.632M656.379 304.632V354.998M656.379 354.998V405.364M51.9872 2.4361H1.62122V52.8021M51.9872 2.4361V52.8021M51.9872 2.4361H102.353M51.9872 52.8021H1.62122M51.9872 52.8021H102.353M51.9872 52.8021V103.168M1.62122 52.8021V103.168M102.353 2.4361V52.8021M102.353 2.4361H152.719M102.353 52.8021H152.719M102.353 52.8021V103.168M152.719 2.4361V52.8021M152.719 2.4361H203.085M152.719 52.8021H203.085M152.719 52.8021V103.168M203.085 2.4361V52.8021M203.085 2.4361H253.451M203.085 52.8021H253.451M203.085 52.8021V103.168M253.451 2.4361V52.8021M253.451 2.4361H303.817M253.451 52.8021H303.817M253.451 52.8021V103.168M303.817 2.4361V52.8021M303.817 2.4361H354.183M303.817 52.8021H354.183M303.817 52.8021V103.168M354.183 2.4361V52.8021M354.183 2.4361H404.549M354.183 52.8021H404.549M354.183 52.8021V103.168M404.549 2.4361V52.8021M404.549 2.4361H454.915M404.549 52.8021H454.915M404.549 52.8021V103.168M454.915 2.4361V52.8021M454.915 2.4361H505.281M454.915 52.8021H505.281M454.915 52.8021V103.168M505.281 2.4361V52.8021M505.281 52.8021V103.168M51.9872 103.168H1.62122M51.9872 103.168V153.534M51.9872 103.168H102.353M1.62122 103.168V153.534M51.9872 153.534H1.62122M51.9872 153.534V203.9M51.9872 153.534H102.353M1.62122 153.534V203.9M51.9872 203.9H1.62122M51.9872 203.9V254.266M51.9872 203.9H102.353M1.62122 203.9V254.266M51.9872 254.266H1.62122M51.9872 254.266V304.632M51.9872 254.266H102.353M1.62122 254.266V304.632M51.9872 304.632H1.62122M51.9872 304.632V354.998M51.9872 304.632H102.353M1.62122 304.632V354.998M51.9872 354.998H1.62122M51.9872 354.998V405.364M51.9872 354.998H102.353M1.62122 354.998V405.364M51.9872 405.364H1.62122M51.9872 405.364V455.73M51.9872 405.364H102.353M1.62122 405.364V455.73H51.9872M51.9872 455.73H102.353M102.353 103.168V153.534M102.353 103.168H152.719M102.353 153.534V203.9M102.353 153.534H152.719M102.353 203.9V254.266M102.353 203.9H152.719M102.353 254.266V304.632M102.353 254.266H152.719M102.353 304.632V354.998M102.353 304.632H152.719M102.353 354.998V405.364M102.353 354.998H152.719M102.353 405.364V455.73M102.353 405.364H152.719M102.353 455.73H152.719M152.719 103.168V153.534M152.719 103.168H203.085M152.719 153.534V203.9M152.719 153.534H203.085M152.719 203.9V254.266M152.719 203.9H203.085M152.719 254.266V304.632M152.719 254.266H203.085M152.719 304.632V354.998M152.719 304.632H203.085M152.719 354.998V405.364M152.719 354.998H203.085M152.719 405.364V455.73M152.719 405.364H203.085M152.719 455.73H203.085M203.085 103.168V153.534M203.085 103.168H253.451M203.085 153.534V203.9M203.085 153.534H253.451M203.085 203.9V254.266M203.085 203.9H253.451M203.085 254.266V304.632M203.085 254.266H253.451M203.085 304.632V354.998M203.085 304.632H253.451M203.085 354.998V405.364M203.085 354.998H253.451M203.085 405.364V455.73M203.085 405.364H253.451M203.085 455.73H253.451M253.451 103.168V153.534M253.451 103.168H303.817M253.451 153.534V203.9M253.451 153.534H303.817M253.451 203.9V254.266M253.451 203.9H303.817M253.451 254.266V304.632M253.451 254.266H303.817M253.451 304.632V354.998M253.451 304.632H303.817M253.451 354.998V405.364M253.451 354.998H303.817M253.451 405.364V455.73M253.451 405.364H303.817M253.451 455.73H303.817M303.817 103.168V153.534M303.817 103.168H354.183M303.817 153.534V203.9M303.817 153.534H354.183M303.817 203.9V254.266M303.817 203.9H354.183M303.817 254.266V304.632M303.817 254.266H354.183M303.817 304.632V354.998M303.817 304.632H354.183M303.817 354.998V405.364M303.817 354.998H354.183M303.817 405.364V455.73M303.817 405.364H354.183M303.817 455.73H354.183M354.183 103.168V153.534M354.183 103.168H404.549M354.183 153.534V203.9M354.183 153.534H404.549M354.183 203.9V254.266M354.183 203.9H404.549M354.183 254.266V304.632M354.183 254.266H404.549M354.183 304.632V354.998M354.183 304.632H404.549M354.183 354.998V405.364M354.183 354.998H404.549M354.183 405.364V455.73M354.183 405.364H404.549M354.183 455.73H404.549M404.549 103.168V153.534M404.549 103.168H454.915M404.549 153.534V203.9M404.549 153.534H454.915M404.549 203.9V254.266M404.549 203.9H454.915M404.549 254.266V304.632M404.549 254.266H454.915M404.549 304.632V354.998M404.549 304.632H454.915M404.549 354.998V405.364M404.549 354.998H454.915M404.549 405.364V455.73M404.549 405.364H454.915M404.549 455.73H454.915M454.915 103.168V153.534M454.915 103.168H505.281M454.915 153.534V203.9M454.915 153.534H505.281M454.915 203.9V254.266M454.915 203.9H505.281M454.915 254.266V304.632M454.915 254.266H505.281M454.915 304.632V354.998M454.915 304.632H505.281M454.915 354.998V405.364M454.915 354.998H505.281M454.915 405.364V455.73M454.915 405.364H505.281M454.915 455.73H505.281M505.281 103.168V153.534M505.281 153.534V203.9M505.281 203.9V254.266M505.281 254.266V304.632M505.281 304.632V354.998M505.281 354.998V405.364M505.281 405.364V455.73"
          stroke="url(#paint0_radial_801_1238)"
          strokeOpacity="0.68"
          strokeWidth="2.95679"
        />
        <defs>
          <radialGradient
            id="paint0_radial_801_1238"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(329 229.083) rotate(90) scale(226.647 327.379)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <section
        className="relative z-20 mx-auto flex h-screen w-full max-w-[1148px] items-center justify-center px-5 text-white"
        id="beranda"
      >
        <header className="mx-auto block w-full">
          <h1 className="mb-7 text-center text-[52px] leading-tight drop-shadow-glow-white md:text-[78px] lg:mb-[22px]">
            Bergabung dan Siapkan Diri untuk Masa Depan
          </h1>
          <p className="mb-12 text-center text-base lg:mb-[52px]">
            Jelajahi berbagai kategori kompetisi, temukan bakat-bakat unik, dan
            raih prestasi.
          </p>
          <div className="flex w-full justify-center">
            <LinkButton href={"/auth/register"} withArrow variant="red">
              Daftar Sekarang{" "}
            </LinkButton>
          </div>
        </header>
      </section>
    </>
  );
}
