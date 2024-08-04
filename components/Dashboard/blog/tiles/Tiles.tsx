import Tile from "./Tile"
import { TBlogPost } from "@/components/common/type";


export default async function Tiles({ posts }: { posts: TBlogPost[] }) {
  return (
    <div className="space-y-5">
      {
        posts.map((post) => (
          <Tile key={post.id} post={post} />
        ))
      }
    </div>
  )
}
