import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProfileIcon from "@/app/components/Icons/Profile";

export default async function Header({
  title,
  name,
}: {
  title: string;
  name: string;
}) {
  return (
    <header className="flex w-full items-center justify-between p-6">
      <h5 className="text-xl sm:text-2xl">{title}</h5>
      <div className="hidden items-center gap-3 hover:cursor-pointer md:flex">
        <div className="relative h-[42px] w-[42px] rounded-full bg-primary-500">
          <ProfileIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p>{name}</p>
      </div>
    </header>
  );
}
