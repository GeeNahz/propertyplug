import { TBlogPost } from "@/components/common/type";
import { Tiles } from "@/components/Dashboard";
import { BlogsHeader } from "@/components/Dashboard/blog/header";
import { getBlogs } from "@/lib/actions";


export default async function Page() {
  const blogs = await getBlogs();

  return (
      <div className="flex flex-col">
        <div className="header">
          <BlogsHeader publish='all'/>
        </div>

        <div className="main">
          <Tiles posts={blogs.result as TBlogPost[]} />
        </div>
      </div>
  );
}
