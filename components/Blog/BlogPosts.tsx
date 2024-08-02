import { Button } from "@/components/common/button";
import { dataUrl } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  time: string;
  title: string;
  img: StaticImageData;
  grid: string;
};

const BlogPosts = ({ post }: any) => {
  const time = new Date(post.createdAt).toLocaleString();
  return (
    <>
      {post?.backgroundImage ? (
        <Image
          width={1240}
          height={450}
          src={post?.thumbnail}
          alt={post?.title}
          className="size-full object-cover bg-no-repeat bg-cover"
        />
      ) : (
        <ImageIcon />
      )}
      <div className="absolute top-0 w-full h-full left-0 transition duration-700 z-0 linear_gradient flex flex-col justify-between p-3">
        <div className="">
          <small className="text-slate-50 text-xs font-normal">{time}</small>
          <h4 className="text-white text-xl capitalize font-semibold">
            {post.title}
          </h4>
        </div>
        <Button title="read more" url={`/blog/${post.id}`} />
      </div>
    </>
  );
};

export default BlogPosts;
