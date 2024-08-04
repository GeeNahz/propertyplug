import { MdSearch } from "react-icons/md";
import PageTitle from "./PageTitle";
import Image from "next/image";
import { HiBell } from "react-icons/hi2";
import { getSession } from "@/try";
import { BASE_URL } from "@/lib/api_url";
import axios from "axios";
import { decrypt } from "@/lib/utils";
import NavSide from "./NavSide";

export default async function Navbar() {

  // const userData = await axios.get(`${BASE_URL}/users/${user_id}`, {
  //   headers: {
  //     Authorization: `${toke}`,
  //     "Content-Type": "application/json",
  //   },
  // });

  return (
    <nav className="flex justify-between items-center bg-white py-2 px-5 rounded-2xl">
      <PageTitle />

      <div className="menu flex items-center gap-5">
        <div className="search flex items-center gap-2 bg-ui-dash-gray p-2 rounded-full w-[212px] py-2 px-4 text-xs has-[:focus]:outline-ui-dark">
          <MdSearch className="text-ui-dark/50" size={20} />

          <input
            type="text"
            placeholder="Search..."
            className="input outline-none bg-transparent w-full border-none text-ui-desc"
          />
        </div>

        <div className="icons flex gap-5">
          <HiBell size={20} />
        </div>

        <NavSide/>
      </div>
    </nav>
  );
}
