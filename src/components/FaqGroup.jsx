import React from "react";
import Faq from "./Faq";
import useFaqStore from "../store/useFaqStore";

const FaqGroup = () => {
  const { faqs } = useFaqStore();

  return (
    <div className="flex flex-col h-screen items-center mt-10">
      <h1 className="text-3xl font-serif mb-10">Frequently Ask Questions</h1>
      <div className="">
        {faqs.map((el) => (
          <Faq key={el.id} faq={el} />
        ))}
      </div>
    </div>
  );
};

export default FaqGroup;
