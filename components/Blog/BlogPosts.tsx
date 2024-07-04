import { Button } from "@/components/common/button";
import Image, { StaticImageData } from "next/image";

type Props = {
  time: string;
  title: string;
  img: StaticImageData;
  grid: string;
};

const BlogPosts = ({ post }: { post: Props }) => {
  return (
    <>
      <Image
        src={post.img}
        alt="img"
        fill
        className="hover_img object-cover"
      />
      <div className="absolute top-0 w-full h-full left-0 transition duration-700 z-0 hover:translate-x-0 -translate-x-[100%]  linear_gradient flex flex-col justify-between p-3">
        <div className="">
          <small className="text-slate-50 text-xs font-normal">
            {post.time}
          </small>
          <h4 className="text-white text-xl capitalize font-semibold">
            {post.title}
          </h4>
        </div>
        <Button title="read more" url={`/blog/${post.title.replaceAll(" ", "-")}`} />
      </div>
    </>
  );
};

export default BlogPosts;
