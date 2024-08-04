import React from 'react'
import { Loader } from 'lucide-react'


export default async function Loading() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
        <Loader size={40} color="#007D53" className='animate-spin' />
    </div>
  )
}
