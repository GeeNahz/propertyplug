"use client"

import Link from "next/link";
import { Breadcrumb } from "antd";
import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";

type Props = {
  items?: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
  title?: string;
};

const BreadCrumbs = ({ title, items }: Props) => {
  function itemRender(currentRoute: any, params: any, items: any, paths: any) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;
    const isFirst = currentRoute?.path === items[0]?.path;

    return isLast ? (
      <span className="text-sm text-gray-600 font-light capitalize">{currentRoute.title}</span>
    ) : isFirst ? (
      <Link href={`/`}>
        {currentRoute.title}
      </Link>
    ) : (
      <Link href={`${paths.join("/")}`}>
        {currentRoute.title}
      </Link>
    );
  }

  return (
    <section className="flex justify-between items-center py-4 px-2 md:px-20 bg-[#FCFCFC] backdrop-blur-sm">
      {title && (<p className="font-semibold text-sm text-opacity-60 text-gray-500">{title}</p>)}

      <Breadcrumb
      className="hidden md:block"
        itemRender={itemRender}
        items={items}
      />
    </section>
  );
};

export default BreadCrumbs;
