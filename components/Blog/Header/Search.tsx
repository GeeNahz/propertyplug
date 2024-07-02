import { Divider } from "antd";
import { CiSearch } from "react-icons/ci";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ text, setText }: Props) => {
  return (
    <form className="flex divide-gray-400 items-center border border-ui-dark rounded-full w-[600px] overflow-hidden py-4 px-6">
      <CiSearch className="size-6" />
      <Divider type="vertical" />
      <input value={text} onChange={(e) => setText(e.target.value)} className="size-full active:outline-none focus:outline-none font-light text-sm" placeholder="Search Article" type="text" />
    </form>
  );
};

export default Search;
