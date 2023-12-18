"use client";

import { FormButton, LinkB, LinkButton } from "@/app/components/Button";
import { uploadFile } from "@/lib/googleDrive";
import React, { useState } from "react";

interface FormAnggotaProps {
  limit: number;
  wajib: boolean;
}

interface AnggotaData {
  name: string;
  photo: Buffer | null;
  student_card: Buffer | null;
  twibbon_link: string;
}

interface AnggotaDataFiks {
  name: string;
  photo: string;
  student_card: string;
  twibbon_link: string;
}

const FormAnggota: React.FC<FormAnggotaProps> = ({ limit, wajib }) => {
  const [anggota, setAnggota] = useState<AnggotaData[]>([
    { name: "", photo: null, student_card: null, twibbon_link: "" },
  ]);
  const [anggotaFiks, setAnggotaFiks] = useState<AnggotaDataFiks[]>([
    { name: "", photo: "", student_card: "", twibbon_link: "" },
  ]);
  const [isAlertOn, setIsAlertOn] = useState<boolean>(false);

  const handleNameChange = (index: number, value: string) => {
    const newAnggota = [...anggota];
    newAnggota[index].name = value;
    setAnggota(newAnggota);
  };

  const handlePhotoChange = (index: number, photo: File) => {
    const newAnggota = [...anggota];
    newAnggota[index].photo; //= fiks;
    setAnggota(newAnggota);
  };

  const handleKartuChange = (index: number, photo: File) => {
    const newAnggota = [...anggota];
    newAnggota[index].photo; //= fiks;
    setAnggota(newAnggota);
  };

  const handleRemove = (index: number) => {
    if (anggota.length > 1) {
      const newAnggota = [...anggota];
      newAnggota.splice(index, 1);
      setAnggota(newAnggota);
    } else {
        alert("Pendaftart minimal 1 anggota");
    }
  };

  const handleAddField = () => {
    if (anggota.length < limit) {
      setAnggota([
        ...anggota,
        { name: "", photo: null, student_card: null, twibbon_link: "" },
      ]);
    } else {
      alert("Sudah Mencapai Limit Pendaftaran");
    }
  };

  const convertAnggotaToAnggotaFiks = (
    anggotaData: AnggotaData[],
  ): AnggotaDataFiks[] => {
    const reader = new FileReader();
    return anggotaData.map((data) => {
      return {
        name: data.name,
        photo: "uploadfile(data.photo)",
        student_card: "uploadfile(data.student_card)",
        twibbon_link: data.twibbon_link,
      };
    });
  };

  const handleSubmit = () => {
    // ke database
  };
  var isSubmitDisabled = false;

  if (anggota.length < limit && wajib) {
    isSubmitDisabled = true;
  }

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
            <div className="mx-2 my-auto h-0.5 w-full bg-primary-500"></div>
            <div className="m-auto rounded-full bg-primary-500 px-5 py-3 text-[18px] text-white">
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

          <div className="relative block w-[398px] xl:ml-[62px] xl:mr-[32px]">
            <p className="mb-[16px] text-[14px] text-gray-500">Step 3/4</p>
            <h2 className="mb-[8px] text-[24px] text-white">
              Informasi Anggota
            </h2>
            <p className="text-[16px] text-gray-500">
              Mohon untuk mengisi dengan benar dan teliti
            </p>
            <div className="flex justify-between">
              <h2 className="mb-[28px] mt-[28px] text-[16px] text-white">
                Anggota tim
                <span>
                  {" "}
                  ({anggota.length}/{limit})
                </span>
              </h2>
              <div className="flex justify-around">
                <button
                  className="m-auto mr-[17px] rounded-full bg-primary-500 px-3 py-3 text-[18px] text-white"
                  onClick={handleAddField}
                >
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

                <button className="m-auto justify-center rounded-full bg-primary-500 px-3 py-3 text-[18px] text-white">
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
            {anggota.map((item, index) => (
              <form key={index}>
                <div className="absolute right-0 top-0 mt-[120px] flex">
                  <button
                    className="m-auto justify-center rounded-full bg-primary-500 px-3 py-3 text-[18px] text-white"
                    onClick={() => handleRemove(index)}
                  >
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

                <div className="flex">
                  <input
                    className="mb-[14px] h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px]"
                    type="text"
                    name="NamaAnggota"
                    id="NamaAnggota"
                    placeholder="Nama Anggota"
                  />
                </div>

                <div className="block">
                  <label className="mb-[20px] text-gray-400">
                    Foto Anggota
                  </label>
                  <input
                    className="tb-[14px] mb-[14px] mr-[14px] block h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] py-2.5 text-gray-500"
                    type="file"
                    name="Foto-Anggota"
                    id={`name-${index}`}
                    value={item.name}
                    onChange={(e) =>
                      handlePhotoChange(index, e.target.files[0] ?? null)
                    }
                    placeholder="Foto Anggota"
                  />
                </div>
                <div className="block">
                  <label className="mb-[20px] text-gray-400">
                    Kartu Pelajar
                  </label>
                  <input
                    className="tb-[14px] mb-[14px] mr-[14px] block h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] py-2.5 text-gray-500"
                    type="file"
                    name="kartu-pelajar"
                    id={`name-${index}`}
                    value={item.name}
                    onChange={(e) =>
                      handlePhotoChange(index, e.target.files[0] ?? null)
                    }
                    placeholder="Kartu Pelajar"
                  />
                </div>
                <div className="block">
                  <label className="mb-[20px] text-gray-400">Twibbon</label>
                  <input
                    className="tb-[14px] mb-[14px] mr-[14px] block h-[54px] w-full rounded-lg border-2 border-gray-500 bg-black px-[16px] py-2.5 text-gray-500"
                    type="file"
                    name="twibbon"
                    id={`name-${index}`}
                    value={item.name}
                    onChange={(e) =>
                      handlePhotoChange(index, e.target.files[0] ?? null)
                    }
                    placeholder="Twibbon"
                  />
                </div>

                <hr className="mb-[32px] mt-[32px]" />
              </form>
            ))}

            <div className="mt-[48px] flex justify-end">
              <LinkButton
                href=""
                className="mr-[16px] rounded-full border-2 border-gray-600 bg-black px-7 py-3 text-[16px] text-white"
              >
                Sebelumnya
              </LinkButton>
              <FormButton
                className="rounded-full border-2 border-primary-400 bg-primary-500 px-7 py-3 text-[16px] text-white hover:bg-primary-400"
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
              >
                Daftar
                {/* ok*/}
                {/* iya sedikit mlenceng dari figma gpp kalo emang harus sama kayak figma nanti di revisi kalo di suruh*/}
              </FormButton>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FormAnggota;
