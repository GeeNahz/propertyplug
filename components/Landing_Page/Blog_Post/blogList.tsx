import { Button } from "@/components/common/button";
import { TBlogPost } from "@/components/common/type";
import { DateConverter } from "@/components/Dashboard";
import { getBlogsWithQueryParams } from "@/lib/actions";
import { BASE_URL } from "@/lib/api_url";
import Image from "next/image";
import React from "react";

export default async function BlogList() {
  const url = `${BASE_URL}/blogs?publish=${true}`

  const response = await getBlogsWithQueryParams(url);
  const blogs = response.result as TBlogPost[]

  return (
    <div className="w-full grid_wrapper mt-4">
      {blogs.slice(0, 4).map((v: TBlogPost, i: number) => {
        return (
          <div
            key={i}
            className={`relative rounded-3xl h-full w-full border-white border-solid border-[2px] overflow-x-hidden`}
          >
            <Image
              src={v.thumbnail || v.backgroundImage as string}
              alt="img"
              fill
              className="hover_img object-cover"
            />
            <div className="absolute top-0 w-full h-full left-0 transition translate-x-0 duration-700 z-0 linear_gradient flex flex-col justify-between p-3">
              <div className="">
                <small className="text-slate-50 text-xs font-normal">
                  <DateConverter date={v.createdAt} />
                </small>
                <h4 className="text-white text-xl capitalize font-semibold">
                  {v.title.length > 30 ? `${v.title.slice(0, 30).trim()}...` : v.title}
                </h4>
              </div>
              <Button title="read" url={`/blog/${v.slug}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
