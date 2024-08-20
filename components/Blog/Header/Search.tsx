import { Divider } from "antd";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("search");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const queryString = text ? `?search=${text}` : "";
    window.history.pushState(null, "", queryString);
  }, [text, initialTag]);

  return (
    <form className="flex divide-gray-400 items-center border border-ui-dark rounded-full w-full md:w-[600px] overflow-hidden py-2 md:py-4 px-3 md:px-6">
      <CiSearch className="size-5 md:size-6" />
      <Divider type="vertical" />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="size-full active:outline-none focus:outline-none font-light text-xs md:text-sm"
        placeholder="Search Article"
        type="text"
      />
    </form>
  );
};

export default Search;
