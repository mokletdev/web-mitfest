"use client";
import { LinkButton } from "@/app/components/Button";
import React from "react";

export default function PilihanBergabung() {
  return (
    <>
    <section className="m-0 pr-[24px] pl-[24px]">
    <section className="xl:justify-beetween xl:flex w-full max-w-full xl:w-[747px] rounded-md bg-black p-[24px] lg:p-[32px] md:max-w-lg lg:max-w-xl xl:max-w-full">
      <div className="flex mb-[62px] xl:invisible xl:absolute xl:top-0 xl:left-0">
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
              1
            </div>
            <div className="w-full h-0.5 bg-gray-600 my-auto mx-2"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              2
            </div>
            <div className="w-full h-0.5 bg-gray-600 my-auto mx-2"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              3
            </div>
            <div className="w-full h-0.5 bg-gray-600 my-auto mx-2"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              4
            </div>
            
      </div>

      <div className="block invisible xl:visible absolute top-0 left-0 xl:relative">
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
            <div className="block h-[42px] w-[52px] py-2">
              <svg
                className="m-auto"
                width="2"
                height="42"
                viewBox="0 0 2 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V42" stroke="#656363" stroke-width="1.8" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div className="mx-w-full relative block w-[153px]">
            <h2 className="text-right text-[18px] text-white">Informasi Tim</h2>
            <p className="text-right text-[16px] text-gray-500">
              Data tim pendaftar
            </p>
          </div>
          <div className="ml-[20px] block">
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              2
            </div>
            <div className="block h-[42px] w-[52px] py-2">
              <svg
                className="m-auto"
                width="2"
                height="42"
                viewBox="0 0 2 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V42" stroke="#656363" stroke-width="1.8" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div className="mx-w-full relative block w-[153px]">
            <h2 className="text-right text-[18px] text-white">
              Informasi Anggota
            </h2>
            <p className="text-right text-[16px] text-gray-500">
              Data Anggota tim
            </p>
          </div>
          <div className="ml-[20px] block">
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              3
            </div>
            <div className="block h-[42px] w-[52px] py-2">
              <svg
                className="m-auto"
                width="2"
                height="42"
                viewBox="0 0 2 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V42" stroke="#656363" stroke-width="1.8" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div className="mx-w-full relative block w-[153px]">
            <h2 className="text-right text-[18px] text-white">
              Bukti Pembayaran
            </h2>
            <p className="text-right text-[16px] text-gray-500">Screenshot</p>
          </div>
          <div className="ml-[20px] block">
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              4
            </div>
          </div>
        </div>
      </div>

      <div className="xl:ml-[62px] xl:mr-[32px] block w-full">
        <p className="mb-[16px] text-[14px] text-gray-500">Step 1/4</p>
        <h2 className="mb-[8px] text-[24px] text-white">Pilihan Bergabung</h2>
        <p className="mb-[28px] text-[16px] text-gray-500">
          Mohon untuk memilih yang sesuai dengan pilihan.
        </p>

        <ul className="grid w-full gap-6 grid-cols-2 mb-[48px]">
          <li>
            <input
              type="radio"
              id="kelompok"
              name="pilihan"
              defaultValue="kelompok"
              className="peer hidden"
            />
            <label
              htmlFor="kelompok"
              className="inline-flex cursor-pointer items-center justify-between rounded-lg border-2 border-gray-500 bg-black  text-gray-500 hover:bg-primary-400 hover:border-primary-400 hover:text-white peer-checked:border-primary-400 peer-checked:text-white peer-checked:bg-primary-500 dark:border-gray-500 dark:bg-black dark:text-gray-500 dark:hover:bg-primary-500 dark:hover:text-white dark:peer-checked:text-white w-full"
            >
              <div className="block">
                <div className="w-full text-lg text-center sm:mx-auto p-5 py-10 px-auto">Berkelompok</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="individu"
              name="pilihan"
              defaultValue="individu"
              className="peer hidden"
            />
            <label
              htmlFor="individu"
              className="inline-flex cursor-pointer items-center justify-between rounded-lg border-2 border-gray-500 bg-black text-gray-500 hover:bg-primary-400 hover:border-primary-400 hover:text-white peer-checked:border-primary-400 peer-checked:text-white peer-checked:bg-primary-500 dark:border-gray-500 dark:bg-black dark:text-gray-500 dark:hover:bg-primary-500 dark:hover:text-white dark:peer-checked:text-white w-full "
            >
              <div className="block">
                <div className="w-full text-lg text-center sm:mx-auto px-auto p-5 py-10">Individu</div>
              </div>
            </label>
          </li>
        </ul>

        <div className="flex justify-end">
          <LinkButton
            href={""}
            className="mr-[16px] rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white hover:bg-primary-400"
          >
            Selanjutnya
          </LinkButton>
        </div>
      </div>
    </section>
    </section>
    </>
  );
}
