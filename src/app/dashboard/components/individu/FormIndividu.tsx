"use client"

import { FormButton, LinkButton } from '@/app/components/Button'
import React from 'react'

export default function FormIndividu() {
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
              <div className="block h-[113px] w-[52px] py-4">
              <svg className="m-auto" width="2" height="97" viewBox="0 0 2 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V97" stroke="#B10F00" stroke-width="1.8"/>
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
              <svg className="m-auto" width="2" height="97" viewBox="0 0 2 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V97" stroke="#656363" stroke-width="1.8"/>
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
                3
              </div>
              <div className="block h-[42px] w-[52px] py-2">
              </div>
            </div>
          </div>
        </div>

        <div className="xl:ml-[62px] xl:mr-[32px] block w-[398px]">
        <p className="mb-[16px] text-[14px] text-gray-500">Step 2/3</p>
          <h2 className="mb-[8px] text-[24px] text-white">Informasi Diri</h2>
          <p className="text-[16px] text-gray-500 mb-[28px]">
          Mohon untuk mengisi dengan benar dan teliti.
          </p>
          <div className="block">
            <input
              className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] hover:border-white hover:text-white invalid:text-primary-400 invalid:border-primary-400 active:text-white active:border-white hover:placeholder:text-white active:placeholder:text-white"
              type="text"
              name="NamaAnggota"
              id="NamaAnggota"
              placeholder="Nama"
            />
            <input
              className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] hover:border-white hover:text-white invalid:text-primary-400 invalid:border-primary-400 active:text-white active:border-white hover:placeholder:text-white active:placeholder:text-white"
              type="text"
              name="instansi"
              id="instansi"
              placeholder="Instansi"
            />
            <input
              className="mb-[14px] mr-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] hover:border-white hover:text-white invalid:text-primary-400 invalid:border-primary-400 active:text-white active:border-white hover:placeholder:text-white active:placeholder:text-white"
              type="text"
              name="NamaKetua"
              id="NamaKetua"
              placeholder="No. WhatsApp"
            />
            <label className="mb-[20px] text-gray-400">
                    Kartu Pelajar
                  </label>
                  <input
                    className="tb-[14px] mb-[14px] mr-[14px] block h-[54px] w-full rounded-lg border-2 border-white bg-black px-[16px] py-2.5 text-white hover:border-white hover:text-white active:border-white active:text-white invalid:border-primary-400 invalid:text-primary-400"
                    type="file"
                    name="Foto-Anggota"
                    // id={`name-${index}`}
                    // value={item.name}
                    // onChange={(e) =>
                    //   handlePhotoChange(index, e.target.files[0] ?? null)
                    // }
                    placeholder="Foto Anggota"
                  />
            <label className="mb-[20px] text-gray-400">
                    Foto anggota
                  </label>
                  <input
                    className="tb-[14px] mb-[14px] mr-[14px] block h-[54px] w-full rounded-lg border-2 border-white bg-black px-[16px] py-2.5 text-white hover:border-white hover:text-white active:border-white active:text-white invalid:border-primary-400 invalid:text-primary-400"
                    type="file"
                    name="Foto-Anggota"
                    // id={`name-${index}`}
                    // value={item.name}
                    // onChange={(e) =>
                    //   handlePhotoChange(index, e.target.files[0] ?? null)
                    // }
                    placeholder="Foto Anggota"
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
                className="rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white hover:bg-primary-600 hover:border-primary-500"
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
  )
}
