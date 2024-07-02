import { BlogGalleries } from "@/components/common/data";
import { BlogPosts, Navigator, Header, } from "@/components/Blog"
import { BreadCrumbType } from "@/components/common/type";


const Page = () => {
  const navigatorItems: BreadCrumbType[] = ["Blogs"]

  return (
    <section className="mt-[63px]">
      <div className="top-[63px] w-full sticky bg-white z-10">
        <Navigator items={navigatorItems}/>
        <Header />
      </div>

      <div className="px-20 w-full grid_wrapper mt-4 mb-24">
        {BlogGalleries.map((v, i) => (
          <BlogPosts key={i} post={v} />
        ))}
      </div>
    </section>
  )
}

export default Page
