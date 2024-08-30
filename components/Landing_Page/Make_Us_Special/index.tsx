import Image from 'next/image'
import React from 'react'
import img from './images/special.svg'
import { dataUrl } from '@/lib/utils'

const MakeUsSpecial = () => {
  return (
    <div className='w-full py-8 bg-slate-50 mt-12'>
      <div className='flex flex-col justify-center w-max mx-auto gap-4'>
      <small className='text-zinc-400 text-xs text-center'>Here&apos;s the Why you Need us</small>
      <h3 className='text-xl text-black font-semibold'>What Makes Us Special</h3>
      </div>
      <div className='mx-auto w-max my-20'>
        <Image placeholder="blur" blurDataURL={dataUrl} src={img} alt='special' />
      </div>
    </div>
  )
}

export default MakeUsSpecial