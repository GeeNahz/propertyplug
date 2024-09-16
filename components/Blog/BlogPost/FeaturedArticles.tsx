import { Pagination, PaginationProps, ConfigProvider } from "antd";
import { useState, useMemo, useCallback } from "react";
import Header from "@/components/common/header";
import BlogPostsGrid from "../BlogPostsGrid";
import { TBlogPost } from "@/components/common/type";

const shuffleArray = (array:TBlogPost[]) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const FeaturedArticles = ({ id, blogs }: { id: string, blogs: TBlogPost[] }) => {
  const [current, setCurrent] = useState<number>(1);

  const filteredBlogs = useMemo(() => shuffleArray(blogs.filter((val) => val.id !== id)), [blogs, id]);

  const onChange: PaginationProps["onChange"] = useCallback((page: number) => {
    setCurrent(page);
  }, []);

  const nextPage = 2 * current;
  const prevPage = current === 1 ? 0 : (current - 1) * 2;
  const newBlog = useMemo(() => filteredBlogs.slice(prevPage, nextPage), [filteredBlogs, prevPage, nextPage]);

  return (
    <section>
      <div className="header flex max-md:flex-col w-full items-center justify-between px-32 max-md:px-4 max-md:items-start max-md:gap-4 py-8">
        <Header
          title="Featured Articles"
          desc="Explore explicit Content Just for you"
        />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0B2831",
            },
          }}
        >
          <Pagination
          className="self-center"
            current={current}
            onChange={onChange}
            total={filteredBlogs.length}
            pageSize={2}
          />
        </ConfigProvider>
      </div>
      <BlogPostsGrid posts={newBlog} />
    </section>
  );
};

export default FeaturedArticles;
