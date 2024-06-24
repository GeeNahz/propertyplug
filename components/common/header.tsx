import React from 'react'

const Header = ({title, desc}:{title:string, desc:string}) => {
  return (
    <header className='flex flex-col gap-1'>
        <h3 className='text-xl text-black font-semibold'>{title}</h3>
        <p className='text-zinc-400 text-xs'>{desc}</p>
    </header>
  )
}

export default Header