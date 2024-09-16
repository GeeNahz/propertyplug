import { getBlogs } from "@/lib/actions";
import { GalleryWithID, TBlogPost } from "../common/type";
import BlogPosts from "./BlogPosts";



const BlogPostsGrid = ({ posts }: { posts: TBlogPost[] }) => {
  return (
    <div className="container max-w-screen-xl mx-auto px-7 md:px-20 w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-4 mt-4 mb-24">
      {posts.map((v, i) => (
        <div
          key={i}
          className={`big relative rounded-3xl h-36 md:h-44 w-full md:w-80 border-white border-solid border-[2px] overflow-x-hidden`}
        >
          <BlogPosts post={v} />
        </div>
      ))}
    </div>
  );
};

export default BlogPostsGrid;
