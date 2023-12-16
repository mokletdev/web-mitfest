import Image from "next/image";
import { LinkButton } from "../components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAllAnnounce } from "@/utils/queries/announcement.query";
import { convertTimezone, stringifyDate, stringifyTime } from "@/utils/date";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const announcements = (await getAllAnnounce())
    .filter((announcement) => announcement.type === "all")
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <>
      <section id="announcements" className="p-6">
        <LinkButton href="/guidebook" className="mb-4">
          Unduh Buku Panduan
        </LinkButton>
        <div className="rounded-lg bg-black p-8">
          <div className="mb-7 flex w-full flex-col items-start justify-between gap-[22px] md:flex-row md:items-center md:gap-0">
            <h6 className="text-lg">Pengumuman</h6>
          </div>
          <div className="flex w-full flex-col gap-[42px]">
            {announcements.map((announcement, i) => (
              <div
                key={i}
                className="flex w-full flex-col md:flex-row md:items-center"
              >
                <dl className="w-full text-gray-500 md:max-w-[20%] md:border-r md:border-gray-500">
                  <dd className="flex flex-row gap-[18px] text-base font-medium leading-6 md:flex-col md:gap-2">
                    <time>{stringifyDate(announcement.date)}</time>
                    <time>
                      {stringifyTime(
                        convertTimezone(announcement.date, "Asia/Jakarta"),
                      )}{" "}
                      WIB
                    </time>
                  </dd>
                </dl>
                <div className="w-full md:max-w-[80%]">
                  <p
                    className="pl-0 text-white md:pl-12"
                    dangerouslySetInnerHTML={{ __html: announcement.content }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
