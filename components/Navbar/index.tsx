'use client'
import Image from 'next/image'
import logo from "@/public/PropertPlugLogo.svg"
import Link from 'next/link'
import { Button } from '../common/button'
import { usePathname } from 'next/navigation'
import { GoDotFill } from "react-icons/go";

type NavLink={
  title:string,
  path:string
}[] 

const Nav:NavLink= [
  {
    title:'home',
    path:'/'
  },
  {
    title:'blog',
    path:'/blog'
  },
  {
    title:'about Us',
    path:'/aboutUs'
  },
  {
    title:'properties',
    path:'/properties'
  },
  {
    title:'services',
    path:'/services'
  },
]

const Navbar = () => {
  const path = usePathname()
  return (
    <div className='flex bg-[#0B2831] w-full py-2 px-20 justify-between items-center fixed top-0'>
      <div className='w-4/12'>
        <Image src={logo} alt='logo' className='w-[40px]'/>
      </div>

      <div className='w-4/12 flex justify-between capitalize items-start' >
        {Nav.map((v) => {
          return (
            <Link href={v.path} prefetch key={v.title} className={`${path === v.path? 'font-semibold' : 'font-extralight'} text-white text-xs flex justify-between flex-col items-center`}>{v.title}
            {path === v.path && <GoDotFill size={10}/>}
            </Link>
          )
        })}
      </div>

      <div className='w-4/12 flex justify-end'>
        <Button title='book consultancy'/>
      </div>
    </div>
  )
}

export default Navbar