import React from "react";
import openai from "../public/openai.svg";
import google from "../public/google.svg";
import facebook from "../public/facebook.svg";
import tesla from "../public/tesla.svg";
import amazon from "../public/amazon.svg";

const SectionTwo = () => {
  const sources = [
    { src: openai, height: "10px", width: "10px" },
    { src: google },
    { src: facebook },
    { src: amazon },
  ];

  return (
    <>
      <section className="bg-[#6D28D9] px-20 py-8 rounded-b-[8rem] h-[12rem] flex items-center justify-center mt-12 mb-12">
        <div className="flex items-center justify-center flex-row l:gap-24 md:gap-14 gap-6">
          {sources.map((source) => (
            <img src={source.src} className="lg:h-8 h-4" />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
