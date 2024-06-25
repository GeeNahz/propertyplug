import React from 'react'

export const Button = ({title}:{title:string}) => {
  return (
    <button className='p-3 rounded-[32px] bg-white font-medium text-xs capitalize w-max'>
        {title}
    </button>
  )
}
