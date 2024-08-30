import Tile from "./Tile"
import { TBlogPost } from "@/components/common/type";

export default async function Tiles({ posts }: { posts: TBlogPost[] }) {
  return (
    <div className="space-y-5">
      {
        posts.length > 0? posts.map((post) => (
          <Tile key={post.id} post={post} />
        )): (
          <p className="text-base text-center font-normal">no blog available</p>
        )
      }
    </div>
  )
}
