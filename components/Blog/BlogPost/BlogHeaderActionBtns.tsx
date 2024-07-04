"use client"

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const BlogHeaderActionBtns = ({ like }: { like: boolean }) => {
  const [likeState, setLikeState] = useState<boolean>(like);

  function toggleLike(action: "like" | "dislike") {
    // perform an api request to toggle the like state
    // but for now, I'll just toggle the local state
    
    if (action === "like") {
      setLikeState(true);
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
