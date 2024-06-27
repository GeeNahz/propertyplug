'use client'
import { useStateContext } from "@/hook/statecontext"
import Link from "next/link"

type ButtonProp = {
  title:string,
  url?:string
}
export const Button = ({title, url}:ButtonProp) => {
  const {setModal} = useStateContext()
  const handleClick = () => {
    if(title === 'book consultancy'){
      setModal(true)
    }
    return
  }

  return (
    <a href={url} className="flex w-max">
      <button className='p-3 rounded-[32px] bg-white font-medium text-xs capitalize w-max' onClick={handleClick}>
          {title}
      </button>
    </a>
    )
}
