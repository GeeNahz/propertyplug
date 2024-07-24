'use client'


import { usePathname } from "next/navigation"

export default function PageTitle() {
  const pathname = usePathname()

  return (
    <div className="title text-ui-dark text-lg pl-8 font-bold capitalize">
      {pathname.split('/').pop()}
    </div>
  )
}
