import Link from "next/link";

export default function Kategori() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-[1148px] flex-col items-start justify-between gap-[42px] px-5 py-[82px] text-white sm:gap-[52px] xl:flex-row xl:gap-[76px]"
      id="kategori"
    >
      <div className="block w-full max-w-full xl:max-w-[35%]">
        <h3 className="mb-7 text-[32px] leading-[68px] drop-shadow-glow-white sm:text-[48px]">
          Berbagai Kategori Menarik
        </h3>
        <p className="mb-[48px] text-sm text-gray-400 sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vestibulum, ligula ac convallis vehicula, purus lectus volutpat
          lectus, vel ultrices urna mi vitae lorem. Nam in laoreet eros, in
          finibus justo.
        </p>
        <Link
          href={"/guidebook"}
          className="inline-block rounded-full border border-primary-400 bg-primary-500 px-7 py-2 text-white transition duration-300 hover:bg-primary-600"
        >
          Unduh Buku Panduan
        </Link>
      </div>
      <div className="flex w-full max-w-full flex-wrap items-center justify-between lg:max-w-[65%]">
        <div
          className="mb-[26px] flex w-full items-start gap-3 rounded-[20px] border border-solid border-transparent bg-gray-700 px-[22px] py-6 lg:w-auto"
          style={{
            background:
              "linear-gradient(rgb(31 31 31), rgb(31 31 31)) padding-box, linear-gradient(to bottom right, rgba(93, 93, 93, 100), rgba(255, 255, 255, 0)) border-box",
          }}
        >
          <div className="rounded-xl bg-gray-600 p-[14px]">
            <svg
              className="!relative !h-[24px] !w-[24px]"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17.4976H6.21C2.84 17.4976 2 16.6576 2 13.2876V7.28764C2 3.91764 2.84 3.07764 6.21 3.07764H16.74C20.11 3.07764 20.95 3.91764 20.95 7.28764"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 22.018V17.498"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 13.498H10"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.73999 22.0181H9.99999"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 13.3477V19.0577C22 21.4277 21.41 22.0177 19.04 22.0177H15.49C13.12 22.0177 12.53 21.4277 12.53 19.0577V13.3477C12.53 10.9777 13.12 10.3877 15.49 10.3877H19.04C21.41 10.3877 22 10.9777 22 13.3477Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.2445 18.7979H17.2535"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="inline-block w-[200px]">
            <h6 className="mb-2 text-xl">Web Design</h6>
            <p className="text-gray-400">Individu atau berkelompok</p>
          </div>
        </div>
        <div
          className="mb-[26px] flex w-full items-start gap-3 rounded-[20px] border border-solid border-transparent bg-gray-700 px-[22px] py-6 lg:w-auto"
          style={{
            background:
              "linear-gradient(rgb(31 31 31), rgb(31 31 31)) padding-box, linear-gradient(to bottom right, rgba(93, 93, 93, 100), rgba(255, 255, 255, 0)) border-box",
          }}
        >
          <div className="rounded-xl bg-gray-600 p-[14px]">
            <svg
              className="!relative !h-[24px] !w-[24px]"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 16V6.5C19.5 5.4 18.6 4.5 17.5 4.5H12"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 2L11.5 4.5L14.5 7"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 22C21.1569 22 22.5 20.6569 22.5 19C22.5 17.3431 21.1569 16 19.5 16C17.8431 16 16.5 17.3431 16.5 19C16.5 20.6569 17.8431 22 19.5 22Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8V17.5C5.5 18.6 6.4 19.5 7.5 19.5H13"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 22L13.5 19.5L10.5 17"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8C7.15685 8 8.5 6.65685 8.5 5C8.5 3.34315 7.15685 2 5.5 2C3.84315 2 2.5 3.34315 2.5 5C2.5 6.65685 3.84315 8 5.5 8Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="inline-block w-[200px]">
            <h6 className="mb-2 text-xl">Business Plan</h6>
            <p className="text-gray-400">Individu atau berkelompok</p>
          </div>
        </div>
        <div
          className="mb-[26px] flex w-full items-start gap-3 rounded-[20px] border border-solid border-transparent bg-gray-700 px-[22px] py-6 lg:w-auto"
          style={{
            background:
              "linear-gradient(rgb(31 31 31), rgb(31 31 31)) padding-box, linear-gradient(to bottom right, rgba(93, 93, 93, 100), rgba(255, 255, 255, 0)) border-box",
          }}
        >
          <div className="rounded-xl bg-gray-600 p-[14px]">
            <svg
              className="!relative !h-[24px] !w-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.49 2.23006L5.49997 4.11006C4.34997 4.54006 3.40997 5.90006 3.40997 7.12006V14.5501C3.40997 15.7301 4.18997 17.2801 5.13997 17.9901L9.43997 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="round"
                strokeLinecap="round"
              />
              <path
                d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12.5V15.5"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="inline-block w-[200px]">
            <h6 className="mb-2 text-xl">Cyber Security</h6>
            <p className="text-gray-400">Individu atau berkelompok</p>
          </div>
        </div>
        <div
          className="mb-[26px] flex w-full items-start gap-3 rounded-[20px] border border-solid border-transparent bg-gray-700 px-[22px] py-6 lg:w-auto"
          style={{
            background:
              "linear-gradient(rgb(31 31 31), rgb(31 31 31)) padding-box, linear-gradient(to bottom right, rgba(93, 93, 93, 100), rgba(255, 255, 255, 0)) border-box",
          }}
        >
          <div className="rounded-xl bg-gray-600 p-[14px]">
            <svg
              className="!relative !h-[24px] !w-[24px]"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.03997 11.1201C1.35997 11.4501 1.35997 18.2601 6.03997 18.5901H7.96001"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.09003 11.1201C2.88003 2.19014 16.42 -1.37985 17.97 8.00015C22.3 8.55015 24.05 14.3201 20.77 17.1901C19.77 18.1001 18.48 18.6001 17.13 18.5901H17.04"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 16.5298C17.5 17.2698 17.34 17.9698 17.04 18.5898C16.96 18.7698 16.87 18.9398 16.77 19.0998C15.91 20.5498 14.32 21.5298 12.5 21.5298C10.68 21.5298 9.08998 20.5498 8.22998 19.0998C8.12998 18.9398 8.04002 18.7698 7.96002 18.5898C7.66002 17.9698 7.5 17.2698 7.5 16.5298C7.5 13.7698 9.74 11.5298 12.5 11.5298C15.26 11.5298 17.5 13.7698 17.5 16.5298Z"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.94 16.5298L11.93 17.5198L14.06 15.5498"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="inline-block w-[200px]">
            <h6 className="mb-2 text-xl">Cloud Computing</h6>
            <p className="text-gray-400">Individu</p>
          </div>
        </div>
        <div
          className="flex w-full items-start gap-3 rounded-[20px] border border-solid border-transparent bg-gray-700 px-[22px] py-6 lg:w-auto"
          style={{
            background:
              "linear-gradient(rgb(31 31 31), rgb(31 31 31)) padding-box, linear-gradient(to bottom right, rgba(93, 93, 93, 100), rgba(255, 255, 255, 0)) border-box",
          }}
        >
          <div className="rounded-xl bg-gray-600 p-[14px]">
            <svg
              className="!relative !h-[24px] !w-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3 15.2803L8 17.5803"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.03003 15.3101L10.33 17.61"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.49 15.3301H16.51"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.49 17.5V17.48"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="inline-block w-[200px]">
            <h6 className="mb-2 text-xl">Mobile Legends</h6>
            <p className="text-gray-400">Berkelompok</p>
          </div>
        </div>
      </div>
    </section>
  );
}
