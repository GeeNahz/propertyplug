// import { useState } from "react";
// import { Navigator } from "@/components/Blog";
import Breadcrumb, { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";
import Link from "next/link";
import Header from "../../header";
import { BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";

export default function BlogsHeader() {
  // const [
  //   navigatorItems,
  //   setNavigatorItems,
  // ] = useState<Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]>([
  //   { title: "All", path: "/dashboard", },
  //   { title: "Published", path: "/dashboard/blogs", },
  //   { title: "Unpublished", path: "/dashboard/blogs/unpublished", },
  // ]);

  return (
    <Header>
      {/* <Navigator items={navigatorItems} /> */}

      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/dashboard/blogs/unpublished">Unpublished</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator /> */}
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/dashboard/blogs">Published</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator /> */}
        <BreadcrumbItem>
          <BreadcrumbPage>All</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

      <Link href={'/dashboard/blogs/create'} className="bg-ui-dark capitalize font-semibold text-sm py-3 px-6 text-white rounded-full">Create Blog</Link>
    </Header>
  )
}

