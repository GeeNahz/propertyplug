'use client'


import { Testimon } from '@/components/common/data'
import React from 'react'
import { Card } from './card'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ScrollTestimony = () => {
    const scrollRef = React.useRef(null)

    const handleScroll = (direction:string) => {
        const {current} = scrollRef
        // @ts-ignore
        if(direction === 'right') {current.scrollLeft += 250}
        // @ts-ignore
        else {current.scrollLeft -= 250}

    }
  return (
    <div className=" w-full overflow-x-scroll scroll-smooth flex gap-2 md:gap-5 mt-12 testimony__container" ref={scrollRef}>
    {Testimon.slice(0,3).map((v, i) => (
      <div key={i} className="w-full px-3 md:px-6">
        <Card img={v.img} testimony={v.testimony} title={v.title} />
      </div>
    ))}
    <div className="w-full flex justify-between items-center absolute top-0 bottom-0">
      <button className="h-max rounded-full bg-black p-3 text-white" onClick={() => handleScroll('left') }><IoIosArrowBack /> </button>
      <button className="h-max rounded-full bg-black p-3 text-white"  onClick={() => handleScroll('right') }><IoIosArrowForward/></button>
    </div>
  </div>
  )
}
