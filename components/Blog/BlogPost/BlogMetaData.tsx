import { Divider } from "antd";
import BlogHeaderActionBtns from "./BlogHeaderActionBtns";

type Props = {
  owner: string;
  createdAt: string;
  category: string;
  title: string;
  like?: any;
};

const BlogMetaData = ({ owner, createdAt, category, like }: Props) => {
  return (
    <div className="sub-title text-gray-500 flex justify-between items-center">
      <div className="meta-data flex max-sm:w-full gap-1 md:gap-5 items-center text-xs md:text-sm font-light divide-gray-400">
        <p className="author">Written by <br className="md:hidden" />{owner}</p>
        <Divider type="vertical" />
        <p className="date hidden md:flex">
          {new Date(createdAt).toDateString()}
        </p>
        <Divider type="vertical" className="!hidden md:!flex" />
        <p className="category">{category}</p>
      </div>

      <BlogHeaderActionBtns like={like} />
    </div>
  );
};

export default BlogMetaData;
