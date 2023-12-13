import { LinkButton } from "@/app/components/Button";
import React from "react";

export default function ErrorVerify() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-10 rounded p-6">
        <div className="mb-[52px] flex justify-center">
          <div className="relative rounded-full bg-primary-500 p-14 drop-shadow-glow-red">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M21 35.875H12.25C7 35.875 3.5 33.25 3.5 27.125V14.875C3.5 8.75 7 6.125 12.25 6.125H29.75C35 6.125 38.5 8.75 38.5 14.875V20.125"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.75 15.75L24.2725 20.125C22.47 21.56 19.5125 21.56 17.71 20.125L12.25 15.75"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.85 37.45C34.9428 37.45 37.45 34.9428 37.45 31.85C37.45 28.7572 34.9428 26.25 31.85 26.25C28.7572 26.25 26.25 28.7572 26.25 31.85C26.25 34.9428 28.7572 37.45 31.85 37.45Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38.5 38.5L36.75 36.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-center md:justify-start">
          <h6 className="mb-3 text-center text-[28px] leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Periksa email, klik tautan untuk memverifikasi akun
          </h6>
          <LinkButton
            href="/"
            className="mt-12 w-full justify-center"
            variant="red"
          >
            Kembali
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
