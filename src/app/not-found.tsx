// TODO: Add a not found page
// not responsive yet
import { NextPage } from 'next';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: '404'
};
const NotFound: NextPage = () => (
  <>
  <main className="relative w-screen bg-black ">
  <div className="flex h-screen">
  <div className="m-auto">
  <div className="relative z-[100]">
  <svg width="542" height="374" viewBox="0 0 542 374" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_1800_4376)">
      <rect x="151.152" y="64.9204" width="239.697" height="244.159" rx="12" fill="url(#paint0_linear_1800_4376)" />
      <rect x="151.652" y="65.4204" width="238.697" height="243.159" rx="11.5" stroke="url(#paint1_linear_1800_4376)" stroke-opacity="0.3" />
    </g>
    <g filter="url(#filter1_d_1800_4376)">
      <rect x="99.2441" y="98.479" width="343.512" height="177.041" rx="14" fill="#B10F00" shape-rendering="crispEdges" />
      <rect x="99.7441" y="98.979" width="342.512" height="176.041" rx="13.5" stroke="url(#paint2_linear_1800_4376)" stroke-opacity="0.3" shape-rendering="crispEdges" />
      <path d="M221.888 233.946V216.502H189.254V210.622L224.044 165.542H228.552V210.426H237.176V216.502H228.552V233.946H221.888ZM196.31 210.426H222.574V176.028L196.31 210.426ZM295.085 192.786C295.085 197.098 294.464 201.083 293.223 204.742C291.981 208.335 290.25 211.471 288.029 214.15C285.873 216.763 283.292 218.821 280.287 220.324C277.281 221.761 274.015 222.48 270.487 222.48C266.959 222.48 263.692 221.761 260.687 220.324C257.681 218.821 255.068 216.763 252.847 214.15C250.691 211.471 248.992 208.335 247.751 204.742C246.509 201.083 245.889 197.098 245.889 192.786C245.889 188.474 246.509 184.521 247.751 180.928C248.992 177.269 250.691 174.133 252.847 171.52C255.068 168.841 257.681 166.75 260.687 165.248C263.692 163.745 266.959 162.994 270.487 162.994C274.015 162.994 277.281 163.745 280.287 165.248C283.292 166.75 285.873 168.841 288.029 171.52C290.25 174.133 291.981 177.269 293.223 180.928C294.464 184.521 295.085 188.474 295.085 192.786ZM288.323 192.786C288.323 189.258 287.865 186.056 286.951 183.182C286.101 180.307 284.893 177.857 283.325 175.832C281.757 173.741 279.862 172.14 277.641 171.03C275.485 169.854 273.1 169.266 270.487 169.266C267.808 169.266 265.358 169.854 263.137 171.03C260.981 172.14 259.119 173.741 257.551 175.832C255.983 177.857 254.741 180.307 253.827 183.182C252.977 186.056 252.553 189.258 252.553 192.786C252.553 196.314 252.977 199.515 253.827 202.39C254.741 205.264 255.983 207.747 257.551 209.838C259.119 211.863 260.981 213.431 263.137 214.542C265.358 215.652 267.808 216.208 270.487 216.208C273.1 216.208 275.485 215.652 277.641 214.542C279.862 213.431 281.757 211.863 283.325 209.838C284.893 207.747 286.101 205.264 286.951 202.39C287.865 199.515 288.323 196.314 288.323 192.786ZM335.392 233.946V216.502H302.758V210.622L337.548 165.542H342.056V210.426H350.68V216.502H342.056V233.946H335.392ZM309.814 210.426H336.078V176.028L309.814 210.426Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_b_1800_4376" x="121.152" y="34.9204" width="299.697" height="304.159" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1800_4376" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1800_4376" result="shape" />
      </filter>
      <filter id="filter1_d_1800_4376" x="0.844139" y="0.0790024" width="540.312" height="373.841" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1800_4376" />
        <feOffset />
        <feGaussianBlur stdDeviation="44.7" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1800_4376" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1800_4376" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_1800_4376" x1="217.497" y1="68.6039" x2="400.71" y2="227.534" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171717" stop-opacity="0.4" />
        <stop offset="1" stop-color="#171717" stop-opacity="0.1" />
      </linearGradient>
      <linearGradient id="paint1_linear_1800_4376" x1="142.648" y1="44.0034" x2="323.086" y2="372.322" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint2_linear_1800_4376" x1="87.0575" y1="83.3119" x2="167.065" y2="371.036" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
  </div>
  <div className="text-center">
    <div className="text-white mb-7 text-[28px] leading-tight drop-shadow-glow-white md:text-[48px] lg:mb-[22px]">
      <h1>Halaman Tidak Ditemukan</h1>
    </div>
    <div className="text-neutral-500">
    <h1>Kami memohon maaf atas ketidaknyamanan ini,</h1>
    <h1>silakan kembali ke beranda.</h1>
    </div>
  </div>
  </div>
  </div>
  </main>
  </>
  );

export default NotFound;
