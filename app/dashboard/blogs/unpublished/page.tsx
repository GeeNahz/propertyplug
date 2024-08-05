import { getBlogs } from '@/lib/actions';
import React, { Suspense } from 'react'
import Loading from '../loading';
import { BlogsHeader } from '@/components/Dashboard/blog/header';
import { Tiles } from '@/components/Dashboard';
import { TBlogPost } from '@/components/common/type';

export default async function Unpublished(){
  const blogs = await getBlogs();
  const unpublished = blogs.result.filter((val:any) => !val.publish) 
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <div className="header">
          <BlogsHeader publish="unpublish" />
        </div>

        <div className="main">
          <Tiles posts={unpublished as TBlogPost[]} />
        </div>
      </div>
    </Suspense>
  );
}
