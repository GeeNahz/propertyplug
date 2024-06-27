'use client'
import { useStateContext } from "@/hook/statecontext"

export const Button = ({title}:{title:string}) => {
  const {setModal} = useStateContext()
  const handleClick = () => {
    if(title === 'book consultancy'){
      setModal(true)
    }
    return
  }

  return (
    <button className='p-3 rounded-[32px] bg-white font-medium text-xs capitalize w-max' onClick={handleClick}>
        {title}
    </button>
  )
}
