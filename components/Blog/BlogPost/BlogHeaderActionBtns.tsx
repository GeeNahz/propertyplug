"use client"

import { BASE_URL } from "@/lib/api_url";
import axios from "axios";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { usePathname } from "next/navigation";

const BlogHeaderActionBtns = ({ like }: { like: boolean }) => {
  const path = usePathname() as string
  const [likeState, setLikeState] = useState<boolean>(false);
 async function toggleLike(action: "like" | "dislike") {
    // perform an api request to toggle the like state
    // but for now, I'll just toggle the local state
    
    if (action === "like") {
      setLikeState(true);
      await axios.get(`${BASE_URL}/blogs/like${path.replace('/blog', '')}`)
    } else if (action === "dislike") {
      setLikeState(false);
    } else {
      throw new Error("Unknown action");
    }
  }
  return (
    <div className="actions font-normal text-xl flex gap-4">
      {/* Make these icons btns with respective actions */}
      {likeState
        ? <button onClick={() => toggleLike("dislike")}><AiFillHeart fill='red' /></button>
        : <button  onClick={() => toggleLike("like")}><AiOutlineHeart /></button>}
      <AiOutlineShareAlt />
    </div>
  );
};

export default BlogHeaderActionBtns;
