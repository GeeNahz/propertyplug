'use client'


import { TTab } from '@/components/common/type'
import { Header, Form } from '@/components/Consultancy'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParam = useSearchParams()
  const tab = searchParam.get('tab') as TTab || 'buy'
  return (
    <div className="min-h-screen pt-[63px]">
      <Header tab={tab} />

      <section className="px-20">
        <p className="my-[72px] text-[40px] font-bold text-ui-dark capitalize text-start">{tab}</p>

        <Form />
      </section>
    </div>
  )
}


export default Page
