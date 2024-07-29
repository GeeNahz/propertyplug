// import { auth } from "@/auth"
import { CreateForm } from "@/components/Dashboard"
import { getSession } from "@/lib"

export default async function Page() {
  const session = await getSession()

  return (
    <div className="flex flex-col min-h-full">
      <CreateForm user={session?.user?.name}/>
    </div>
  )
}
