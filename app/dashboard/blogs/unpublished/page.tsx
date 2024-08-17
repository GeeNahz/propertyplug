import { getBlogsWithQueryParams } from '@/lib/actions';
import React, { Suspense } from 'react'
import Loading from '../loading';
import { BlogsHeader } from '@/components/Dashboard/blog/header';
import { Tiles } from '@/components/Dashboard';
import { TBlogPost } from '@/components/common/type';
import { BASE_URL } from '@/lib/api_url';

export default async function Unpublished(){
  const url = `${BASE_URL}/blogs?publish=${false}`
  const blogs = await getBlogsWithQueryParams(url);
  const unpublished = blogs.result as TBlogPost[]
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <div className="header">
          <BlogsHeader publish="unpublish" />
        </div>

        <div className="main">
          <Tiles posts={unpublished} />
        </div>
      </div>
    </Suspense>
  );
}
