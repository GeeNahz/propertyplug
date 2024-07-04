import { BlogGalleries } from "@/components/common/data";
import { Navigator, Header, } from "@/components/Blog"
import { BreadCrumbType } from "@/components/common/type";
import { Button } from "@/components/common/button";
import Image from "next/image";


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
            <Image
              src={v.img}
              alt="img"
              fill
              className="hover_img object-cover"
            />
            <div className="absolute top-0 w-full h-full left-0 transition duration-700 z-0 hover:translate-x-0 -translate-x-[100%]  linear_gradient flex flex-col justify-between p-3">
              <div className="">
                <small className="text-slate-50 text-xs font-normal">
                  {v.time}
                </small>
                <h4 className="text-white text-xl capitalize font-semibold">
                  {v.title}
                </h4>
              </div>
              <Button title="read more" url={`/blog/${v.title.replaceAll(" ", "-")}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page
