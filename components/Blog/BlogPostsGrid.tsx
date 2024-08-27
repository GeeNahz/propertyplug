import { getBlogs } from "@/lib/actions";
import { GalleryWithID } from "../common/type";
import BlogPosts from "./BlogPosts";



const BlogPostsGrid = ({ posts }: any) => {
  return (
    <div className="container max-w-screen-xl mx-auto px-7 md:px-20 w-full grid_wrapper mt-4 mb-24">
      {posts.map((v:any, i:number) => (
        <div
          key={i}
          className={`big relative rounded-3xl h-36 md:h-full w-full border-white border-solid border-[2px] overflow-x-hidden`}
        >
          <BlogPosts post={v} />
        </div>
      ))}
    </div>
  );
};

export default BlogPostsGrid;
