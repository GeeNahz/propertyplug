'use client'

import Tile from "./Tile"
import { TBlogPost } from "@/components/common/type";


export default function Tiles({ posts }: { posts: TBlogPost[] }) {

  return (
    <div className="space-y-5">
      {posts
        ? posts.map((post) => (
          <Tile key={post.id} post={post} />
        ))
        : (<div className="w-full p-10 rounded-[20px] bg-white flex gap-6 items-center">
          <p className="text-gray-300 text-xl font-semibold">No available blog</p>
        </div>)
      }
    </div>
  )
}
