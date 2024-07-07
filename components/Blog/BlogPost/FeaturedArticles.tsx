"use client";

import { GalleryWithID } from "@/components/common/type";
import { Pagination, PaginationProps, ConfigProvider } from "antd";
import { useState } from "react";
import imgs3 from "@/components/Landing_Page/Blog_Post/images/ppt3.jpg";
import BlogPosts from "../BlogPosts";
import BlogPostsGrid from "../BlogPostsGrid";


const FeaturedArticles = () => {
  const [current, setCurrent] = useState<number>();

  const posts: GalleryWithID[] = [
    {
      id: 1,
      time: "Monday, 7:45pm",
      title: "what makes this house special?",
      img: imgs3,
      grid: 'big'
    },
    {
      id: 2,
      time: "Monday, 7:45pm",
      title: "what makes this house special?",
      img: imgs3,
      grid: 'big'
    },
    {
      id: 3,
      time: "Monday, 7:45pm",
      title: "what makes this house special?",
      img: imgs3,
      grid: 'big'
    },
    {
      id: 4,
      time: "Monday, 7:45pm",
      title: "what makes this house special?",
      img: imgs3,
      grid: 'big'
    },
  ]

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  return (
    <section>
      <div className="header flex items-center justify-between px-32 py-8">
        <div className="texts">
          <p className="font-medium text-ui-dark text-3xl capitalize mb-2">featured articles</p>
          <p className="text-ui-dark font-light text-sm tracking-[0.42px]">Explore explicit Content Just for you</p>
        </div>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0B2831",
            }
          }}
        >
          <Pagination current={current} onChange={onChange} total={16} pageSize={4} />
        </ConfigProvider>
      </div>

      <BlogPostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedArticles;
