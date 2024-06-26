import Header from "@/components/common/header";
import Image from "next/image";
import React from "react";
import { GrLocation } from "react-icons/gr";
import imgs from "./images/ppt1.jpg";
import { IoIosBed } from "react-icons/io";
import { FaNairaSign } from "react-icons/fa6";
import { FaPersonSwimming } from "react-icons/fa6";
import { Features } from "@/components/common/data";

const FeatureProject = () => {
  return (
    <section className="my-8">
      <div>
        <Header
          title="Featured Property"
          desc="Explore explicit Content Just for you"
        />
      </div>

      <div className="mt-5 flex justify-between items-center w-full gap-10">
        {Features.map((v) => {
          return (
            <div
              className="bg-[#FAFAFF] rounded-[32px]  p-2 flex flex-col gap-4 w-4/12"
              key={v.bed}
            >
              <Image src={imgs} alt="" className="rounded-[32px]" />
              <div className="flex flex-col gap-4 ">
                <div className="flex items-center justify-between">
                  <small className="flex text-[11px] gap-1 font-medium items-center">
                    <IoIosBed /> {v.bed}{" "}
                    <span className="text-red-500">Beds</span>
                  </small>
                  {v.jacuzzi && (
                    <small className="flex text-[11px] gap-1 font-medium items-center">
                      <FaPersonSwimming /> Jacuzzi
                    </small>
                  )}
                  {v.pool && (
                    <small className="flex text-[11px] gap-1 font-medium items-center">
                      <FaPersonSwimming /> Swimming Pool
                    </small>
                  )}
                </div>
                <div className="flex justify-between px-2">
                  <div className="flex justify-between items-center gap-2">
                    <GrLocation size={20} />
                    <h4 className="flex flex-col font-semibold text-xs capitalize">
                      {v.loc}{" "}
                      <span className="text-[10px] font-light">
                        {v.flat} Bedroom Flat
                      </span>
                    </h4>
                  </div>

                  <h4 className="flex flex-col font-semibold text-xs ">
                    <span className="flex items-center">
                      <FaNairaSign size={10} /> {v.price}
                    </span>
                    <span className="font-light text-[10px]">Price</span>
                  </h4>
                </div>
                <button className="py-2 px-4 rounded-xl text-white text-xs bg-red-500 hover:bg-red-500/95 w-max mx-auto">
                  view
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureProject;
