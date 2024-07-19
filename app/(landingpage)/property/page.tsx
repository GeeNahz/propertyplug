import React from 'react'
import Header from "@/components/common/header";
import { Features } from "@/components/common/data";
import FeatureCard from '@/components/Landing_Page/Feature_Project/FeatureCard';

const Page = () => {
  return (
    <section className="px-7 md:px-20 mt-28 mb-24 md:mb-52">
      <div className="px-0 md:px-32 py-8">
        <Header
          title="Customers Preference"
          desc="Listings Based off of what our Customers like or fancy"
        />
      </div>

      <div className="mt-2 md:mt-5 flex flex-col md:flex-row justify-between items-center w-full gap-5 md:gap-10">
        {Features.map((v, i) => {
          return (
            <div
              className="bg-[#FAFAFF] rounded-[32px] p-3 md:p-6 flex flex-col gap-4 w-full md:w-4/12"
              key={i}
            >
              <FeatureCard feature={{ ...v, alignJustify: true }} />
            </div>
          );
        })}
      </div>
    </section >
  )
}

export default Page
