import React, { useState } from "react";
import useFaqStore from "../store/useFaqStore";

const Faq = ({ faq: { id, question, answer, isOpen } }) => {
  const { toggleFaq } = useFaqStore();

  const handleToggle = () => {
    toggleFaq(id);
  };

  return (
    <div className="mb-1 w-[600px] ">
      <div
        onClick={handleToggle}
        className="shadow-lg p-5 border rounded-lg  border-zinc-300 flex justify-between"
      >
        <p className=" font-serif">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-4  `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <div
        className={`mt-2 p-2 text-sm duration-500 rounded-sm text-gray-600 bg-gray-100 shadow shadow-gray-100 ${
          isOpen === false && "hidden"
        }
         `}
      >
        {answer}
      </div>
    </div>
  );
};

export default Faq;
