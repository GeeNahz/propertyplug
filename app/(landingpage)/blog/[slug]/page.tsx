"use client";

import Image from "next/image";
import { Divider } from "antd";
import { lazy, Suspense, useEffect, useState } from "react";
import { Navigator } from "@/components/Blog";
import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";
import { getBlog, getBlogs } from "@/lib/actions";
import Loading from "@/components/common/loader";
import axios from "axios";
import { BASE_URL } from "@/lib/api_url";

// Lazy load components
const BlogHeader = lazy(() => import("@/components/Blog/BlogPost/BlogHeader"));
const BlogContent = lazy(() => import("@/components/Blog/BlogPost/BlogContent"));
const FeaturedArticles = lazy(() => import("@/components/Blog/BlogPost/FeaturedArticles"));

export default function Page({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<any>(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        await axios.get(`${BASE_URL}/blogs/readcount/${params.slug}`)
        const response = await getBlog(params.slug);
        setBlog(response);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();
        setBlogs(res.result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [params.slug]);

  const title = params.slug;
  const [navigatorItems] = useState<Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]>([
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blog" },
    { title: title, path: `blog/${params.slug}` },
  ]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <meta name="description" content={params.slug} />
      <div className="mt-16 md:mt-28 mb-14">
        <div className="top-[63px] fixed bg-white z-10 w-full">
          <Navigator title={params.slug} items={navigatorItems} />
        </div>

        <div className="px-20 max-sm:px-4 py-20 bg-gradient-to-b from-white from-15% to-gray-50">
          <div
            className={`h-[450px] relative aspect-auto ${
              !blog?.backgroundImage && "flex"
            } w-full overflow-hidden rounded-[30px] max-sm:rounded-sm justify-center items-center`}
          >
            {blog?.backgroundImage ? (
              <Image
                fill
                src={blog?.backgroundImage}
                alt={params.slug}
                className="object-cover"
              />
            ) : (
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
              >
                <div className="flex items-center justify-center w-[300px] h-[200px] sm:h-[450px] rounded sm:w-[1240px] bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="body w-11/12 max-sm:w-full mx-auto p-[90px] max-sm:p-4 rounded-[30px] max-sm:rounded-sm bg-white -translate-y-24 space-y-14 max-sm:space-y-8 divide-gray-500">
            <Suspense fallback={<Loading />}>
              <BlogHeader post={blog} />
            </Suspense>

            <Divider dashed={true} />

            <Suspense fallback={<Loading />}>
              <BlogContent body={blog?.blogContent} ads={blog?.addContent} />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <FeaturedArticles id={blog?.id} blogs={blogs} />
        </Suspense>
      </div>
    </>
  );
}
