import Image from "next/image";
import { LinkButton } from "../components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import CalendarIcon from "@/app/components/Icons/Calendar";
import ArrowIcon from "../components/Icons/Arrow";
import { FormButton } from "../components/Button";
import { getAllAnnounce } from "@/utils/queries/announcement.query";
import { convertTimezone, stringifyDate, stringifyTime } from "@/utils/date";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const announcements = (await getAllAnnounce())
    .filter((announcement) => announcement.type === "all")
    .reverse();

  return (
    <>
      <section id="announcements" className="p-6">
        <LinkButton href="/guidebook" className="mb-4">
          Unduh Buku Panduan
        </LinkButton>
        <div className="rounded-lg bg-black p-8">
          <div className="mb-7 flex w-full flex-col items-start justify-between gap-[22px] md:flex-row md:items-center md:gap-0">
            <h6 className="text-lg">Pengumuman</h6>
            <FormButton className="flex items-center gap-[22px]" variant="red">
              <div className="flex items-center gap-3">
                <CalendarIcon />
                {stringifyDate(new Date())}
              </div>
              <ArrowIcon className="rotate-180" />
            </FormButton>
          </div>
          <div className="flex w-full flex-col gap-[42px]">
            {announcements.map((announcement, i) => (
              <div key={i} className="flex w-full items-center">
                <dl className="w-full max-w-[20%] border-r border-gray-500 text-gray-500">
                  <dd className="flex flex-col gap-2 text-base font-medium leading-6">
                    <time>{stringifyDate(announcement.date)}</time>
                    <time>
                      {stringifyTime(
                        convertTimezone(announcement.date, "Asia/Jakarta"),
                      )}{" "}
                      WIB
                    </time>
                  </dd>
                </dl>
                <div className="max-w-[80%]">
                  <p
                    className="pl-12 text-white"
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
