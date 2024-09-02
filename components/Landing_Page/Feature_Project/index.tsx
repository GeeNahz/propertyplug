import Header from "@/components/common/header";
import React from "react";
import { ListOfProperties } from "@/components/common/data";
import FeatureCard from "./FeatureCard";
import Link from "next/link";

const FeatureProject = () => {
  return (
    <section className="container max-w-screen-xl mx-auto mb-8 mt-20">
      <div>
        <Header
          title="Featured Property"
          desc="Explore explicit Content Just for you"
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row justify-between items-center w-full gap-5 md:gap-10">
        {ListOfProperties.slice(0, 3).map((v, i) => {
          return (
            <div
              className="bg-[#FAFAFF] rounded-[36px] p-2 flex flex-col gap-4 w-full md:w-4/12"
              key={i}
            >
              <FeatureCard feature={v} />
            </div>
          );
        })}
      </div>
      <Link href="/property" className="flex justify-center w-full mt-6">
        <button className="py-2 px-3 md:p-3 rounded-[32px] font-medium text-xs capitalize w-max bg-[#EF4444] text-white">
          view more
        </button>
      </Link>
    </section>
  );
};

export default FeatureProject;
