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
      <div className="sticky z-50 top-[63px]">
        <Navigator title="Blogs" items={navigatorItems} /> {/* brought this here to make this the client component */}
      </div>
      <section className="px-7 md:px-20 py-6 md:py-12">
        <div className="section-title flex flex-col md:flex-row gap-7 md:gap-0 justify-between items-start w-full mb-9 md:mb-11">
          <Title />

          <Socials />
        </div>
        <SearchFilters />
      </section>
    </>
  );
};

export default Header;
