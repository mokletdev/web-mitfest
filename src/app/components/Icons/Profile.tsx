import { IconProps } from "@/types/icon";

export default function ProfileIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.36906 10.92C3.55406 12.135 3.55406 14.115 5.36906 15.3225C7.43156 16.7025 10.8141 16.7025 12.8766 15.3225C14.6916 14.1075 14.6916 12.1275 12.8766 10.92C10.8216 9.5475 7.43906 9.5475 5.36906 10.92Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
