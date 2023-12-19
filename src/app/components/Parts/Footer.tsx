import Link from "next/link";

export default function Footer() {
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
    {
      title: "Developers",
      href: "/developers",
    },
  ];
  const socialMedias = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/mit_fest",
    },
  ];

  return (
    <footer className="relative mx-auto w-full max-w-[1148px] px-5 pb-8 pt-[82px] text-white">
      <ul className="flex w-full flex-col items-start justify-between gap-[22px] border-b border-gray-500 pb-14 sm:flex-row sm:items-center sm:gap-0">
        {links.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className="text-white transition-all duration-300 hover:text-gray-500"
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <div className="flex w-full flex-col items-start justify-between gap-9 pt-14 sm:flex-row sm:items-center sm:gap-0">
        <small className="text-base text-white">
          2023 &copy; MITFest All Rights Reserved.
        </small>
        <div className="flex items-center gap-[22px] sm:gap-10">
          {socialMedias.map((socialMedia, i) => (
            <a
              href={socialMedia.href}
              key={i}
              className="text-white transition-all duration-300 hover:text-gray-500"
            >
              {socialMedia.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
