import { TBlogPost } from "@/components/common/type";
import { Tiles } from "@/components/Dashboard";
import { BlogsHeader } from "@/components/Dashboard/blog/header";
import React, { Suspense } from "react";
import Loading from "../loading";
import { getBlogs } from "@/lib/actions";

export default async function published() {
  const blogs = await getBlogs();
  const published = blogs.result.filter((val:any) => val.publish) 
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <div className="header">
          <BlogsHeader publish="publish" />
        </div>

        <div className="main">
          <Tiles posts={published as TBlogPost[]} />
        </div>
      </div>
    </Suspense>
  );
}
