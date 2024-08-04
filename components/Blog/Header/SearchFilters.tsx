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
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
      <div className="search w-full">
        <Search />
      </div>

      <div className="min-w-fit tags space-x-1">
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
