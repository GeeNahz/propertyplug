"use client";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Button } from "../../common/button";

export const DropList = () => {
    const [drop,setDrop] = useState(false)
  return (
    <div className="flex py-1 px-2 rounded-[32px] border-[3px] border-white border-solid mt-6 gap-8 relative">
      <small className="capitalize flex items-center gap-3 text-zinc-400 cursor-pointer" onClick={() => setDrop(!drop)}>
        what are you looking for?{" "}
        <MdArrowDropDown size={20} className={`transition ${drop? 'rotate-0':'rotate-180'}`} />
        {drop && <DropDown />}
      </small>
      <Button title="book consultancy" />
    </div>
  );
};

const DropDown = () => {
    return (
      <div className="drop__fade absolute top-14 left-0 right-0 p-3 w-64 border-[2px] border-white border-solid rounded-2xl bg-gray-600 flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
        {["buy property", "sell property", "rent property"].map((v: any) => {
          return (
            <button key={v} className="text-white font-medium text-lg capitalize py-2 text-center bg-gray-500 rounded-3xl">
              {v}
            </button>
          );
        })}
      </div>
    );
  };