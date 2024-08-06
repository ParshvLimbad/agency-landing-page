import React from "react";
import openai from "/openai.svg";
import google from "/google.svg";
import facebook from "/facebook.svg";
import amazon from "/amazon.svg";

const SectionTwo = () => {
  const sources = [
    { src: openai, height: "10px", width: "10px" },
    { src: google },
    { src: facebook },
    { src: amazon },
  ];

  return (
    <>
      <section className="bg-[#6D28D9] lg:px-20 md:px-20 px-10 py-8 rounded-b-[8rem] h-[12rem] flex items-center justify-center mt-12 mb-12">
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
