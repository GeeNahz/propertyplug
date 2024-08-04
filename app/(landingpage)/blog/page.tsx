import { BlogGalleries } from "@/components/common/data";
import { Header } from "@/components/Blog"
import BlogPostsGrid from "@/components/Blog/BlogPostsGrid";
import { getBlogs } from "@/lib/actions";
import axios from "axios";
import { BASE_URL } from "@/lib/api_url";


const Page = async ({searchParams}:{searchParams:any}) => {
  const {tags, title} = searchParams
  let queryString = '';
  if (tags) {
    queryString += `?tags=${tags}`;
  }
  if (title) {
    queryString += tags ? `&title=${title}` : `?title=${title}`;
  }
  const response = await axios.get(`${BASE_URL}/blogs${queryString}`)
  const {result} = await response.data
  return (
    <section className="relative mt-[63px]">
      <div className="-top-48 md:-top-32 w-full sticky bg-white z-10">
        <Header />
      </div>

      <BlogPostsGrid posts={result}/>
    </section>
  )
}

export default Page
