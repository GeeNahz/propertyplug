import Image, { StaticImageData } from "next/image";
import React from "react";
import imgs from "./ppt1.jpg";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Rate } from "antd";
import { dataUrl } from "@/lib/utils";

export const Card = ({title, img, testimony}:{
    title:string,
    img:StaticImageData,
    testimony:string
}) => {
  return (
    <div className="relative overflow-x-hidden p-0 md:p-4 h-[300px] rounded-[32px] w-[280px] md:w-[350px] bg-black">
      <Image placeholder="blur"
       blurDataURL={dataUrl}
        src={img}
        alt="testomnial"
        fill
        className=" w-full object-cover"
      />

      <div className="rounded-xl w-10/12 bg-white absolute bottom-4 flex flex-col left-7 justify-center px-4 py-2">

        <div className="flex justify-between w-full mb-2">
          <IoChatboxEllipsesOutline size={20}/>
          <Rate style={{fontSize:'12px'}}/>
        </div>

        <h6 className="capitalize font-medium text-xs">{title}</h6>
        <small className="text-zinc-400 text-[10px] text-center mt-2">
          {testimony}
        </small>
      </div>
    </div>
  );
};
