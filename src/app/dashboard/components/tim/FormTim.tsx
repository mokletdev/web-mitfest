import { FormButton, LinkButton } from "@/app/components/Button";
import React from "react";
import { FileInput } from "@/app/components/Form";

export default function FormTim() {
  return (
    <>
      <section className="m-0 pl-[24px] pr-[24px]">
        <section className="xl:justify-beetween w-full max-w-full rounded-md bg-black p-[24px] md:max-w-lg lg:max-w-xl lg:p-[32px] xl:flex xl:w-[747px] xl:max-w-full">
          <div className="mb-[62px] flex xl:invisible xl:absolute xl:left-0 xl:top-0">
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
              1
            </div>
            <div className="mx-2 my-auto h-0.5 w-full bg-primary-500"></div>
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
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
                    <path d="M1 0V42" stroke="#B10F00" strokeWidth="1.8" />
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
                <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
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

          <div className="block w-[398px] xl:ml-[62px] xl:mr-[32px]">
            <p className="mb-[16px] text-[14px] text-gray-500">Step 2/4</p>
            <h2 className="mb-[8px] text-[24px] text-white">Informasi Tim</h2>
            <p className="mb-[28px] text-[16px] text-gray-500">
              Mohon untuk mengisi dengan benar dan teliti.
            </p>
            <div className="block">
              <input
                className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] invalid:border-primary-400 invalid:text-primary-400 hover:border-white hover:text-white hover:placeholder:text-white active:border-white active:text-white active:placeholder:text-white"
                type="text"
                name="NamaAnggota"
                id="NamaAnggota"
                placeholder="Nama tim"
              />
              <input
                className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] invalid:border-primary-400 invalid:text-primary-400 hover:border-white hover:text-white hover:placeholder:text-white active:border-white active:text-white active:placeholder:text-white"
                type="text"
                name="instansi"
                id="instansi"
                placeholder="Instansi"
              />
              <input
                className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] invalid:border-primary-400 invalid:text-primary-400 hover:border-white hover:text-white hover:placeholder:text-white active:border-white active:text-white active:placeholder:text-white"
                type="text"
                name="NamaKetua"
                id="NamaKetua"
                placeholder="Nama Ketua"
              />
              <input
                className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] invalid:border-primary-400 invalid:text-primary-400 hover:border-white hover:text-white hover:placeholder:text-white active:border-white active:text-white active:placeholder:text-white"
                type="text"
                name="No-WhatsApp"
                id="No-WhatsApp"
                placeholder="No. WhatsApp (ketua)"
              />

              <FileInput
                name="kartu-pelajar"
                placeholder="Kartu Pelajar (Ketua)"
                required={true}
                accept="image/*,application/pdf"
                handleChange={() => {}}
              />
            </div>

            <div className="mt-[48px] flex justify-end">
              <LinkButton
                href=""
                className="mr-[16px] rounded-full border-2 border-gray-600 bg-black px-7 py-3 text-[16px] text-white"
              >
                Sebelumnya
              </LinkButton>
              <FormButton
                className="rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white hover:border-primary-500 hover:bg-primary-600"
                type="submit"
                // onClick={handleSubmit}
                // disabled={isSubmitDisabled}
              >
                Selanjutnya
                {/* ok*/}
                {/* iya sedikit mlenceng dari figma gpp kalo emang harus sama kayak figma nanti di revisi kalo di suruh*/}
              </FormButton>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
