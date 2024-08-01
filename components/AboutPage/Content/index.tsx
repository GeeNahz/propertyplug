import Image from 'next/image'
import { RxArrowBottomRight } from "react-icons/rx"

import imgBuilding from '@/components/AboutPage/resources/about-us-building.jpg'
import { dataUrl } from '@/lib/utils'

const Content = () => {
  return (
    <section className="space-y-5 md:space-y-10 mb-24 md:mb-48">
      <div className="section-title flex items-center text-start gap-4 md:gap-8 text-ui-dark font-bold mb-10 md:mb-0">
        <p className="capitalize text-2xl md:text-4xl">our story</p>
        <RxArrowBottomRight className="text-xl md:text-3xl" />
      </div>

      <div className="section-body block md:flex gap-0 md:gap-10 items-center justify-between h-max">
        <div className="h-[500px] w-[401px] rounded-[20px] overflow-hidden hidden md:block">
          <Image placeholder="blur" blurDataURL={dataUrl} src={imgBuilding} alt="building" width={400} height={560} className="size-full object-center object-cover" />
        </div>

        <div className="space-y-8 md:space-y-[65px] text-start h-full w-full md:w-[700px] text-ui-desc">
          <p>Property Plug is an urban contemporary real estate company which is dedicated to the delivery of premium real estate services. The company was founded on the basis of client satisfaction and result delivery. Property Plug provides premium real estate services to our esteemed clients such as; investment advisory, facility management, real estate brokerage and project development. From inception, our operations have been guided by utmost integrity, professionalism and honesty. These are qualities echoed by the individuals and organizations we have served since. We indulge our business acumen, leverage our extensive industry connections to deliver favorable financial and legal terms for our clients at every step of their real estate journey.</p>

          <p>Here at Property Plug, providing an exceptional experience to our clients is our top priority, that is why nothing is more important to us than the needs and aspirations of our private and institutional clients. Through the highly professional and collaborative culture of property Plug, we take pride in providing unparalleled attention to the needs of our clients. We consistently build relationships, respect confidentiality, put value in doing things the right way, offer solutions, prioritize staying on the cutting edge, and strive to bring tremendous value to each client and transaction.</p>
        </div>
      </div>
    </section>
  )
}

export default Content
