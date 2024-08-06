import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import WebIcon from "@mui/icons-material/Web";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeIcon from "@mui/icons-material/Code";

const SectionThree = () => {
  const features = [
    {
      name: "UX & UI",
      icon: (
        <ViewQuiltIcon
          style={{
            fontSize: "3rem",
            margin: "-3",
            padding: "-3",
          }}
        />
      ),
      text: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      name: "Web & Mobile App",
      icon: (
        <WebIcon
          style={{
            fontSize: "3rem",
            margin: "-3",
            padding: "-3",
          }}
        />
      ),
      text: "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      name: "Design & Creative",
      icon: (
        <AutoAwesomeIcon
          style={{
            fontSize: "3rem",
            margin: "-3",
            padding: "-3",
          }}
        />
      ),
      text: "Crafting visually stunning designs that connect with your audience.",
    },
    {
      name: "Development",
      icon: (
        <CodeIcon
          style={{
            fontSize: "3rem",
            margin: "-3",
            padding: "-3",
          }}
        />
      ),
      text: "Bringing your vision to life with the latest technology and design trends.",
    },
  ];

  return (
    <section className="bg-[#030712] rounded-t-[12rem]">
      <div className="bg-[#F9FAFB] lg:px-20 md:px-20 px-10 py-8 rounded-t-[8rem] rounded-b-[8rem]">
        <div className="flex flex-col justify-between items-center mb-24 mt-24 gap-12">
          <h3 className="text-[30px] font-medium max-w-[32rem] text-center tracking-tight leading-[2.5rem]">
            Collaborate with brands and agencies to create impactful results.
          </h3>
          <div className="flex flex-row items-center w-full mt-12">
            <div className="h-[1px] bg-black lg:w-[50%] md:w-[50%] w-[30%]" />
            <button className="flex items-center justify-center rotate-[-6deg] hover:rotate-0 gap-1 py-2 px-3 bg-[#6D28D9] w-[10rem] hover:scale-[110%] hover:bg-white text-white hover:text-[#232323] duration-500 ease-in-out rounded-full border border-1 border-transparent hover:border-black">
              Learn More
              <OpenInNewIcon style={{ height: "20px" }} />
            </button>
            <div className="h-[1px] bg-black lg:w-[50%] md:w-[50%] w-[30%]" />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mt-12 items-center">
            {features.map((feature) => (
              <div className="flex flex-col gap-2">
                <span className="text-[#6D28D9] lg:text-left md:text-left text-center">
                  {feature.icon}
                </span>
                <p className="text-xl font-medium lg:text-left md:text-left text-center">
                  {feature.name}
                </p>
                <p className="text-lg w-[16rem] lg:text-left md:text-left text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
