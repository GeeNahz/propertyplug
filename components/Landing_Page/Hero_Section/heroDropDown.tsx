"use client";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Button } from "../../common/button";
import Link from "next/link";

export const DropList = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div className="flex py-1 pr-1 pl-2 md:px-2 rounded-[25px] md:rounded-[32px] border md:border-[3px] border-white border-solid mt-6 gap-1 md:gap-8 relative">
      <small className="text-xs capitalize flex items-center gap-1 md:gap-3 text-zinc-400 cursor-pointer" onClick={() => setDrop(!drop)}>
        what are you looking for?{" "}
        <MdArrowDropDown size={20} className={`transition ${drop ? 'rotate-0' : 'rotate-180'}`} />
        {drop && <DropDown />}
      </small>
      <Button url="/consultancy" title="book consultancy" />
    </div>
  );
};

const DropDown = () => {
  return (
    <div className="drop__fade absolute top-16 left-0 right-0 p-3 w-64 border md:border-[2px] border-white border-solid rounded-2xl bg-gray-600/15 flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
      {[{ title: "buy property", path: '/consultancy?tab=buy' }, { title: "sell property", path: '/consultancy?tab=sell' }, { title: "rent property", path: '/consultancy?tab=rent' },].map((v, index) => {
        return (
          <Link href={v.path} key={index} className="text-white font-medium text-sm md:text-lg capitalize py-2 text-center bg-gray-500/15 border-transparent border border-solid hover:border-white transition-all rounded-3xl">
            {v.title}
          </Link>
        );
      })}
    </div>
  );
};
