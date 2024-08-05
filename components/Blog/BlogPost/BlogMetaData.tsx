import { Divider } from "antd";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import BlogHeaderActionBtns from "./BlogHeaderActionBtns";

type Props = {
  owner: string;
  createdAt: string;
  category: string;
  title: string;
  like?: boolean;
};

const BlogMetaData = ({ owner, createdAt, category, like }: Props) => {
  const time = new Date(createdAt || "").toLocaleString() 
  return (
    <div className="sub-title text-gray-500 flex justify-between items-center">
      <div className="meta-data flex gap-5 items-center text-sm font-light divide-gray-400">
        <p className="author">Written by {owner}</p>
        <Divider type="vertical" />
        <p className="date">{time}</p>
        <Divider type="vertical" />
        <p className="category">{category}</p>
      </div>

      {/* <BlogHeaderActionBtns like={like} /> */}
    </div>
  );
};

export default BlogMetaData;
