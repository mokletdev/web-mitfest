"use client";
import { FormButton, LinkButton } from "@/app/components/Button";
import React from "react";

interface FormPilihan {
  pilihan: (pilihan: boolean) => void;
  submit: (submit: number) => void;
}

const PilihanBergabung = ({ pilihan, submit }: FormPilihan) => {
  const handleSubmit = () => {
    submit(2);
  };
  return (
    <>
      <section className="m-0 pl-[24px] pr-[24px]">
        <section className="xl:justify-beetween w-full max-w-full rounded-md bg-black p-[24px] md:max-w-lg lg:max-w-xl lg:p-[32px] xl:flex xl:w-[747px] xl:max-w-full">
          <div className="mb-[62px] flex xl:invisible xl:absolute xl:left-0 xl:top-0">
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
              1
            </div>
            <div className="mx-2 my-auto h-0.5 w-full bg-gray-600"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              2
            </div>
            <div className="mx-2 my-auto h-0.5 w-full bg-gray-600"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              3
            </div>
            <div className="mx-2 my-auto h-0.5 w-full bg-gray-600"></div>
            <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
              4
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
                <div className="block h-[42px] w-[52px] py-2">
                  <svg
                    className="m-auto"
                    width="2"
                    height="42"
                    viewBox="0 0 2 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0V42" stroke="#656363" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="mx-w-full relative block w-[153px]">
                <h2 className="text-right text-[18px] text-white">
                  Informasi Tim
                </h2>
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
                    <path d="M1 0V42" stroke="#656363" strokeWidth="1.8" />
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
                    <path d="M1 0V42" stroke="#656363" strokeWidth="1.8" />
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
                <div className="m-auto rounded-full border-2 border-gray-600 bg-black px-5 py-3 text-[18px] text-gray-600">
                  4
                </div>
              </div>
            </div>
          </div>

          <div className="block w-full xl:ml-[62px] xl:mr-[32px]">
            <p className="mb-[16px] text-[14px] text-gray-500">Step 1/4</p>
            <h2 className="mb-[8px] text-[24px] text-white">
              Pilihan Bergabung
            </h2>
            <p className="mb-[28px] text-[16px] text-gray-500">
              Mohon untuk memilih yang sesuai dengan pilihan.
            </p>

            <ul className="mb-[48px] grid w-full grid-cols-2 gap-6">
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
                  className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-500  bg-black text-gray-500 hover:border-primary-500 hover:bg-primary-600 hover:text-white peer-checked:border-primary-400 peer-checked:bg-primary-500 peer-checked:text-white"
                >
                  <div className="block">
                    <div className="px-auto w-full p-5 py-10 text-center text-lg sm:mx-auto">
                      Berkelompok
                    </div>
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
                  className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-500 bg-black text-gray-500 hover:border-primary-500 hover:bg-primary-600 hover:text-white peer-checked:border-primary-400 peer-checked:bg-primary-500 peer-checked:text-white "
                >
                  <div className="block">
                    <div className="px-auto w-full p-5 py-10 text-center text-lg sm:mx-auto">
                      Individu
                    </div>
                  </div>
                </label>
              </li>
            </ul>

            <div className="flex justify-end">
              <FormButton
                onClick={handleSubmit}
                className="mr-[16px] rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white hover:border-primary-500 hover:bg-primary-600"
              >
                Selanjutnya
              </FormButton>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default PilihanBergabung;
