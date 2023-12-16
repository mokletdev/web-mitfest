import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={"/Logo-MITFest.svg"}
      width={78.92}
      height={27.13}
      alt="Logo MITFest"
      className={className}
    />
  );
}
