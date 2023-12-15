import { LinkButton } from "@/app/components/Button";
import React from "react";

export default function Verify() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-10 rounded p-6">
        <div className="mb-[52px] flex justify-center">
          <div className="relative rounded-full bg-primary-500 p-14 drop-shadow-glow-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M29.75 35.875H12.25C7 35.875 3.5 33.25 3.5 27.125V14.875C3.5 8.75 7 6.125 12.25 6.125H29.75C35 6.125 38.5 8.75 38.5 14.875V27.125C38.5 33.25 35 35.875 29.75 35.875Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.75 15.75L24.2725 20.125C22.47 21.56 19.5125 21.56 17.71 20.125L12.25 15.75"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-center md:justify-start">
          <h6 className="mb-3 text-center text-[28px] leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Email Anda telah terverifikasi!
          </h6>
          <LinkButton
            href="/dashboard"
            className="mt-12 w-full justify-center"
            variant="red"
          >
            Menuju ke dashboard
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
