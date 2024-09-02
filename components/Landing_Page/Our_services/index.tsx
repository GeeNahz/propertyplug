import React from "react";
import imgs from './images/ppt1.jpg'
import Image from "next/image";
import { dataUrl } from "@/lib/utils";

const OurService = () => {
  return (
    <section className="container max-w-screen-xl mx-auto w-full mt-20">
      <div className="w-full flex flex-col items-center gap-4">
        <h3 className="text-xl text-black font-semibold">Our Services</h3>
        <p className="text-zinc-400 text-xs w-full md:w-6/12 text-center">
          Property Plug is an urban Contemporary real estate company dedicated
          to the delivery of premium services within the real estate industry.
        </p>
      </div>

      <div className="grid grid-flow-dense auto-rows-[200px] gap-6 mt-10"
      style={{
        gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr)'
      }}>
        <div className="rounded-[32px] p-3 bg-[#0B2831] flex flex-col gap-2 col-span-2 row-span-2 h-full">
          <div className="h-3/6 ">
            <Image placeholder="blur"  blurDataURL={dataUrl} src="https://ik.imagekit.io/nwqo5veum/propertyplug/pp-logo_BdROmV7NQz?updatedAt=1691586443760" height={500} width={500} alt="services image"  className="rounded-[32px] w-full object-cover object-bottom size-full"/> 
          </div>
          <div className="flex flex-col gap-2 pb-12 text-white justify-center items-center mt-12 ">
            <h6 className="text-sm font-medium">Project Development</h6>
            <small className="text-center px-2 text-[10px] font-extralight w-full">Transforming visions into realities, our project development expertise ensures innovative solutions and seamless execution from concept to completion.</small>
          </div>
        </div>

        <div className="rounded-[32px] p-3 bg-[#0B2831] flex flex-col gap-4 col-span-2">
          <div className=" relative h-3/6">
            <Image placeholder="blur"  blurDataURL={dataUrl} src="https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/services/advisory_wsbhGhPxz.jpeg?updatedAt=1690689320098" height={500} width={500} alt="services image" className="rounded-[32px] object-cover w-full h-full"/> 
          </div>
          <div className="flex flex-col gap-2 items-center text-white">
            <h6 className="text-sm font-medium">Investment Advisory</h6>
            <small className="text-center px-2 text-[10px] font-extralight">Guiding you towards informed decisions and strategic investment opportunities for a prosperous future.</small>
          </div>
        </div>

        <div className="rounded-[32px] p-3 bg-[#0B2831] flex gap-3 col-span-2">
          <div className="w-5/12">
            <Image placeholder="blur"  blurDataURL={dataUrl} src="https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/services/brokerage_aIzZ_fZ8o.jpeg?updatedAt=1690689320589" height={500} width={500} alt="services image"  className="rounded-[32px] w-full object-cover h-full"/> 
          </div>
          <div className="flex flex-col gap-2 items-center text-white w-6/12 justify-center h-full">
            <h6 className="text-sm font-medium">Real Estate Brokeage</h6>
            <small className="text-center px-2 text-[10px] font-extralight">Unlock your real estate potential with our expert brokerage services, tailored to your unique needs and aspirations.</small>
          </div>
        </div>

        <div className="rounded-[32px] p-3 bg-[#0B2831] flex flex-col gap-5 row-span-2 col-span-1">
          <div className="h-full">
            <Image placeholder="blur"  blurDataURL={dataUrl} src="https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/services/service2_aoakqvG9p.jpeg?updatedAt=1690689320621" height={500} width={500} alt="services image"  className="rounded-[32px] w-full h-full object-cover"/> 
          </div>
          <div className="flex flex-col gap-2 items-center pb-12 text-white">
            <h6 className="text-sm font-medium">Facility Management</h6>
            <small className="text-center px-2 text-[10px] font-extralight">Elevate your operational efficiency and maximize asset performance with our comprehensive facility management solutions.</small>
          </div>
        </div>
      </div>

    </section>
  );
};

export default OurService;
