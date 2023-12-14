import { LinkButton } from "@/app/components/Button";
import React from "react";

export default function InvalidToken() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-10 rounded p-6">
        <div className="mb-[52px] flex justify-center">
          <div className="relative rounded-full bg-primary-500 p-14 drop-shadow-glow-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M25 45.8333C36.4583 45.8333 45.8333 36.4583 45.8333 25C45.8333 13.5417 36.4583 4.16667 25 4.16667C13.5417 4.16667 4.16666 13.5417 4.16666 25C4.16666 36.4583 13.5417 45.8333 25 45.8333Z"
                stroke="white"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.1042 30.8958L30.8958 19.1042"
                stroke="white"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.8958 30.8958L19.1042 19.1042"
                stroke="white"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-center md:justify-start">
          <h6 className="mb-3 text-center text-[28px] leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Kode tidak valid atau sudah tidak berlaku!
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
