import Header from "@/components/common/header";
import React from "react";
import imgs from "./images/pp2.jpg";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { blogGallery } from "@/components/common/data";
import Link from "next/link";
import { dataUrl } from "@/lib/utils";

const Blog = async () => {
  // tall and big for grid structure

  return (
    <section className="container max-w-screen-xl mx-auto">
      <Header
        title="Property Plug Blog Posts"
        desc="Explore explicit Content Just for you"
      />

      <div className="w-full grid_wrapper mt-4">
        {blogGallery.slice(0, 4).map((v, i) => {
          return (
            <div
              key={i}
              className={`relative rounded-3xl h-full w-full border-white border-solid border-[2px] overflow-x-hidden`}
            >
              <Image placeholder="blur"
               blurDataURL={dataUrl}
                src={v.img}
                alt="img"
                fill
                className="hover_img object-cover"
              />
              <div className="absolute top-0 w-full h-full left-0 transition translate-x-0 duration-700 z-0 linear_gradient flex flex-col justify-between p-3">
                <div className="">
                  <small className="text-slate-50 text-xs font-normal">
                    {v.time}
                  </small>
                  <h4 className="text-white text-xl capitalize font-semibold">
                    {v.title}
                  </h4>
                </div>
                <Button title="read more" url={`/blog/${v.title}`} />
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/blog" className="flex justify-center w-full mt-6">
        <button className="py-2 px-3 md:p-3 rounded-[32px] font-medium text-xs capitalize w-max bg-[#EF4444] text-white">
          view more
        </button>
      </Link>
    </section>
  );
};

export default Blog;
