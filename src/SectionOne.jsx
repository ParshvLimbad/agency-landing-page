import React from "react";
import profile from "../public/profile.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SectionOne = () => {
  return (
    <section className="bg-[#030712] px-20 py-8 rounded-b-[8rem]">
      <div className="flex flex-row justify-between items-center mb-24">
        <div className="lg:flex md:flex hidden flex-row gap-4 items-center">
          <p className="text-[#F9FAFB]">johndoe6969@gmail.com</p>
          <button className="py-1 px-3 bg-white hover:bg-[#232323] hover:text-white duration-300 ease-in-out rounded-full border border-1 border-[#232323]">
            Copy
          </button>
        </div>
        <ul className="flex flex-row gap-4 text-[#F9FAFB] w-full lg:justify-end md:justify-end justify-center">
          <li className="cursor-pointer">LinkedIn</li>
          <span>/</span>
          <li className="cursor-pointer">Github</li>
          <span>/</span>
          <li className="cursor-pointer">Reddit</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6 mb-20">
        <img
          src={profile}
          className="h-40 w-40 rounded-full border border-2 border-[#6D28D9]"
        />
        <h3 className="text-[40px] text-[#F9FAFB] font-medium max-w-[25rem] text-center tracking-tight leading-[3rem]">
          Building digital products, brands, and experience.
        </h3>
        <button className="flex items-center gap-1 py-2 px-3 bg-[#6D28D9] hover:bg-white text-white hover:text-[#232323] duration-300 ease-in-out rounded-full">
          Learn More
          <OpenInNewIcon style={{ height: "20px" }} />
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
