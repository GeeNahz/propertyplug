import { TBlogPost } from "@/components/common/type";
import { Tiles } from "@/components/Dashboard";
import { BlogsHeader } from "@/components/Dashboard/blog/header";
import { getBlogs } from "@/lib/actions";
import { Suspense } from "react";

export default async function Page() {
  const blogs = await getBlogs()

  return (
    <div className="flex flex-col">
      <div className="header">
        <BlogsHeader />
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <div className="main">
          <Tiles posts={blogs.result as TBlogPost[]} />
        </div>
      </Suspense>
    </div>
  )
}
