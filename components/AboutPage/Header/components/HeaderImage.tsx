import imgPeople from '@/components/AboutPage/resources/about-us-people.jpg'
import imgHandshake from '@/components/AboutPage/resources/about-us-handshake.jpg'

import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-center w-full h-content">
      <div className="rounded-[20px] overflow-hidden h-auto md:h-96 w-full md:w-[721px]">
        <Image src={imgPeople} alt="about-us-people" width={700} height={350} className="object-center object-cover size-full" />
      </div>

      <div className="rounded-[20px] overflow-hidden h-auto md:h-96 w-full md:w-[463px]">
        <Image src={imgHandshake} alt="about-us-handshake" width={600} height={600} className="object-center object-cover size-full" />
      </div>
    </div>
  )
}

export default HeaderImage
