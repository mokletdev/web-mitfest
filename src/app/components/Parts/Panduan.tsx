"use client";
import { useState, useEffect } from "react";

export default function Panduan() {
  const [activeStage, setActiveStage] = useState(0);
  const stages = [
    {
      title: `Kunjungi Situs Web MITFest`,
      description:
        "Temukan informasi lomba dan panduan melalui guidebook di situs web resmi MITFest.",
    },
    {
      title: `Tekan Tombol "Daftar" di Navbar`,
      description: `Klik tombol "Daftar" pada navbar untuk membuat akun dan mendapatkan akses ke dashboard.`,
    },
    {
      title: "Buat Akun dan Isi Formulir Pendaftaran",
      description:
        "Pilih kategori lomba yang diinginkan dan isi formulir pendaftaran yang tersedia di dashboard.",
    },
    {
      title: "Tunggu Konfirmasi dari Panitia",
      description:
        "Konfirmasi dapat diterima melalui email atau notifikasi di dashboard.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStage((prevActiveStage) =>
        activeStage < stages.length - 1 ? prevActiveStage + 1 : 0,
      );
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeStage, stages.length]);

  return (
    <section
      className="relative mx-auto flex w-full max-w-[1148px] flex-col items-center justify-between gap-[42px] px-5 py-[82px] text-white sm:items-start sm:gap-[52px] xl:flex-row"
      id="panduan"
    >
      <div className="block">
        <h3 className="mb-[52px] text-[32px] leading-10 drop-shadow-glow-white sm:text-[48px] sm:leading-[68px]">
          Daftar dengan Mudah
        </h3>
        <ul className="flex flex-col gap-[22px]">
          {stages.map((stage, i) => (
            <li key={i} className="block">
              <div className="mb-1 flex w-full items-center justify-between">
                <div
                  className={`relative h-[52px] w-[52px] rounded-full transition-all duration-300 ${
                    activeStage === i
                      ? "bg-primary-500 drop-shadow-glow-red"
                      : " bg-black drop-shadow-none"
                  }`}
                >
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl transition-all duration-300">
                    0{i + 1}
                  </span>
                </div>
                <h6
                  className={`w-[calc(100%-76px)] text-lg transition-all duration-300 sm:text-xl ${
                    activeStage === i ? "text-white" : "text-gray-500"
                  }`}
                >
                  {stage.title}
                </h6>
              </div>
              <p
                className={`overflow-y-hidden pl-[76px] text-gray-500 transition-all duration-300 ${
                  activeStage === i ? "max-h-24" : "max-h-0"
                }`}
              >
                {stage.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative z-[100] w-full sm:w-auto">
        <svg
          className="z-10 w-full xl:h-[612px] xl:w-[454px]"
          viewBox="0 0 301 432"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M35.9841 135.594H17.4124V365.67H35.7427"
            stroke="white"
            strokeWidth="1.4"
          />
          <g filter="url(#filter0_b_1035_945)">
            <path
              d="M61.0405 16.9608C61.0405 8.12427 68.204 0.960815 77.0405 0.960815H260.784C269.621 0.960815 276.784 8.12426 276.784 16.9608V415.965C276.784 424.802 269.621 431.965 260.784 431.965H77.0405C68.2039 431.965 61.0405 424.802 61.0405 415.965V16.9608Z"
              fill="#121212"
            />
            <path
              d="M77.0405 1.46082H260.784C269.344 1.46082 276.284 8.4004 276.284 16.9608V415.965C276.284 424.526 269.344 431.465 260.784 431.465H77.0405C68.4801 431.465 61.5405 424.526 61.5405 415.965V16.9608C61.5405 8.40041 68.4801 1.46082 77.0405 1.46082Z"
              stroke="url(#paint0_linear_1035_945)"
              strokeOpacity="0.3"
            />
          </g>
          <g filter="url(#filter1_b_1035_945)">
            <path
              d="M74.1021 30.8555C74.1021 22.0189 81.2655 14.8555 90.1021 14.8555H109.04C117.876 14.8555 125.04 22.0189 125.04 30.8555V53.0418C125.04 61.8783 117.876 69.0418 109.04 69.0418H90.1021C81.2655 69.0418 74.1021 61.8784 74.1021 53.0418V30.8555Z"
              fill="url(#paint1_linear_1035_945)"
            />
            <path
              d="M90.102 15.3555H109.04C117.6 15.3555 124.54 22.2951 124.54 30.8555V53.0418C124.54 61.6022 117.6 68.5418 109.04 68.5418H90.1021C81.5416 68.5418 74.6021 61.6022 74.6021 53.0418V30.8555C74.6021 22.2951 81.5416 15.3555 90.102 15.3555Z"
              stroke="url(#paint2_linear_1035_945)"
              strokeOpacity="0.3"
            />
          </g>
          <path
            d="M91.8623 47.8027V37.1888C91.8623 33.3292 92.7694 32.3643 96.3976 32.3643H102.747C106.375 32.3643 107.282 33.3292 107.282 37.1888V46.8378C107.282 46.9729 107.282 47.108 107.273 47.2431"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M94.4474 44.908H107.282V48.2852C107.282 50.1475 105.858 51.6624 104.108 51.6624H95.037C93.2864 51.6624 91.8623 50.1475 91.8623 48.2852V47.658C91.8623 46.1431 93.0233 44.908 94.4474 44.908Z"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M95.9438 37.1888H103.2"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M95.9438 40.5659H100.479"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g filter="url(#filter2_b_1035_945)">
            <path
              d="M35.5796 126.248C35.5796 117.411 42.743 110.248 51.5796 110.248H284.948C293.784 110.248 300.948 117.411 300.948 126.248V143.242C300.948 152.079 293.784 159.242 284.948 159.242H51.5796C42.743 159.242 35.5796 152.079 35.5796 143.242V126.248Z"
              fill="url(#paint3_linear_1035_945)"
            />
            <path
              d="M51.5796 110.748H284.948C293.508 110.748 300.448 117.688 300.448 126.248V143.242C300.448 151.803 293.508 158.742 284.948 158.742H51.5796C43.0192 158.742 36.0796 151.803 36.0796 143.242V126.248C36.0796 117.688 43.0192 110.748 51.5796 110.748Z"
              stroke="url(#paint4_linear_1035_945)"
              strokeOpacity="0.3"
            />
          </g>
          <path d="M17.2317 291.533H36.1508" stroke="white" strokeWidth="1.4" />
          <g filter="url(#filter3_b_1035_945)">
            <path
              d="M35.5796 283.036C35.5796 274.2 42.743 267.036 51.5796 267.036H284.948C293.784 267.036 300.948 274.2 300.948 283.036V300.03C300.948 308.867 293.784 316.03 284.948 316.03H51.5796C42.743 316.03 35.5796 308.867 35.5796 300.03V283.036Z"
              fill="url(#paint5_linear_1035_945)"
            />
            <path
              d="M51.5796 267.536H284.948C293.508 267.536 300.448 274.476 300.448 283.036V300.03C300.448 308.591 293.508 315.53 284.948 315.53H51.5796C43.0192 315.53 36.0796 308.591 36.0796 300.03V283.036C36.0796 274.476 43.0192 267.536 51.5796 267.536Z"
              stroke="url(#paint6_linear_1035_945)"
              strokeOpacity="0.3"
            />
          </g>
          <g filter="url(#filter4_b_1035_945)">
            <path
              d="M35.5796 356.361C35.5796 347.524 42.743 340.361 51.5796 340.361H284.948C293.784 340.361 300.948 347.524 300.948 356.361V373.355C300.948 382.192 293.784 389.355 284.948 389.355H51.5796C42.743 389.355 35.5796 382.192 35.5796 373.355V356.361Z"
              fill="url(#paint7_linear_1035_945)"
            />
            <path
              d="M51.5796 340.861H284.948C293.508 340.861 300.448 347.801 300.448 356.361V373.355C300.448 381.916 293.508 388.855 284.948 388.855H51.5796C43.0192 388.855 36.0796 381.916 36.0796 373.355V356.361C36.0796 347.801 43.0192 340.861 51.5796 340.861Z"
              stroke="url(#paint8_linear_1035_945)"
              strokeOpacity="0.3"
            />
          </g>
          <path
            d="M65.02 127.601H271.507"
            stroke="url(#paint9_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 134.745H206.527"
            stroke="url(#paint10_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 141.889H168.264"
            stroke="url(#paint11_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 284.389H271.507"
            stroke="url(#paint12_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 291.533H206.527"
            stroke="url(#paint13_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 298.676H168.264"
            stroke="url(#paint14_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 357.715H271.507"
            stroke="url(#paint15_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 364.858H206.527"
            stroke="url(#paint16_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M65.02 372.002H168.264"
            stroke="url(#paint17_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />
          <path
            d="M0.947754 200.528C0.947754 191.692 8.1112 184.528 16.9478 184.528H284.948C293.784 184.528 300.948 191.692 300.948 200.528V231.366C300.948 240.203 293.784 247.366 284.948 247.366H16.9478C8.1112 247.366 0.947754 240.203 0.947754 231.366V200.528Z"
            fill="#B10F00"
          />
          <path d="M34.2305 208.804H267.665" stroke="white" strokeWidth="1.4" />
          <path d="M34.2305 215.946H194.205" stroke="white" strokeWidth="1.4" />
          <path d="M34.2305 223.09H150.948" stroke="white" strokeWidth="1.4" />
          <defs>
            <filter
              id="filter0_b_1035_945"
              x="31.0405"
              y="-29.0392"
              width="275.743"
              height="491.004"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_1035_945"
              x="44.1021"
              y="-15.1445"
              width="110.938"
              height="114.186"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_1035_945"
              x="5.57959"
              y="80.248"
              width="325.368"
              height="108.994"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_b_1035_945"
              x="5.57959"
              y="237.036"
              width="325.368"
              height="108.994"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_b_1035_945"
              x="5.57959"
              y="310.361"
              width="325.368"
              height="108.994"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1035_945"
              x1="53.3867"
              y1="-35.9632"
              x2="429.639"
              y2="313.108"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1035_945"
              x1="88.201"
              y1="15.673"
              x2="128.576"
              y2="49.21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4" />
              <stop offset="1" stopColor="#171717" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1035_945"
              x1="72.295"
              y1="10.2133"
              x2="113.254"
              y2="81.5769"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1035_945"
              x1="109.031"
              y1="110.987"
              x2="123.901"
              y2="182.154"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4" />
              <stop offset="1" stopColor="#171717" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1035_945"
              x1="26.1652"
              y1="106.051"
              x2="34.6262"
              y2="190.989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1035_945"
              x1="109.031"
              y1="267.775"
              x2="123.901"
              y2="338.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4" />
              <stop offset="1" stopColor="#171717" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1035_945"
              x1="26.1652"
              y1="262.839"
              x2="34.6262"
              y2="347.777"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1035_945"
              x1="109.031"
              y1="341.1"
              x2="123.901"
              y2="412.267"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4" />
              <stop offset="1" stopColor="#171717" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1035_945"
              x1="26.1652"
              y1="336.164"
              x2="34.6262"
              y2="421.102"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_1035_945"
              x1="57.6945"
              y1="127.516"
              x2="57.6991"
              y2="129.267"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_1035_945"
              x1="59.9998"
              y1="134.659"
              x2="60.0065"
              y2="136.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_1035_945"
              x1="61.3573"
              y1="141.803"
              x2="61.3664"
              y2="143.554"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_1035_945"
              x1="57.6945"
              y1="284.303"
              x2="57.6991"
              y2="286.054"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_1035_945"
              x1="59.9998"
              y1="291.447"
              x2="60.0065"
              y2="293.198"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_1035_945"
              x1="61.3573"
              y1="298.591"
              x2="61.3664"
              y2="300.341"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_1035_945"
              x1="57.6945"
              y1="357.63"
              x2="57.6991"
              y2="359.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_1035_945"
              x1="59.9998"
              y1="364.773"
              x2="60.0065"
              y2="366.524"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_1035_945"
              x1="61.3573"
              y1="371.916"
              x2="61.3664"
              y2="373.667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="animate-on-and-off pointer-events-none absolute left-[55%] top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 drop-shadow-glow-white xl:h-[900px] xl:w-[200%]"
          viewBox="0 0 379 544"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M0.952881 84.7862L0.952881 43.1831M0.952881 84.7862H42.7807M0.952881 84.7862L0.952881 126.389M0.952881 43.1831H42.7807M0.952881 43.1831L0.952881 1.58002H42.7807M42.7807 43.1831V84.7862M42.7807 43.1831V1.58002M42.7807 43.1831H84.6084M42.7807 84.7862H84.6084M42.7807 84.7862V126.389M42.7807 1.58002H84.6084M84.6084 43.1831V84.7862M84.6084 43.1831H126.436M84.6084 43.1831L84.6084 1.58002M84.6084 84.7862H126.436M84.6084 84.7862V126.389M126.436 43.1831V84.7862M126.436 43.1831H168.264M126.436 43.1831L126.436 1.58002M126.436 84.7862H168.264M126.436 84.7862V126.389M168.264 43.1831V84.7862M168.264 43.1831H210.092M168.264 43.1831V1.58002M168.264 84.7862H210.092M168.264 84.7862V126.389M210.092 43.1831V84.7862M210.092 43.1831H251.92M210.092 43.1831V1.58002M210.092 84.7862H251.92M210.092 84.7862V126.389M251.92 43.1831V84.7862M251.92 43.1831H293.747M251.92 43.1831V1.58002M251.92 84.7862H293.747M251.92 84.7862V126.389M293.747 43.1831V84.7862M293.747 43.1831H335.575M293.747 43.1831V1.58002M293.747 84.7862H335.575M293.747 84.7862V126.389M335.575 43.1831V84.7862M335.575 43.1831H377.403M335.575 43.1831V1.58002M335.575 84.7862H377.403M335.575 84.7862V126.389M377.403 43.1831V84.7862M377.403 43.1831V1.58002H335.575M377.403 84.7862V126.389M84.6084 1.58002H126.436M126.436 1.58002H168.264M168.264 1.58002H210.092M210.092 1.58002H251.92M251.92 1.58002H293.747M293.747 1.58002H335.575M0.952881 500.817L0.952881 542.42H42.7807M0.952881 500.817H42.7807M0.952881 500.817L0.952881 459.214M42.7807 500.817V542.42M42.7807 500.817V459.214M42.7807 500.817H84.6084M42.7807 542.42H84.6084M0.952881 459.214H42.7807M0.952881 459.214L0.952881 417.611M42.7807 459.214V417.611M42.7807 459.214H84.6084M0.952881 417.611H42.7807M0.952881 417.611L0.952881 376.008M42.7807 417.611V376.008M42.7807 417.611H84.6084M0.952881 376.008H42.7807M0.952881 376.008L0.952881 334.405M42.7807 376.008V334.405M42.7807 376.008H84.6084M0.952881 334.405H42.7807M0.952881 334.405L0.952881 292.802M42.7807 334.405V292.802M42.7807 334.405H84.6084M0.952881 292.802H42.7807M0.952881 292.802L0.952881 251.198M42.7807 292.802L42.7807 251.198M42.7807 292.802H84.6084M0.952881 251.198H42.7807M0.952881 251.198L0.952881 209.595M42.7807 251.198V209.595M42.7807 251.198H84.6084M0.952881 209.595H42.7807M0.952881 209.595L0.952881 167.992M42.7807 209.595V167.992M42.7807 209.595H84.6084M0.952881 167.992H42.7807M0.952881 167.992L0.952881 126.389M42.7807 167.992V126.389M42.7807 167.992H84.6084M0.952881 126.389H42.7807M42.7807 126.389H84.6084M84.6084 500.817V542.42M84.6084 500.817H126.436M84.6084 500.817V459.214M84.6084 542.42H126.436M126.436 500.817V542.42M126.436 500.817H168.264M126.436 500.817V459.214M126.436 542.42H168.264M168.264 500.817V542.42M168.264 500.817H210.092M168.264 500.817V459.214M168.264 542.42H210.092M210.092 500.817V542.42M210.092 500.817H251.92M210.092 500.817V459.214M210.092 542.42H251.92M251.92 500.817V542.42M251.92 500.817H293.747M251.92 500.817V459.214M251.92 542.42H293.747M293.747 500.817V542.42M293.747 500.817H335.575M293.747 500.817V459.214M293.747 542.42H335.575M335.575 500.817V542.42M335.575 500.817H377.403M335.575 500.817V459.214M335.575 542.42H377.403V500.817M377.403 500.817V459.214M84.6084 459.214H126.436M84.6084 459.214V417.611M126.436 459.214H168.264M126.436 459.214V417.611M168.264 459.214H210.092M168.264 459.214V417.611M210.092 459.214H251.92M210.092 459.214V417.611M251.92 459.214H293.747M251.92 459.214V417.611M293.747 459.214H335.575M293.747 459.214V417.611M335.575 459.214H377.403M335.575 459.214V417.611M377.403 459.214V417.611M84.6084 417.611H126.436M84.6084 417.611V376.008M126.436 417.611H168.264M126.436 417.611V376.008M168.264 417.611H210.092M168.264 417.611V376.008M210.092 417.611H251.92M210.092 417.611V376.008M251.92 417.611H293.747M251.92 417.611V376.008M293.747 417.611H335.575M293.747 417.611V376.008M335.575 417.611H377.403M335.575 417.611V376.008M377.403 417.611V376.008M84.6084 376.008H126.436M84.6084 376.008V334.405M126.436 376.008H168.264M126.436 376.008V334.405M168.264 376.008H210.092M168.264 376.008V334.405M210.092 376.008H251.92M210.092 376.008V334.405M251.92 376.008H293.747M251.92 376.008V334.405M293.747 376.008H335.575M293.747 376.008V334.405M335.575 376.008H377.403M335.575 376.008V334.405M377.403 376.008V334.405M84.6084 334.405H126.436M84.6084 334.405V292.802M126.436 334.405H168.264M126.436 334.405V292.802M168.264 334.405H210.092M168.264 334.405V292.802M210.092 334.405H251.92M210.092 334.405V292.802M251.92 334.405H293.747M251.92 334.405V292.802M293.747 334.405H335.575M293.747 334.405V292.802M335.575 334.405H377.403M335.575 334.405V292.802M377.403 334.405V292.802M84.6084 292.802H126.436M84.6084 292.802V251.198M126.436 292.802H168.264M126.436 292.802V251.198M168.264 292.802H210.092M168.264 292.802V251.198M210.092 292.802H251.92M210.092 292.802V251.198M251.92 292.802H293.747M251.92 292.802V251.198M293.747 292.802H335.575M293.747 292.802V251.198M335.575 292.802H377.403M335.575 292.802V251.198M377.403 292.802V251.198M84.6084 251.198H126.436M84.6084 251.198V209.595M126.436 251.198H168.264M126.436 251.198V209.595M168.264 251.198H210.092M168.264 251.198V209.595M210.092 251.198H251.92M210.092 251.198V209.595M251.92 251.198H293.747M251.92 251.198V209.595M293.747 251.198H335.575M293.747 251.198V209.595M335.575 251.198H377.403M335.575 251.198V209.595M377.403 251.198V209.595M84.6084 209.595H126.436M84.6084 209.595V167.992M126.436 209.595H168.264M126.436 209.595V167.992M168.264 209.595H210.092M168.264 209.595V167.992M210.092 209.595H251.92M210.092 209.595V167.992M251.92 209.595H293.747M251.92 209.595V167.992M293.747 209.595H335.575M293.747 209.595V167.992M335.575 209.595H377.403M335.575 209.595V167.992M377.403 209.595V167.992M84.6084 167.992H126.436M84.6084 167.992V126.389M126.436 167.992H168.264M126.436 167.992V126.389M168.264 167.992H210.092M168.264 167.992V126.389M210.092 167.992H251.92M210.092 167.992V126.389M251.92 167.992H293.747M251.92 167.992V126.389M293.747 167.992H335.575M293.747 167.992V126.389M335.575 167.992H377.403M335.575 167.992V126.389M377.403 167.992V126.389M84.6084 126.389H126.436M126.436 126.389H168.264M168.264 126.389H210.092M210.092 126.389H251.92M251.92 126.389H293.747M293.747 126.389H335.575M335.575 126.389H377.403"
            stroke="url(#paint0_radial_1094_9360)"
            strokeOpacity="0.4"
            strokeWidth="1.85684"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1094_9360"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(189.178 272) scale(188.225 270.42)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
