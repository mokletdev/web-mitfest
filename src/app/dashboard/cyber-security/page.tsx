import React from "react";
import FormAnggota from "../components/FormAnggota";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Header from "../components/Header";

export default async function cybersecurity() {
  const session = await getServerSession(authOptions);

  const limit = 4;

  return (
    <div>
      {/* <Header
        title={`Pendaftaran kompetisi`}
        name={session?.user?.name}
      /> */}

      <section className="justify-beetween m-[24px] flex w-[795px] rounded-md bg-black p-[32px]">
        <div className="block">
          <div className="flex">
            <div className="mx-w-full relative block w-[153px]">
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
                  <path d="M1 0V42" stroke="#B10F00" stroke-width="1.8" />
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
                  <path d="M1 0V42" stroke="#B10F00" stroke-width="1.8" />
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
              <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
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

        <div className="ml-[62px] mr-[32px] block w-[398px]">
          <FormAnggota limit={limit} wajib={false} />
          <p className="mb-[16px] text-[14px] text-gray-500">Step 3/4</p>
          <h2 className="mb-[8px] text-[24px] text-white">Informasi Anggota</h2>
          <p className="text-[16px] text-gray-500">
            Mohon untuk mengisi dengan benar dan teliti
          </p>
          <div className="flex justify-between">
            <h2 className="mb-[28px] mt-[28px] text-[16px] text-white">
              Anggota tim<span> (2/4)</span>
            </h2>
            <div className="flex justify-around">
              <button className="m-auto mr-[17px] rounded-full bg-primary-500 px-3 py-3 text-[18px] text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="m-auto rounded-full bg-primary-500 px-3 py-3 text-[18px] text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <form action="">
            <input
              className="mb-[14px] h-[54px] w-[396px] rounded-lg border-2 border-gray-500 bg-black px-[16px]"
              type="text"
              name="NamaAnggota"
              id="NamaAnggota"
              placeholder="Nama Anggota"
            />
            <div className="flex">
              <input
                className="mb-[14px] mr-[14px] h-[54px] w-[352px] rounded-lg border-2 border-gray-500 bg-black px-[16px]"
                type="text"
                name="textFotoAnggota"
                id="textFotoAnggota"
                placeholder="Foto Anggota"
              />
              <input
                className=" hidden"
                type="file"
                name="FotoAnggota"
                id="FotoAnggota"
              />
              <label
                className="text-[16px] text-white"
                id="file-input-foto-anggota"
                htmlFor="FotoAnggota"
              >
                Pilih file
              </label>
            </div>
            <div className="flex">
              <input
                className="mr-[14px] h-[54px] w-[352px] rounded-lg border-2 border-gray-500 bg-black px-[16px]"
                type="text"
                name="textKartuPelajar"
                id="textKartuPelajar"
                placeholder="Kartu Pelajar"
              />
              <input
                className="hidden"
                type="file"
                name="KartuPelajar"
                id="KartuPelajar"
              />
              <label
                className="text-[16px] text-white"
                id="file-input-kartu-pelajar"
                htmlFor="KartuPelajar"
              >
                pilih file
              </label>
            </div>
          </form>

          <hr className="mb-[32px] mt-[32px]" />

          <form action="">
            <input
              className="mb-[14px] h-[54px] w-[396px] rounded-lg border-2 border-gray-500 bg-black px-[16px]"
              type="text"
              name="NamaAnggota"
              id="NamaAnggota"
              placeholder="Nama Anggota"
            />
            <div className="flex">
              <input
                className="mb-[14px] mr-[14px] h-[54px] w-[352px] rounded-lg border-2 border-gray-500 bg-black px-[16px]"
                type="text"
                name="textFotoAnggota"
                id="textFotoAnggota"
                placeholder="Foto Anggota"
              />
              <input
                className=" hidden"
                type="file"
                name="FotoAnggota"
                id="FotoAnggota"
              />
              <label
                className="text-[16px] text-white"
                id="file-input-foto-anggota"
                htmlFor="FotoAnggota"
              >
                Pilih file
              </label>
            </div>
            <div className="flex">
              <input
                className="mr-[14px] h-[54px] w-[352px] rounded-lg border-2 border-gray-500 bg-black px-[16px]"
                type="text"
                name="textKartuPelajar"
                id="textKartuPelajar"
                placeholder="Kartu Pelajar"
              />
              <input
                className="hidden"
                type="file"
                name="KartuPelajar"
                id="KartuPelajar"
              />
              <label
                className="text-[16px] text-white"
                id="file-input-kartu-pelajar"
                htmlFor="KartuPelajar"
              >
                pilih file
              </label>
            </div>
          </form>

          <div className="mt-[48px] flex justify-end">
            <button type="button">
              <h6 className="mr-[16px] rounded-full border-2 border-gray-600 bg-black px-7 py-3 text-[16px] text-white">
                Sebelumnya
              </h6>
            </button>
            <button type="button">
              <h6 className="rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white">
                Selanjutnya
              </h6>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
