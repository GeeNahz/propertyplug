"use client"

import Tags from "./Tags";
import Search from "./Search";
import { useState } from "react";

const tags = ["all", "construction", "housing", "consulting", "rentals",];

const SearchFilters = () => {
  const [searchArg, setSearchArg] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([tags[0]]);

  return (
    <div className="flex justify-between items-center">
      <div className="search">
        <Search text={searchArg} setText={setSearchArg} />
      </div>

      <div className="tags">
        <Tags tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  );
};

export default SearchFilters;
