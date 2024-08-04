"use client";
import Image from "next/image";
import imgs5 from "@/components/Landing_Page/Blog_Post/images/ppt5.jpg";
import { Divider } from "antd";
import {
  BlogHeader,
  BlogContent,
  FeaturedArticles,
} from "@/components/Blog/BlogPost";
import { Suspense, useEffect, useState } from "react";
import { Navigator } from "@/components/Blog";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { dataUrl } from "@/lib/utils";
import { getBlog } from "@/lib/actions";
import { ImageIcon } from "lucide-react";
import Loading from "@/components/common/loader";
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<any>([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await getBlog(params.slug);
      setBlog(response);
    };
    fetchBlog();
  }, [params.slug]);
  const title = params.slug!;
  const [navigatorItems, setNavigatorItems] = useState<
    Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]
  >([
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blog" },
    { title: title, path: `blog/${params.slug}` },
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-28 mb-14">
        <div className="top-[63px] w-full fixed bg-white z-10">
          <Navigator title="Blogs" items={navigatorItems} />
        </div>

        <div className="px-20 py-20 bg-gradient-to-b from-white from-15% to-gray-50">
          <div
            className={`h-[450px] ${
              !blog.backgroundImage && "flex"
            } w-full overflow-hidden rounded-[30px] justify-center items-center`}
          >
            {blog.backgroundImage ? (
              <Image
                width={1240}
                height={450}
                src={blog?.backgroundImage || ""}
                alt={params.slug}
                className="size-full object-cover bg-no-repeat bg-cover"
              />
            ) : (
              <ImageIcon size={30} />
            )}
          </div>

          <div className="body w-11/12 mx-auto p-[90px] rounded-[30px] bg-white -translate-y-24 space-y-14 divide-gray-500">
            <BlogHeader post={blog} />

            <Divider dashed={true} />

            <BlogContent body={blog?.blogContent} ads={blog?.addContent} />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <FeaturedArticles id={blog?.id} />
        </Suspense>
      </div>
    </Suspense>
  );
}
