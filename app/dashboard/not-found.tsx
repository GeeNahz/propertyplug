import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col w-full justify-center items-center space-y-4'>
      <h2 className='text-xl uppercase'>Not Found</h2>
      <p className='text-sm'>Could not find requested resource</p>
      <Link href="/dashboard" className='bg-black/40 text-slate-200 rounded-lg w-max p-2'>Return Home</Link>
    </div>
  )
}