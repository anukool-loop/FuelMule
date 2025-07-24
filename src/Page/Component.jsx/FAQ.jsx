import React, { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What services does Fuel Mule offer?",
      answer:
        "Fuel Mule offers smart fuel monitoring, automated refill scheduling, real-time consumption tracking, and secure payment solutions—all in one platform.",
    },
    {
      question: "How do I connect my tank to Milo?",
      answer:
        "Fuel Mule offers smart fuel monitoring, automated refill scheduling, real-time consumption tracking, and secure payment solutions—all in one platform.",
    },
    {
      question: "How soon will I get a refill after requesting?",
      answer:
        "Fuel Mule offers smart fuel monitoring, automated refill scheduling, real-time consumption tracking, and secure payment solutions—all in one platform.",
    },
    {
      question: "Is Fuel Mule available 24/7?",
      answer:
        "Fuel Mule offers smart fuel monitoring, automated refill scheduling, real-time consumption tracking, and secure payment solutions—all in one platform.",
    },
    {
      question: "How much does the service cost?",
      answer:
        "Fuel Mule offers smart fuel monitoring, automated refill scheduling, real-time consumption tracking, and secure payment solutions—all in one platform.",
    },
  ];

  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="sm:text-3xl text-[20px] font-bold text-gray-900 sm:mb-8">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <span className="sm:text-lg text-[20px] font-[400] sm:font-medium text-gray-900">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-black transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && item.answer && (
                <div className="mt-3 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
