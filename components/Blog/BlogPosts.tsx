import { Button } from "@/components/common/button";
import Image, { StaticImageData } from "next/image";
import { TBlogPost } from "../common/type";

type Props = {
  time: string;
  title: string;
  img: StaticImageData;
  grid: string;
};

const BlogPosts = ({ post }: { post: TBlogPost}) => {
  const time = new Date(post.createdAt).toDateString();
  return (
    <> 
      {post?.backgroundImage ? (
        <Image
          width={1240}
          height={450}
          src={post?.thumbnail || post?.backgroundImage as string}
          alt={post?.title}
          className="size-full object-cover bg-no-repeat bg-cover"
        />
      ) : (
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-20 md:h-48 rounded sm:w-96 bg-gray-700">
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
      {post?.backgroundImage && <div className={`absolute top-0 w-full h-full left-0 linear_gradient transition duration-700 z-0  flex flex-col justify-between p-3`}>
        <div className="">
         {time && <small className="text-slate-50 text-xs font-normal">{time}</small>}
          <h4 className="text-white text-sm md:text-base xl:text-lg capitalize font-semibold">
          {post.title.length > 50 ? `${post.title.slice(0, 50).trim()}...` : post.title}
          </h4>
        </div>
        <Button title="read" url={`/blog/${post?.slug}`} />
      </div>}
    </>
  );
};

export default BlogPosts;
