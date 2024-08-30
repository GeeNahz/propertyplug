import { Loader } from 'lucide-react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-white'>
      <Loader size={40} color="#007D53" className='animate-spin' />
    </div>
  )
}

export default Loading
