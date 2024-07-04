import React from 'react'
import { Navigator } from '@/components/Blog';
import { BreadCrumbType } from "@/components/common/type";
import Image from 'next/image';

import imgs5 from "@/components/Landing_Page/Blog_Post/images/ppt5.jpg";
import Link from 'next/link';
import { Divider } from 'antd';
import { BlogHeader, BlogContent, FeaturedArticle } from '@/components/Blog/BlogPost';


const Page = ({ params }: { params: { id: string } }) => {
  const navigatorItems: BreadCrumbType[] = [<Link href="/blog">Blogs</Link>, params.id.replaceAll("-", " ")]

  const blogPost = {
    id: 1,
    title: "what makes this house so special?",
    owner: "Eric Ginger",
    created_at: "June 1, 2024",
    category: "Consulting & Building",
    like: false,
    body: `
    Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.

      Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make

    Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content.Explore every content that will help you make informed decisions and educate you on everything Real estate related. You’ll have access to curated content. Explore every content that will help you make
    `,
  };

  return (
    <section className="mt-28">
      <div className="top-[63px] w-full fixed bg-white z-10">
        <Navigator items={navigatorItems} />
      </div>

      <div className="px-20 py-20 bg-gradient-to-b from-white from-15% to-gray-50">
        <div className="h-[450px] w-full overflow-hidden rounded-[30px]">
          <Image width={1240} height={450} src={imgs5} alt={params.id} className="size-full object-cover bg-no-repeat bg-cover" />
        </div>

        <div className="body w-11/12 mx-auto p-[90px] rounded-[30px] bg-white -translate-y-24 space-y-14 divide-gray-500">
          <BlogHeader post={blogPost} />

          <Divider dashed={true} />

          <BlogContent body={blogPost.body} />
        </div>

        <FeaturedArticle />
      </div>
    </section>
  )
}

export default Page
