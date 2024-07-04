import { BlogGalleries } from "@/components/common/data";
import { Navigator, Header, BlogPosts, } from "@/components/Blog"
import { BreadCrumbType } from "@/components/common/type";


const Page = () => {
  const navigatorItems: BreadCrumbType[] = ["Blogs"]

  return (
    <section className="mt-[63px]">
      <div className="top-[63px] w-full sticky bg-white z-10">
        <Navigator items={navigatorItems} />
        <Header />
      </div>

      <div className="px-20 w-full grid_wrapper mt-4 mb-24">
        {BlogGalleries.map((v, i) => (
          <div
            key={i}
            className={`${v.grid} relative rounded-3xl h-full w-full border-white border-solid border-[2px] overflow-x-hidden`}
          >
            <BlogPosts post={v} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page
