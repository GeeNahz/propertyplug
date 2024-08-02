"use client";

import { GalleryWithID } from "@/components/common/type";
import { Pagination, PaginationProps, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import imgs3 from "@/components/Landing_Page/Blog_Post/images/ppt3.jpg";
import Header from "@/components/common/header";
import BlogPosts from "../BlogPosts";
import BlogPostsGrid from "../BlogPostsGrid";
import {getBlogs } from "@/lib/actions";


const FeaturedArticles = ({id}:{id:string}) => {
  const [current, setCurrent] = useState<number>();
  const [blog, setBlog] = useState([])
  useEffect(() => {
    const blogs = async ()=> {
      const res = await getBlogs()
      const response = res.result.filter((val:any) => val.id !== id)
      setBlog(response)
    }
    blogs()
  }, [])

 
  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  return (
    <section>
      <div className="header flex items-center justify-between px-32 py-8">
        <Header
          title="Featured Articles"
          desc="Explore explicit Content Just for you"
        />

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

      <BlogPostsGrid posts={blog} />
    </section>
  );
};

export default FeaturedArticles;
