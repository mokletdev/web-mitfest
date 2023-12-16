"use client";

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

  const handleRemove = (index: number) => {
    const newAnggota = [...anggota];
    newAnggota.splice(index, 1);
    setAnggota(newAnggota);
  };

  const handleAddField = () => {
    if (anggota.length < limit) {
      setAnggota([
        ...anggota,
        { name: "", photo: null, student_card: null, twibbon_link: "" },
      ]);
    } else {
      setIsAlertOn(true);
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
  var isSubmitDisabled;
  if (wajib) {
    isSubmitDisabled = anggota.length < limit;
  }
  return (
    <>
      {anggota.length < limit && (
        <button type="button" onClick={handleAddField}>
          Tambah Field
        </button>
      )}
      {anggota.map((item, index) => (
        <div key={index}>
          <button type="button" onClick={() => handleRemove(index)}>
            Hapus
          </button>
          <br></br>
          <input
            type="text"
            id={`name-${index}`}
            value={item.name}
            onChange={(e) => handleNameChange(index, e.target.value)}
          />

          <br></br>
          <input
            type="file"
            id={`file-${index}`}
            onChange={(e) => handlePhotoChange(index, e.target.files?.[0]!)}
          />
        </div>
      ))}

      <button type="button" onClick={handleSubmit} disabled={isSubmitDisabled}>
        Submit
      </button>
    </>
  );
};

export default FormAnggota;
