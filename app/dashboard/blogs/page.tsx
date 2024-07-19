import { Header, Tiles } from "@/components/Dashboard";

export default function Page() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Tiles />
      </div>
    </div>
  )
}
