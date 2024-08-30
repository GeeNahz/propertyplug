import { TBlogPost } from "@/components/common/type";
import { Tiles } from "@/components/Dashboard";
import { BlogsHeader } from "@/components/Dashboard/blog/header";
import React, { Suspense } from "react";
import Loading from "../loading";
import { getBlogsWithQueryParams } from "@/lib/actions";
import { BASE_URL } from "@/lib/api_url";

export default async function published() {
  const url = `${BASE_URL}/blogs?publish=${true}`
  const blogs = await getBlogsWithQueryParams(url);
  const published = blogs.result as TBlogPost[]
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <div className="header">
          <BlogsHeader publish="publish" />
        </div>

        <div className="main">
          <Tiles posts={published} />
        </div>
      </div>
    </Suspense>
  );
}
