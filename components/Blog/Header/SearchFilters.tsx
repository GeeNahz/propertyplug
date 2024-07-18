"use client"

import Tags from "./Tags";
import Search from "./Search";
import { useState } from "react";

const tags = ["all", "construction", "housing", "consulting", "rentals",];

const SearchFilters = () => {
  const [searchArg, setSearchArg] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([tags[0]]);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
      <div className="search w-full">
        <Search text={searchArg} setText={setSearchArg} />
      </div>

      <div className="tags">
        <Tags tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  );
};

export default SearchFilters;
