import React from "react";
import profile from "/profile.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SectionOne = () => {
  return (
    <section className="bg-[#030712] lg:px-20 md:px-20 px-10 py-8 rounded-b-[8rem]">
      <div className="flex flex-row justify-between items-center mb-24">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-[#6D28D9] lg:text-[40px] text-[35px]  font-medium">
            Zengo
          </h1>
          <ul className="flex flex-row gap-4 text-[#F9FAFB] text-right">
            <li className="cursor-pointer">LinkedIn</li>
            <span className="lg:flex md:flex hidden">/</span>
            <li className="cursor-pointer">Github</li>
            <span className="lg:flex md:flex hidden">/</span>
            <li className="cursor-pointer">Reddit</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 mb-20">
        <img
          src={profile}
          className="h-40 w-40 rounded-full border border-2 border-[#6D28D9]"
        />
        <h3 className="text-[40px] text-[#F9FAFB] font-medium max-w-[25rem] text-center tracking-tight leading-[3rem]">
          Building digital products, brands, and experience.
        </h3>
        <button className="flex items-center gap-1 py-2 px-3 bg-[#6D28D9] hover:bg-white text-white hover:text-[#6D28D9] duration-300 ease-in-out rounded-full">
          Learn More
          <OpenInNewIcon style={{ height: "20px" }} />
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
