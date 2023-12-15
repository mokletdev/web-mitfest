import { IconProps } from "@/types/icon";

export default function HamburgerIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
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
  );
}
