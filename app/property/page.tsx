import React from 'react'
import Header from "@/components/common/header";
import { Features } from "@/components/common/data";
import FeatureCard from '@/components/Landing_Page/Feature_Project/FeatureCard';

const Page = () => {
  return (
    <section className="px-20 mt-28 mb-52">
      <div className="px-32 py-8">
        <Header
          title="Customers Preference"
          desc="Listings Based off of what our Customers like or fancy"
        />
      </div>

      <div className="mt-5 flex justify-between items-center w-full gap-10">
        {Features.map((v, i) => {
          return (
            <div
              className="bg-[#FAFAFF] rounded-[32px] p-6 flex flex-col gap-4 w-4/12"
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
