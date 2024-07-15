"use client"


import { useState } from "react";
import SearchFilters from "./SearchFilters";
import Socials from "./Socials";
import Title from "./Title";
import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";
import { Navigator } from "..";

const Header = () => {
  const [
    navigatorItems,
    setNavigatorItems
  ] = useState<Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]>([
    { title: "Home", path: "/", },
    { title: "Blogs", path: "/blog" },
  ]);
  return (
    <>
      <div className="sticky top-[63px]">
        <Navigator items={navigatorItems} /> {/* brought this here to make this the client component */}
      </div>
      <section className="px-20 py-12">
        <div className="section-title flex justify-between items-start w-full mb-11">
          <Title />

          <Socials />
        </div>
        <SearchFilters />
      </section>
    </>
  );
};

export default Header;
