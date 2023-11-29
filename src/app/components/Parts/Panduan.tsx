"use client";
import { useState, useEffect } from "react";

export default function Panduan() {
  const [activeStage, setActiveStage] = useState(0);
  const stages = [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ex quis nisl pretium mollis accumsan ut nisl.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ex quis nisl pretium mollis accumsan ut nisl.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ex quis nisl pretium mollis accumsan ut nisl.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ex quis nisl pretium mollis accumsan ut nisl.",
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
        <h3 className="mb-[52px] text-[32px] leading-[68px] drop-shadow-glow-white sm:text-[48px]">
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
                  activeStage === i ? "h-12" : "h-0"
                }`}
              >
                {stage.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full sm:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full xl:h-[612px] xl:w-[454px]"
          fill="none"
          viewBox="0 0 301 432"
        >
          <path
            stroke="#fff"
            strokeWidth="1.4"
            d="M35.984 135.594H17.412V365.67h18.33"
          ></path>
          <g filter="url(#filter0_b_1035_945)">
            <path
              fill="#171717"
              d="M61.04 16.96c0-8.836 7.164-16 16-16h183.744c8.837 0 16 7.164 16 16v399.005c0 8.837-7.163 16-16 16H77.041c-8.837 0-16-7.163-16-16V16.961z"
            ></path>
            <path
              stroke="url(#paint0_linear_1035_945)"
              strokeOpacity="0.3"
              d="M77.04 1.46h183.744c8.56 0 15.5 6.94 15.5 15.5v399.005c0 8.561-6.94 15.5-15.5 15.5H77.041c-8.56 0-15.5-6.939-15.5-15.5V16.961c0-8.56 6.94-15.5 15.5-15.5z"
            ></path>
          </g>
          <g filter="url(#filter1_b_1035_945)">
            <path
              fill="url(#paint1_linear_1035_945)"
              d="M74.102 30.855c0-8.836 7.163-16 16-16h18.938c8.836 0 16 7.164 16 16v22.187c0 8.836-7.164 16-16 16H90.102c-8.837 0-16-7.164-16-16V30.855z"
            ></path>
            <path
              stroke="url(#paint2_linear_1035_945)"
              strokeOpacity="0.3"
              d="M90.102 15.355h18.938c8.56 0 15.5 6.94 15.5 15.5v22.187c0 8.56-6.94 15.5-15.5 15.5H90.102c-8.56 0-15.5-6.94-15.5-15.5V30.855c0-8.56 6.94-15.5 15.5-15.5z"
            ></path>
          </g>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
            d="M91.862 47.803V37.189c0-3.86.907-4.825 4.536-4.825h6.349c3.628 0 4.535.965 4.535 4.825v9.649c0 .135 0 .27-.009.405"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M94.447 44.908h12.835v3.377c0 1.863-1.424 3.377-3.174 3.377h-9.071c-1.75 0-3.175-1.514-3.175-3.377v-.627c0-1.515 1.161-2.75 2.585-2.75z"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
            d="M95.944 37.189h7.256M95.944 40.566h4.535"
          ></path>
          <g filter="url(#filter2_b_1035_945)">
            <path
              fill="url(#paint3_linear_1035_945)"
              d="M35.58 126.248c0-8.837 7.163-16 16-16h233.368c8.836 0 16 7.163 16 16v16.994c0 8.837-7.164 16-16 16H51.58c-8.837 0-16-7.163-16-16v-16.994z"
            ></path>
            <path
              stroke="url(#paint4_linear_1035_945)"
              strokeOpacity="0.3"
              d="M51.58 110.748h233.368c8.56 0 15.5 6.94 15.5 15.5v16.994c0 8.561-6.94 15.5-15.5 15.5H51.58c-8.56 0-15.5-6.939-15.5-15.5v-16.994c0-8.56 6.94-15.5 15.5-15.5z"
            ></path>
          </g>
          <path
            stroke="#fff"
            strokeWidth="1.4"
            d="M17.232 291.533H36.15"
          ></path>
          <g filter="url(#filter3_b_1035_945)">
            <path
              fill="url(#paint5_linear_1035_945)"
              d="M35.58 283.036c0-8.836 7.163-16 16-16h233.368c8.836 0 16 7.164 16 16v16.994c0 8.837-7.164 16-16 16H51.58c-8.837 0-16-7.163-16-16v-16.994z"
            ></path>
            <path
              stroke="url(#paint6_linear_1035_945)"
              strokeOpacity="0.3"
              d="M51.58 267.536h233.368c8.56 0 15.5 6.94 15.5 15.5v16.994c0 8.561-6.94 15.5-15.5 15.5H51.58c-8.56 0-15.5-6.939-15.5-15.5v-16.994c0-8.56 6.94-15.5 15.5-15.5z"
            ></path>
          </g>
          <g filter="url(#filter4_b_1035_945)">
            <path
              fill="url(#paint7_linear_1035_945)"
              d="M35.58 356.361c0-8.837 7.163-16 16-16h233.368c8.836 0 16 7.163 16 16v16.994c0 8.837-7.164 16-16 16H51.58c-8.837 0-16-7.163-16-16v-16.994z"
            ></path>
            <path
              stroke="url(#paint8_linear_1035_945)"
              strokeOpacity="0.3"
              d="M51.58 340.861h233.368c8.56 0 15.5 6.94 15.5 15.5v16.994c0 8.561-6.94 15.5-15.5 15.5H51.58c-8.56 0-15.5-6.939-15.5-15.5v-16.994c0-8.56 6.94-15.5 15.5-15.5z"
            ></path>
          </g>
          <path
            stroke="url(#paint9_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 127.601h206.487"
          ></path>
          <path
            stroke="url(#paint10_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 134.745h141.507"
          ></path>
          <path
            stroke="url(#paint11_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 141.889h103.244"
          ></path>
          <path
            stroke="url(#paint12_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 284.389h206.487"
          ></path>
          <path
            stroke="url(#paint13_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 291.533h141.507"
          ></path>
          <path
            stroke="url(#paint14_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 298.676h103.244"
          ></path>
          <path
            stroke="url(#paint15_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 357.715h206.487"
          ></path>
          <path
            stroke="url(#paint16_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 364.858h141.507"
          ></path>
          <path
            stroke="url(#paint17_linear_1035_945)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            d="M65.02 372.002h103.244"
          ></path>
          <path
            fill="#B10F00"
            d="M.948 200.528c0-8.836 7.163-16 16-16h268c8.836 0 16 7.164 16 16v30.838c0 8.837-7.164 16-16 16h-268c-8.837 0-16-7.163-16-16v-30.838z"
          ></path>
          <path
            stroke="#fff"
            strokeWidth="1.4"
            d="M34.23 208.804h233.435M34.23 215.946h159.975M34.23 223.09h116.718"
          ></path>
          <defs>
            <filter
              id="filter0_b_1035_945"
              width="275.743"
              height="491.004"
              x="31.041"
              y="-29.039"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="15"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              ></feComposite>
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter1_b_1035_945"
              width="110.938"
              height="114.186"
              x="44.102"
              y="-15.145"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="15"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              ></feComposite>
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter2_b_1035_945"
              width="325.368"
              height="108.994"
              x="5.58"
              y="80.248"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="15"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              ></feComposite>
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter3_b_1035_945"
              width="325.368"
              height="108.994"
              x="5.58"
              y="237.036"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="15"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              ></feComposite>
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter4_b_1035_945"
              width="325.368"
              height="108.994"
              x="5.58"
              y="310.361"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="15"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1035_945"
              ></feComposite>
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1035_945"
                result="shape"
              ></feBlend>
            </filter>
            <linearGradient
              id="paint0_linear_1035_945"
              x1="53.387"
              x2="429.639"
              y1="-35.963"
              y2="313.108"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_1035_945"
              x1="88.201"
              x2="128.576"
              y1="15.673"
              y2="49.21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#171717" stopOpacity="0.1"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_1035_945"
              x1="72.295"
              x2="113.254"
              y1="10.213"
              y2="81.577"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_1035_945"
              x1="109.031"
              x2="123.901"
              y1="110.987"
              y2="182.154"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#171717" stopOpacity="0.1"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_1035_945"
              x1="26.165"
              x2="34.626"
              y1="106.051"
              y2="190.989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_1035_945"
              x1="109.031"
              x2="123.901"
              y1="267.775"
              y2="338.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#171717" stopOpacity="0.1"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_1035_945"
              x1="26.165"
              x2="34.626"
              y1="262.839"
              y2="347.777"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint7_linear_1035_945"
              x1="109.031"
              x2="123.901"
              y1="341.1"
              y2="412.267"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#171717" stopOpacity="0.1"></stop>
            </linearGradient>
            <linearGradient
              id="paint8_linear_1035_945"
              x1="26.165"
              x2="34.626"
              y1="336.164"
              y2="421.102"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint9_linear_1035_945"
              x1="57.694"
              x2="57.699"
              y1="127.516"
              y2="129.267"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint10_linear_1035_945"
              x1="60"
              x2="60.007"
              y1="134.659"
              y2="136.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint11_linear_1035_945"
              x1="61.357"
              x2="61.366"
              y1="141.803"
              y2="143.554"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint12_linear_1035_945"
              x1="57.694"
              x2="57.699"
              y1="284.303"
              y2="286.054"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint13_linear_1035_945"
              x1="60"
              x2="60.007"
              y1="291.447"
              y2="293.198"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint14_linear_1035_945"
              x1="61.357"
              x2="61.366"
              y1="298.591"
              y2="300.341"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint15_linear_1035_945"
              x1="57.694"
              x2="57.699"
              y1="357.63"
              y2="359.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint16_linear_1035_945"
              x1="60"
              x2="60.007"
              y1="364.773"
              y2="366.524"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint17_linear_1035_945"
              x1="61.357"
              x2="61.366"
              y1="371.916"
              y2="373.667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="animate-on-and-off pointer-events-none absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 drop-shadow-glow-white xl:h-[612px] xl:w-[454px]"
          viewBox="0 0 374 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M555.647 2.4361H606.013M555.647 2.4361V52.8021M555.647 2.4361H505.281M606.013 2.4361V52.8021M606.013 2.4361H656.379V52.8021M606.013 52.8021H555.647M606.013 52.8021H656.379M606.013 52.8021V103.168M555.647 52.8021V103.168M555.647 52.8021H505.281M656.379 52.8021V103.168M606.013 103.168H555.647M606.013 103.168V153.534M606.013 103.168H656.379M555.647 103.168V153.534M555.647 103.168H505.281M606.013 153.534H555.647M606.013 153.534V203.9M606.013 153.534H656.379M555.647 153.534V203.9M555.647 153.534H505.281M606.013 203.9H555.647M606.013 203.9V254.266M606.013 203.9H656.379M555.647 203.9V254.266M555.647 203.9H505.281M606.013 254.266H555.647M606.013 254.266V304.632M606.013 254.266H656.379M555.647 254.266V304.632M555.647 254.266H505.281M606.013 304.632H555.647M606.013 304.632V354.998M606.013 304.632H656.379M555.647 304.632V354.998M555.647 304.632H505.281M606.013 354.998H555.647M606.013 354.998V405.364M606.013 354.998H656.379M555.647 354.998V405.364M555.647 354.998H505.281M606.013 405.364H555.647M606.013 405.364V455.73M606.013 405.364H656.379M555.647 405.364V455.73M555.647 405.364H505.281M606.013 455.73H555.647M606.013 455.73H656.379V405.364M555.647 455.73H505.281M656.379 103.168V153.534M656.379 153.534V203.9M656.379 203.9V254.266M656.379 254.266V304.632M656.379 304.632V354.998M656.379 354.998V405.364M51.9872 2.4361H1.62122V52.8021M51.9872 2.4361V52.8021M51.9872 2.4361H102.353M51.9872 52.8021H1.62122M51.9872 52.8021H102.353M51.9872 52.8021V103.168M1.62122 52.8021V103.168M102.353 2.4361V52.8021M102.353 2.4361H152.719M102.353 52.8021H152.719M102.353 52.8021V103.168M152.719 2.4361V52.8021M152.719 2.4361H203.085M152.719 52.8021H203.085M152.719 52.8021V103.168M203.085 2.4361V52.8021M203.085 2.4361H253.451M203.085 52.8021H253.451M203.085 52.8021V103.168M253.451 2.4361V52.8021M253.451 2.4361H303.817M253.451 52.8021H303.817M253.451 52.8021V103.168M303.817 2.4361V52.8021M303.817 2.4361H354.183M303.817 52.8021H354.183M303.817 52.8021V103.168M354.183 2.4361V52.8021M354.183 2.4361H404.549M354.183 52.8021H404.549M354.183 52.8021V103.168M404.549 2.4361V52.8021M404.549 2.4361H454.915M404.549 52.8021H454.915M404.549 52.8021V103.168M454.915 2.4361V52.8021M454.915 2.4361H505.281M454.915 52.8021H505.281M454.915 52.8021V103.168M505.281 2.4361V52.8021M505.281 52.8021V103.168M51.9872 103.168H1.62122M51.9872 103.168V153.534M51.9872 103.168H102.353M1.62122 103.168V153.534M51.9872 153.534H1.62122M51.9872 153.534V203.9M51.9872 153.534H102.353M1.62122 153.534V203.9M51.9872 203.9H1.62122M51.9872 203.9V254.266M51.9872 203.9H102.353M1.62122 203.9V254.266M51.9872 254.266H1.62122M51.9872 254.266V304.632M51.9872 254.266H102.353M1.62122 254.266V304.632M51.9872 304.632H1.62122M51.9872 304.632V354.998M51.9872 304.632H102.353M1.62122 304.632V354.998M51.9872 354.998H1.62122M51.9872 354.998V405.364M51.9872 354.998H102.353M1.62122 354.998V405.364M51.9872 405.364H1.62122M51.9872 405.364V455.73M51.9872 405.364H102.353M1.62122 405.364V455.73H51.9872M51.9872 455.73H102.353M102.353 103.168V153.534M102.353 103.168H152.719M102.353 153.534V203.9M102.353 153.534H152.719M102.353 203.9V254.266M102.353 203.9H152.719M102.353 254.266V304.632M102.353 254.266H152.719M102.353 304.632V354.998M102.353 304.632H152.719M102.353 354.998V405.364M102.353 354.998H152.719M102.353 405.364V455.73M102.353 405.364H152.719M102.353 455.73H152.719M152.719 103.168V153.534M152.719 103.168H203.085M152.719 153.534V203.9M152.719 153.534H203.085M152.719 203.9V254.266M152.719 203.9H203.085M152.719 254.266V304.632M152.719 254.266H203.085M152.719 304.632V354.998M152.719 304.632H203.085M152.719 354.998V405.364M152.719 354.998H203.085M152.719 405.364V455.73M152.719 405.364H203.085M152.719 455.73H203.085M203.085 103.168V153.534M203.085 103.168H253.451M203.085 153.534V203.9M203.085 153.534H253.451M203.085 203.9V254.266M203.085 203.9H253.451M203.085 254.266V304.632M203.085 254.266H253.451M203.085 304.632V354.998M203.085 304.632H253.451M203.085 354.998V405.364M203.085 354.998H253.451M203.085 405.364V455.73M203.085 405.364H253.451M203.085 455.73H253.451M253.451 103.168V153.534M253.451 103.168H303.817M253.451 153.534V203.9M253.451 153.534H303.817M253.451 203.9V254.266M253.451 203.9H303.817M253.451 254.266V304.632M253.451 254.266H303.817M253.451 304.632V354.998M253.451 304.632H303.817M253.451 354.998V405.364M253.451 354.998H303.817M253.451 405.364V455.73M253.451 405.364H303.817M253.451 455.73H303.817M303.817 103.168V153.534M303.817 103.168H354.183M303.817 153.534V203.9M303.817 153.534H354.183M303.817 203.9V254.266M303.817 203.9H354.183M303.817 254.266V304.632M303.817 254.266H354.183M303.817 304.632V354.998M303.817 304.632H354.183M303.817 354.998V405.364M303.817 354.998H354.183M303.817 405.364V455.73M303.817 405.364H354.183M303.817 455.73H354.183M354.183 103.168V153.534M354.183 103.168H404.549M354.183 153.534V203.9M354.183 153.534H404.549M354.183 203.9V254.266M354.183 203.9H404.549M354.183 254.266V304.632M354.183 254.266H404.549M354.183 304.632V354.998M354.183 304.632H404.549M354.183 354.998V405.364M354.183 354.998H404.549M354.183 405.364V455.73M354.183 405.364H404.549M354.183 455.73H404.549M404.549 103.168V153.534M404.549 103.168H454.915M404.549 153.534V203.9M404.549 153.534H454.915M404.549 203.9V254.266M404.549 203.9H454.915M404.549 254.266V304.632M404.549 254.266H454.915M404.549 304.632V354.998M404.549 304.632H454.915M404.549 354.998V405.364M404.549 354.998H454.915M404.549 405.364V455.73M404.549 405.364H454.915M404.549 455.73H454.915M454.915 103.168V153.534M454.915 103.168H505.281M454.915 153.534V203.9M454.915 153.534H505.281M454.915 203.9V254.266M454.915 203.9H505.281M454.915 254.266V304.632M454.915 254.266H505.281M454.915 304.632V354.998M454.915 304.632H505.281M454.915 354.998V405.364M454.915 354.998H505.281M454.915 405.364V455.73M454.915 405.364H505.281M454.915 455.73H505.281M505.281 103.168V153.534M505.281 153.534V203.9M505.281 203.9V254.266M505.281 254.266V304.632M505.281 304.632V354.998M505.281 354.998V405.364M505.281 405.364V455.73"
            stroke="url(#paint0_radial_801_1238)"
            strokeOpacity="0.68"
            strokeWidth="2.95679"
          />
          <defs>
            <radialGradient
              id="paint0_radial_801_1238"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(329 229.083) rotate(90) scale(226.647 327.379)"
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
