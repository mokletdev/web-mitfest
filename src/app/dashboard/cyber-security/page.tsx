"use client";
import React from "react";
import FormAnggota from "../components/tim/FormAnggota";
import FormTim from "../components/tim/FormTim";
import BuktiPembayaran from "../components/tim/BuktiPembayaran";
import BuktiPembayaran2 from "../components/individu/BuktiPembayaran";
import PilihanBergabung from "../components/PilihanBergabung";
import Notifikasi from "../components/Notifikasi";
import FormIndividu from "../components/individu/FormIndividu";

export default function Usecybersecurity() {
  const [CurrentStep, setCurrentStep] = React.useState(1);
  const [Pilihan, setPilihan] = React.useState(false);
  const limit = 2;

  const handleStep = (submit: number) => {
    setCurrentStep(submit);
    console.log("parent " + submit);
  };

  const handlePilihan = (pilihan: boolean) => {
    setPilihan(pilihan);
  };
  const renderStep = () => {
    switch (CurrentStep) {
      case 1:
        return <PilihanBergabung pilihan={handlePilihan} submit={handleStep} />;
      case 2:
        return <FormTim />;
      case 3:
        return <FormAnggota limit={limit} wajib={false} submit={handleStep} />;
      case 4:
        return <BuktiPembayaran />;
      case 5:
        return <Notifikasi />;
      default:
        return null;
    }
  };

  return <div className="relative w-screen">{renderStep()}</div>;
}
