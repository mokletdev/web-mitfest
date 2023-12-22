"use client";

import { FormButton, LinkButton } from "@/app/components/Button";
import React from "react";

export default function BuktiPembayaran2() {
  return (
    <>
      <section className="m-0 pl-[24px] pr-[24px]">
        <section className="xl:justify-beetween w-full max-w-full rounded-md bg-black p-[24px] md:max-w-lg lg:max-w-xl lg:p-[32px] xl:flex xl:w-[747px] xl:max-w-full">
          <div className="mb-[62px] flex xl:invisible xl:absolute xl:left-0 xl:top-0">
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
              1
            </div>
            <div className="mx-2 my-auto h-0.5 w-full bg-gray-600"></div>
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
              2
            </div>
            <div className="mx-2 my-auto h-0.5 w-full bg-gray-600"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              3
            </div>
          </div>

          <div className="invisible absolute left-0 top-0 block xl:visible xl:relative">
            <div className="flex">
              <div className="relative block w-[153px] max-w-full">
                <h2 className="text-right text-[18px] text-white">
                  Pilihan Bergabung
                </h2>
                <p className="text-right text-[16px] text-gray-500">
                  Tim atau individu
                </p>
              </div>
              <div className="ml-[20px] block">
                <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
                  1
                </div>
                <div className="block h-[113px] w-[52px] py-4">
                  <svg
                    className="m-auto"
                    width="2"
                    height="97"
                    viewBox="0 0 2 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0V97" stroke="#B10F00" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="mx-w-full relative block w-[153px]">
                <h2 className="text-right text-[18px] text-white">
                  Informasi Diri
                </h2>
                <p className="text-right text-[16px] text-gray-500">
                  Data diri
                </p>
              </div>
              <div className="ml-[20px] block">
                <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
                  2
                </div>
                <div className="block h-[113px] w-[52px] py-4">
                  <svg
                    className="m-auto"
                    width="2"
                    height="97"
                    viewBox="0 0 2 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0V97" stroke="#B10F00" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="mx-w-full relative block w-[153px]">
                <h2 className="text-right text-[18px] text-white">
                  Bukti Pembayaran
                </h2>
                <p className="text-right text-[16px] text-gray-500">
                  Screenshot
                </p>
              </div>
              <div className="ml-[20px] block">
                <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
                  3
                </div>
                <div className="block h-[42px] w-[52px] py-2"></div>
              </div>
            </div>
          </div>

          <div className="block w-[398px] xl:ml-[62px] xl:mr-[32px]">
            <p className="mb-[16px] text-[14px] text-gray-500">Step 3/3</p>
            <h2 className="mb-[8px] text-[24px] text-white">
              Bukti Pembayaran
            </h2>
            <p className="mb-[28px] text-[16px] text-gray-500">
              Upload screenshot bukti pembayaran
            </p>
            <div className="block">
              <label className="mb-[20px] text-gray-400">
                Bukti pembayaran
              </label>
              <input
                className="tb-[14px] mb-[14px] mr-[14px] block h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] py-2.5 text-gray-500"
                type="file"
                name="bukti-pembayaran"
                // id={`name-${index}`}
                // value={item.name}
                // onChange={(e) =>
                //   handlePhotoChange(index, e.target.files[0] ?? null)
                // }
                placeholder="Bukti Pembayaran"
              />
            </div>
            <div className="mt-[48px] flex justify-end">
              <LinkButton
                className="mr-[16px] rounded-full border-2 border-gray-600 bg-black px-7 py-3 text-[16px] text-white"
                href={""}
              >
                Sebelumnya
              </LinkButton>
              <FormButton className="mr-[16px] rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white hover:border-primary-500 hover:bg-primary-600">
                Kirim
              </FormButton>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
