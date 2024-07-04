import Header from "@/components/common/header";
import React from "react";
import { Features } from "@/components/common/data";
import FeatureCard from "./FeatureCard";

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
        {Features.map((v, i) => {
          return (
            <div
              className="bg-[#FAFAFF] rounded-[32px]  p-2 flex flex-col gap-4 w-4/12"
              key={i}
            >
              <FeatureCard feature={v} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureProject;
