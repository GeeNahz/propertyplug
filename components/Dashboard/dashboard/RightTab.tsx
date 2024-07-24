import { TBlogPost } from "@/components/common/type";
import CardRightTab from "../card/CardRightTab";
import { getBlogs } from "@/lib/actions";

export default async function RightTab() {
  const response = await getBlogs()
  const posts = response.result.slice(0, 7) as TBlogPost[]

  return (
    <div className="bg-white h-full w-full stick top-0 flex flex-col gap-5">
      <p className="font-semibold text-center text-ui-dark capitalize">trending blogs</p>

      <div className="flex flex-col gap-4">
        {
          posts.map((post) => <CardRightTab key={post.id} title={post.title} date={post.createdAt} />)
        }
      </div>
    </div>
  )
}
