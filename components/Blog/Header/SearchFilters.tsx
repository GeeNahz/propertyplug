"use client";
import Search from "./Search";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const tags = ["all", "construction", "housing", "consulting", "rentals"];

const SearchFilters = () => {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || "all";

  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between justify-center items-center">
      <div className="search w-full">
        <Search />
      </div>

      <div className="w-full md:w-max h-10 md:h-auto max-sm:overflow-x-scroll tags space-x-1">
        {tags.map((v: string, i: number) => {
          return (
            <Link
              href={`${v === "all" ? `/blog` : `?tag=${v}`}`}
              key={i}
              className={`capitalize !rounded-full text-xs md:text-sm !px-3 !py-1 !mb-4 md:!mb-0 border border-solid ${
                selectedTag === v ? "border-[#FF1f1E] text-[#FF1F1E]" : null
              }`}
            >
              {v}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilters;
