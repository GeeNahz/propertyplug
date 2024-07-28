import {
  MdSearch,
} from 'react-icons/md'
import PageTitle from "./PageTitle"
import { auth } from '@/auth'
import Image from 'next/image'

import profileImg from '@/public/noavatar.jpg'


export default async function Navbar() {
  const session = await auth()

  return (
    <nav className="flex justify-between items-center bg-white py-2 px-5 rounded-2xl">
      <PageTitle />

      <div className="menu flex items-center gap-5">
        <div className="search flex items-center gap-2 bg-ui-dash-gray p-2 rounded-full w-[212px] py-2 px-4 text-xs has-[:focus]:outline-ui-dark">
          <MdSearch className="text-ui-dark/50" size={20} />

          <input type="text" placeholder="Search..." className="input outline-none bg-transparent w-full border-none text-ui-desc" />
        </div>

        <div className="profile-img size-11 rounded-full overflow-hidden border-2 border-ui-dark/50 bg-ui-desc">
          <Image
            src={session?.user?.image || profileImg}
            alt={session?.user?.email || 'profile'}
            width={56}
            height={56}
            className="object-contain object-center"
          />
        </div>
      </div>
    </nav>
  )
}

