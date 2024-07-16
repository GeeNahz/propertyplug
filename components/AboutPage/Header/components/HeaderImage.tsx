import imgPeople from '@/components/AboutPage/resources/about-us-people.jpg'
import imgHandshake from '@/components/AboutPage/resources/about-us-handshake.jpg'

import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div className="flex justify-between gap-8 items-center w-full h-content">
      <div className="rounded-[20px] overflow-hidden h-96 w-[721px]">
        <Image src={imgPeople} alt="about-us-people" width={700} height={350} className="object-center object-cover size-full" />
      </div>

      <div className="rounded-[20px] overflow-hidden h-96 w-[463px]">
        <Image src={imgHandshake} alt="about-us-handshake" width={600} height={600} className="object-center object-cover size-full" />
      </div>
    </div>
  )
}

export default HeaderImage
