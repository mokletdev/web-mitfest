"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "../Button";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [activeSection, setActiveSection] = useState("beranda");
  const [sideActive, setSideActive] = useState(false);
  const links = [
    {
      title: "Beranda",
      href: "#beranda",
    },
    {
      title: "Tentang",
      href: "#tentang",
    },
    {
      title: "Kategori",
      href: "#kategori",
    },
    {
      title: "Panduan",
      href: "#panduan",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ];

  const handleScroll = () => {
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;

      if (
        window.scrollY > sectionTop &&
        window.scrollY <= sectionTop + sectionHeight
      ) {
        setActiveSection(section.getAttribute("id")!);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed left-1/2 z-[999] mx-auto flex w-full max-w-[1148px] -translate-x-1/2 items-center justify-between bg-transparent px-5 py-4 backdrop-blur-lg">
        <div className="flex items-center gap-[18px]">
          <button
            className="block h-6 w-6 xl:hidden"
            onClick={() => setSideActive(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="w-56 text-2xl font-bold text-white">Logo</span>
        </div>
        <ul className="hidden items-center gap-[52px] xl:flex">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={`relative text-white transition duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:origin-center after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-4/5 ${
                  activeSection === link.title.toLowerCase()
                    ? "after:w-4/5"
                    : "after:w-0"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="hidden w-56 items-center justify-between md:flex"
          style={{ justifyContent: session?.user ? "end" : "space-between" }}
        >
          {session?.user ? (
            <>
              <LinkButton href={"/dashboard"} variant="red">
                Dashboard
              </LinkButton>
            </>
          ) : (
            <>
              <LinkButton href={"/auth/register"} variant="dark">
                Daftar
              </LinkButton>
              <LinkButton href={"/auth/login"} variant="red">
                Masuk
              </LinkButton>
            </>
          )}
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <aside
        className="fixed left-0 top-0 z-[1000] h-screen w-[264px] bg-black transition-all duration-300 xl:hidden"
        style={{ left: sideActive ? 0 : "-100%" }}
      >
        <div className="flex h-full flex-col justify-between px-5 py-[42px]">
          <div className="block">
            <button
              className="mb-[72px] block h-6 w-6"
              onClick={() => setSideActive(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1206 4.979L4.87881 19.0208"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.87891 4.979L19.1207 19.0208"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-7">
              {links.map((link, i) => (
                <li key={i} className="ml-3">
                  <Link
                    href={link.href}
                    className={`relative text-white transition duration-300 before:absolute before:-left-3 before:w-[2px] before:bg-white before:transition-all before:duration-300 hover:before:h-full ${
                      activeSection === link.title.toLowerCase()
                        ? "before:h-full"
                        : "before:h-0"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center justify-between md:hidden">
            {session?.user ? (
              <>
                <LinkButton href={"/dashboard"} variant="red">
                  Dashboard
                </LinkButton>
              </>
            ) : (
              <>
                <LinkButton href={"/auth/register"} variant="dark">
                  Daftar
                </LinkButton>
                <LinkButton href={"/auth/login"} variant="red">
                  Masuk
                </LinkButton>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
