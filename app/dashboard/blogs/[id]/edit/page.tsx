import { EditForm } from "@/components/Dashboard"
import { getBlog } from "@/lib/actions"


export default async function Page({ params }: { params: { id: string } }) {
  const post = await getBlog(params.id)

  return (
    <div className="flex flex-col min-h-full">
      <EditForm post={post} />
    </div>
  )
}

