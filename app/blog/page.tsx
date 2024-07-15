import { BlogGalleries } from "@/components/common/data";
import { Header } from "@/components/Blog"
import BlogPostsGrid from "@/components/Blog/BlogPostsGrid";


const Page = () => {
  return (
    <section className="relative mt-[63px]">
      <div className="-top-32 w-full sticky bg-white z-10">
        <Header />
      </div>

      <BlogPostsGrid posts={BlogGalleries}/>
    </section>
  )
}

export default Page
