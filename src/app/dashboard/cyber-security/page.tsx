'use client'
import React from "react";
import FormAnggota from "../components/FormAnggota";
import FormTim from "../components/FormTim";
import BuktiPembayaran from "../components/BuktiPembayaran";
import PilihanBergabung from "../components/PilihanBergabung";
import Notifikasi from "../components/Notifikasi";
import { useState } from 'react';

export default function usecybersecurity() {
    const [currentStep, setCurrentStep] = useState(1);
    const limit = 4;
  
    const renderStep = () => {
      switch (currentStep) {
        case 1:
          return <PilihanBergabung />;
        case 2:
          return <FormTim />;
        case 3:
          return <FormAnggota limit={limit} wajib={false} />;
        case 4:
          return <BuktiPembayaran />;
        case 5:
          return <Notifikasi />;
        default:
          return null;
      }
    };


  return (
    <div className="relative w-screen">
      {renderStep()}
      <div>
      <FormTim />
      <FormAnggota limit={limit} wajib={false} />
      <BuktiPembayaran />
      <Notifikasi />
      </div>
    </div>
  );
}
