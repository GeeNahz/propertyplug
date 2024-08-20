import PageTitle from "./PageTitle";
import { HiBell } from "react-icons/hi2";
import NavSide from "./NavSide";
import NavbarSearch from "./NavbarSearch";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

export default async function Navbar() {

  return (
    <nav className="flex justify-between items-center bg-white py-2 px-5 rounded-2xl">
      <PageTitle />

      <div className="menu flex items-center gap-5">
        <Suspense fallback={<Loading />}>
          <NavbarSearch />
        </Suspense>

        {/* 
        <div className="icons flex gap-5">
          <HiBell size={20} />
        </div> */}

        <NavSide />
      </div>
    </nav>
  );
}
