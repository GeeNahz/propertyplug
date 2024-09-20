import BlogPostsGrid from "@/components/Blog/BlogPostsGrid";
import { Button } from "@/components/common/button";
import { TBlogPost } from "@/components/common/type";
import { DateConverter } from "@/components/Dashboard";
import { getBlogsWithQueryParams } from "@/lib/actions";
import { BASE_URL } from "@/lib/api_url";
import Image from "next/image";
import React from "react";

export default async function BlogList() {
  const url = `${BASE_URL}/blogs?publish=${true}`

  const response = await getBlogsWithQueryParams(url);
  const blogs = response.result as TBlogPost[]

  return (
    <BlogPostsGrid posts={blogs.slice(0, 4)} />
  );
}
