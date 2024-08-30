import React from 'react'
import { LoaderCircleIcon } from 'lucide-react'


export default async function Loading() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <LoaderCircleIcon className="animate-spin" />
    </div>
  )
}
