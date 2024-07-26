'use client'
import { useStateContext } from "@/hook/statecontext"
import clsx from "clsx"
import { usePathname } from "next/navigation";
import Link from "next/link"

type ButtonProp = {
  title: string,
  url?: string,
  bg?: string
}
export const Button = ({ title, url, bg}: ButtonProp) => {
  const { setModal } = useStateContext()
  const isConsultancy = title === 'book consultancy';

  const handleClick = () => {
    // if (isConsultancy) {
    //   setModal(true)
    // }
    return
  }

  const path = usePathname();

  const btnClass = clsx(
    `py-2 px-3 md:p-3 rounded-[32px] font-medium text-xs capitalize w-max bg-${bg}`,
    {
      "bg-white text-ui-dark": (path === "/" && isConsultancy),
      "bg-ui-dark text-white": ((path !== "/") && isConsultancy),
      "bg-white": ((path !== "/" || path === "/") && !isConsultancy),
      'bg-[#EF4444] text-white': ((path === "/") && bg)
    },
  );

  return (
    <a href={url} className="flex w-max">
      <button className={btnClass} onClick={handleClick}>
        {title}
      </button>
    </a>
  )
}
