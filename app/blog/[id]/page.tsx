import React from 'react'
import { Navigator } from '@/components/Blog';
import { BreadCrumbType } from "@/components/common/type";
import Image from 'next/image';

import imgs5 from "@/components/Landing_Page/Blog_Post/images/ppt5.jpg";
import Link from 'next/link';


const Page = ({ params }: { params: { id: string } }) => {
  const navigatorItems: BreadCrumbType[] = [<Link href="/blog">Blogs</Link>, params.id.replaceAll("-", " ")]

  return (
    <section className="mt-28">
      <div className="top-[63px] w-full fixed bg-white z-10">
        <Navigator items={navigatorItems} />
      </div>

      <div className="px-20 py-20">
        <div className="h-[450px] w-full overflow-hidden rounded-[30px]">
          <Image width={1240} height={450} src={imgs5} alt={params.id} className="size-full object-cover bg-no-repeat bg-cover" />
        </div>

        Blog Post {params.id}
      </div>
    </section>
  )
}

export default Page
