import { useMemo } from "react";
import BlogPostsGrid from "../BlogPostsGrid";

const PaginatedBlogPosts = ({ current, blog }: { current: number; blog: any[] }) => {
  const newBlog = useMemo(() => {
    const nextPage = 2 * current;
    const prevPage = current === 1 ? 0 : (current - 1) * 2;
    return blog.slice(prevPage, nextPage);
  }, [current, blog]);

  return <BlogPostsGrid posts={newBlog} />;
};

export default PaginatedBlogPosts;
