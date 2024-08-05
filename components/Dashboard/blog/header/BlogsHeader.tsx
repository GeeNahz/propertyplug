// import { useState } from "react";
// import { Navigator } from "@/components/Blog";
import Breadcrumb, {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import Link from "next/link";
import Header from "../../header";
import {
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";

export default function BlogsHeader({ publish }: { publish: string }) {
  return (
    <Header>
      {publish === "all" && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/blogs/unpublished">Unpublished</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/blogs/published">Published</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>All</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
      {publish === "publish" && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/blogs/unpublished">Unpublished</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Published</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/blogs">All</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
      {publish === "unpublish" && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Unpublished</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/blogs/published">Published</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/blogs">All</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <Link
        href={"/dashboard/blogs/create"}
        className="bg-ui-dark capitalize font-semibold text-sm py-3 px-6 text-white rounded-full"
      >
        Create Blog
      </Link>
    </Header>
  );
}
