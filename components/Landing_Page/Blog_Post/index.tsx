import Header from "@/components/common/header";
import React from "react";
import imgs from "./images/pp2.jpg";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { blogGallery } from "@/components/common/data";

const Blog = () => {
  // tall and big for grid structure

  return (
    <section className="">
      <Header
        title="Property Plug Blog Posts"
        desc="Explore explicit Content Just for you"
      />

      <div className="w-full grid_wrapper mt-4">
        {blogGallery.map((v) => {
          return (
            <div
            key={v.img}
              className={`${v.grid} relative rounded-3xl h-full w-full border-white border-solid border-[2px] overflow-x-hidden`}
            >
              <Image
                src={v.img}
                alt="img"
                fill
                className="hover_img object-cover"
              />
              <div className="absolute top-0 w-full h-full left-0 transition duration-700 z-0 hover:translate-x-0 -translate-x-[100%]  linear_gradient flex flex-col justify-between p-3">
                <div className="">
                  <small className="text-slate-50 text-xs font-normal">
                    {v.time}
                  </small>
                  <h4 className="text-white text-xl capitalize font-semibold">
                    {v.title}
                  </h4>
                </div>
                <Button title="read more" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
