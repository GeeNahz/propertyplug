import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Button } from "@/components/common/button";

const HeroSection = () => {
  return (
    <section className="h-screen bg_hero flex items-center">
      <div className="h-full bg-transparent w-full flex flex-col justify-center items-center py-3 backdrop-blur-sm">
        <small className="text-zinc-400 text-xs">
          Excellence from Abuja Nigeria
        </small>
        <h1 className="text-white text-center font-bold text-4xl my-2">
          The <span className="text-[#FF4A55]">Ultimate</span> Real Estate{" "}
          <br /> Experience
        </h1>
        <small className="text-zinc-400 text-base font-medium text-center mt-2">
          We prioritize our clients' needs and are committed to <br />{" "}
          delivering tangible results.
        </small>
        <div className="flex py-1 px-2 rounded-[32px] border-[3px] border-white border-solid mt-6 gap-8">
          <small className="capitalize flex items-center gap-3 text-zinc-400">
            what are you looking for?{" "}
            <MdArrowDropDown size={20} className={`rotate-0 cursor-pointer`} />
          </small>
          <Button title="book consultancy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
