import { auth } from "@/auth"
import { CreateForm } from "@/components/Dashboard"

export default async function Page() {
  const session = await auth()

  return (
    <div className="flex flex-col min-h-full">
      <CreateForm user={session?.user?.name}/>
    </div>
  )
}
