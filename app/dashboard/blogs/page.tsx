import { Header, Tiles } from "@/components/Dashboard";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Tiles />
      </div>
    </div>
  )
}
