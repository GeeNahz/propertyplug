'use client'
import { useStateContext } from "@/hook/statecontext"
import clsx from "clsx"
import { usePathname } from "next/navigation";
import Link from "next/link"

type ButtonProp = {
  title: string,
  url?: string
}
export const Button = ({ title, url }: ButtonProp) => {
  const { setModal } = useStateContext()
  const isConsultancy = title === 'book consultancy';

  const handleClick = () => {
    if (isConsultancy) {
      setModal(true)
    }
    return
  }

  const path = usePathname();

  const btnClass = clsx(
    "p-3 rounded-[32px] font-medium text-xs capitalize w-max",
    {
      "bg-white text-ui-dark": (path === "/" && isConsultancy),
      "bg-ui-dark text-white": ((path !== "/") && isConsultancy),
      "bg-white": ((path !== "/") && !isConsultancy),
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
