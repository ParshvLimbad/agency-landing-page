import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const SectionFour = () => {
  return (
    <section className="px-20 py-8 bg-[#030712]">
      <div className="flex flex-col w-full items-center justify-center gap-8 mb-24 mt-24">
        <div className="flex items-center justify-center p-3 h-32 w-32 bg-[#6D28D9] rounded-full">
          <SentimentVerySatisfiedIcon
            style={{
              fontSize: "7rem",
              margin: "-3",
              padding: "-3",
              color: "white",
            }}
          />
        </div>
        <h3 className="lg:text-[50px] md:text-[50px] text-[35px] text-[#F9FAFB] font-medium max-w-[25rem] text-center tracking-tight leading-[3rem]">
          Tell me about your next project.
        </h3>
        <div className="flex flex-row gap-3">
          <button className="flex items-center gap-1 py-2 px-3 hover:bg-white bg-[#6D28D9] text-white hover:text-[#6D28D9] duration-300 ease-in-out rounded-full border border-1 border-transparent hover:border-white">
            <EmailIcon />
            Email me
          </button>
          <button className="flex items-center gap-1 py-2 px-3 hover:bg-white bg-transparent text-[#6D28D9] duration-300 ease-in-out rounded-full border border-1 hover:border-transparent border-[#6D28D9]">
            WhatsApp
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-[#1F2937]"></div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mt-6">
        <ul className="flex flex-row gap-4 text-[#F9FAFB]">
          <li className="cursor-pointer">LinkedIn</li>
          <span>/</span>
          <li className="cursor-pointer">Github</li>
          <span>/</span>
          <li className="cursor-pointer">Reddit</li>
        </ul>
        <p className="text-white">2024 Parshv Limbad All rights reserved</p>
      </div>
    </section>
  );
};

export default SectionFour;
