"use client";
import { Pagination, PaginationProps, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import Header from "@/components/common/header";
import BlogPostsGrid from "../BlogPostsGrid";
import {getBlogs } from "@/lib/actions";


const FeaturedArticles = ({id}:{id:string}) => {
  const [current, setCurrent] = useState<number>(1);
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

const nextPage = 2 * current;
const prevPage = current === 1 ? 0 : (current - 1) * 2;
const newBlog = blog.slice(prevPage, nextPage);

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
          <Pagination current={current} onChange={onChange} total={blog.length + 1} pageSize={2} />
        </ConfigProvider>
      </div>

      <BlogPostsGrid posts={newBlog} />
    </section>
  );
};

export default FeaturedArticles;
