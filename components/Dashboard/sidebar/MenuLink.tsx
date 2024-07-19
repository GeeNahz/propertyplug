'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


type Props = {
  item: { path: string; title: string; icon: React.ReactNode; }
}

export default function MenuLink({ item }: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`text-white text-xs p-5 my-[5px] rounded-lg flex items-center gap-2 hover:bg-ui-dash-dark-soft transition-all ${pathname === item.path && "bg-ui-dash-dark-soft"}`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}

