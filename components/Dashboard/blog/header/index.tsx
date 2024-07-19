'use client'

import { useState } from "react";
import { Navigator } from "@/components/Blog";
import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";
import Link from "next/link";

export default function Header() {
  const [
    navigatorItems,
    setNavigatorItems,
  ] = useState<Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]>([
    { title: "All", path: "dashboard/blogs/", },
    { title: "Published", path: "dashboard/blogs/published", },
    { title: "Unpublished", path: "dashboard/blogs/unpublished", },
  ]);

  return (
    <div className="w-full flex items-center justify-between">
      <Navigator items={navigatorItems} />

      <Link href={'/dashboard/blogs/create'} className="bg-ui-dark capitalize font-semibold text-sm py-3 px-6 text-white rounded-full">Create Blog</Link>
    </div>
  )
}
