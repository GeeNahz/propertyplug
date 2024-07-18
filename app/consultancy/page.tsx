import Loading from '@/components/common/loader'
import { FormPage } from '@/components/Consultancy'
import { Suspense } from 'react'

const Page = () => {
  return (
    <div className="min-h-screen pt-[63px]">
      <Suspense fallback={<Loading />}>
        <FormPage />
      </Suspense>
    </div>
  )
}


export default Page
