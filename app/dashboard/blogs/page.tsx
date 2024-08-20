import { TBlogPost } from "@/components/common/type";
import { Tiles } from "@/components/Dashboard";
import { BlogsHeader } from "@/components/Dashboard/blog/header";
import { getBlogsWithQueryParams } from "@/lib/actions";
import { BASE_URL } from "@/lib/api_url";


export default async function Page({
  searchParams
}: {
  searchParams: { search?: string }
}) {
  const url = `${BASE_URL}/blogs${searchParams.search ? `?search=${searchParams.search}` : ''}`
  const blogs = await getBlogsWithQueryParams(url)
  
  console.log('SAERCH URL: ', url)

  return (
    <div className="flex flex-col">
      <div className="header">
        <BlogsHeader publish='all' />
      </div>

      <div className="main">
        <Tiles posts={blogs.result as TBlogPost[]} />
      </div>
    </div>
  );
}
