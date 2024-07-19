import Loading from '@/components/common/loader'
import { TTab } from '@/components/common/type'
import { FormPage, Header } from '@/components/Consultancy'
import { Suspense } from 'react'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props) => {
  const tab = searchParams.tab as TTab || 'buy'

  return (
    <div className="min-h-screen pt-10 md:pt-[63px]">
      <Header tab={tab} />

      <Suspense fallback={<Loading />}>
        <FormPage tab={tab} />
      </Suspense>
    </div>
  )
}


export default Page
