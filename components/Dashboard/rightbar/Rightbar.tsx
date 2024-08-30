'use client'
import { usePathname } from "next/navigation"
export default function Rightbar({
  children
}: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <div className={`${path ==='/dashboard'? 'flex-1':'w-5/12'} relative p-5 rounded-2xl bg-white no-scrollbar overflow-y-scroll`}>
      {children}
    </div>
  )
}
