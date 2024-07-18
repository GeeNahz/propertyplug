import { GalleryWithID } from "../common/type";
import BlogPosts from "./BlogPosts";

type Props = {
  posts: GalleryWithID[];
};

const BlogPostsGrid = ({ posts }: Props) => {
  return (
    <div className="px-7 md:px-20 w-full grid_wrapper mt-4 mb-24">
      {posts.map((v, i) => (
        <div
          key={i}
          className={`${v.grid} relative rounded-3xl h-full w-full border-white border-solid border-[2px] overflow-x-hidden`}
        >
          <BlogPosts post={v} />
        </div>
      ))}
    </div>
  );
};

export default BlogPostsGrid;
