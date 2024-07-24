import { Cards, ChartWrapper, Rightbar, RightTab } from "@/components/Dashboard"
import { Suspense } from "react"


const Page = () => {
  return (
    <main className="h-full flex-auto flex gap-5 lg:gap-8">
      <div className="flex flex-col gap-5 lg:gap-8" style={{ flex: 3 }}>
        <Cards />

        <div className="flex-auto w-full h-fit bg-white rounded-2xl">
          <ChartWrapper />
        </div>
      </div>

      <Rightbar>
        <Suspense fallback={<p>Loading...</p>}>
          <RightTab />
        </Suspense>
      </Rightbar>
    </main>
  )
}


export default Page
