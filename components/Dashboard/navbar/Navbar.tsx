'use client'

import { usePathname } from "next/navigation"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md'


export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center bg-white py-2 px-5 rounded-2xl">
      <div className="title text-ui-dark text-lg pl-8 font-bold capitalize">
        {pathname.split('/').pop()}
      </div>

      <div className="menu flex items-center gap-5">
        <div className="search flex items-center gap-2 bg-ui-dash-gray p-2 rounded-full w-[212px] py-2 px-4 text-xs has-[:focus]:outline-ui-dark">
          <MdSearch className="text-ui-dark/50" size={20} />

          <input type="text" placeholder="Search..." className="input outline-none bg-transparent w-full border-none text-ui-desc" />
        </div>

        <div className="icons flex gap-5">
          {/* <MdOutlineChat size={20} /> */}
          <MdNotifications size={20} />
          {/* <MdPublic size={20} /> */}
        </div>

        <div className="profile-img size-11 rounded-full outline-2 outline-ui-dark bg-ui-desc">
        </div>
      </div>
    </nav>
  )
}

