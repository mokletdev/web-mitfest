"use client";
import { useState } from "react";

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, ligula ac convallis vehicula, purus lectus volutpat lectus, vel ultrices urna mi vitae lorem.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, ligula ac convallis vehicula, purus lectus volutpat lectus, vel ultrices urna mi vitae lorem.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, ligula ac convallis vehicula, purus lectus volutpat lectus, vel ultrices urna mi vitae lorem.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, ligula ac convallis vehicula, purus lectus volutpat lectus, vel ultrices urna mi vitae lorem.",
    },
  ];

  const renderFaqs = () => {
    const result = [];

    for (let i = 0; i < faqs.length; i += 2) {
      result.push(
        <div
          className="flex w-full flex-col justify-between xl:flex-row xl:gap-8"
          key={"div_" + i}
        >
          <div className="mb-8 w-full xl:w-1/2">
            <div
              key={i}
              className={`w-full rounded-[20px] border border-gray-600 bg-gray-700 p-[26px]`}
            >
              <button
                className="mb-3 flex w-full items-center gap-8"
                onClick={() => setActiveQuestion(i)}
              >
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 21.5479H31.5"
                    stroke="white"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className={`overflow-hidden ${
                      activeQuestion === i ? "opacity-0" : "opacity-100"
                    }`}
                    d="M21 32.0479V11.0479"
                    stroke="white"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h6 className="w-[calc(100%-74px)] text-left text-lg text-white md:text-xl">
                  {faqs[i].question}
                </h6>
              </button>
              <p
                className={`overflow-y-hidden pl-[74px] text-base text-gray-500 transition-all duration-300 ${
                  activeQuestion === i ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {faqs[i].answer}
              </p>
            </div>
          </div>
          <div className="mb-8 w-full xl:w-1/2">
            <div
              key={i + 1}
              className={`w-full rounded-[20px] border border-gray-600 bg-gray-700 p-[26px]`}
            >
              <button
                className="mb-3 flex w-full items-center gap-8"
                onClick={() => setActiveQuestion(i + 1)}
              >
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 21.5479H31.5"
                    stroke="white"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className={`overflow-hidden ${
                      activeQuestion === i + 1 ? "opacity-0" : "opacity-100"
                    }`}
                    d="M21 32.0479V11.0479"
                    stroke="white"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h6 className="w-[calc(100%-74px)] text-left text-lg text-white sm:text-xl">
                  {faqs[i + 1].question}
                </h6>
              </button>
              <p
                className={`overflow-y-hidden pl-[74px] text-base text-gray-500 transition-all duration-300 ${
                  activeQuestion === i + 1 ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {faqs[i + 1].answer}
              </p>
            </div>
          </div>
        </div>,
      );
    }

    return result;
  };

  return (
    <section
      className="relative mx-auto w-full max-w-[1148px] px-5 py-[82px] text-white"
      id="faq"
    >
      <h3 className="mb-[52px] text-[32px] leading-10 drop-shadow-glow-white sm:text-[48px] sm:leading-[68px]">
        Pertanyaan yang Sering Diajukan
      </h3>
      <div className="flex w-full flex-col justify-between">{renderFaqs()}</div>
    </section>
  );
}
