import Header from "@/components/common/header";
import React, { Suspense } from "react";
import imgs from "./images/pp2.jpg";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { blogGallery } from "@/components/common/data";
import Link from "next/link";
import { dataUrl } from "@/lib/utils";
import BlogList from "./blogList";
import Loading from "@/components/common/loader";
import { LoaderCircleIcon } from "lucide-react";

const Blog = async () => {
  // tall and big for grid structure

  return (
    <section className="container max-w-screen-xl mx-auto">
      <Header
        title="Property Plug Blog Posts"
        desc="Explore explicit Content Just for you"
      />

      <Suspense fallback={<LoaderCircleIcon className="animate-spin" />}>
        <BlogList />
      </Suspense>
      <Link href="/blog" className="flex justify-center w-full mt-6">
        <button className="py-2 px-3 md:p-3 rounded-[32px] font-medium text-xs capitalize w-max bg-[#EF4444] text-white">
          view more
        </button>
      </Link>
    </section>
  );
};

export default Blog;
