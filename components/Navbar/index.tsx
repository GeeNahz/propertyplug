"use client";
import Image from "next/image";
import logo from "@/public/PropertPlugLogo.svg";
import logoAlt from "@/public/PropertyPlugLogoAlt.svg";
import Link from "next/link";
import { Button } from "../common/button";
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { Nav } from "../common/data";
import clsx from "clsx";
import { Dropdown, MenuProps, Popover } from "antd";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const path = usePathname();

  const navbarClass = clsx(
    "flex w-screen md:w-full py-2 px-7 md:px-20 justify-between items-center fixed top-0",
    {
      "bg-ui-dark": path === "/",
      "bg-white": path !== "/",
    },
  );

  const linkClass = clsx(
    "text-xs flex justify-between flex-col items-center",
    {
      "text-white": (path === "/"),
      "text-ui-dark": (path !== "/"),
    },
  );

  const [openPopMenu, setOpenPopMenu] = useState(false)

  function handleOpenChange(value: boolean) {
    setOpenPopMenu(value)
  }

  return (
    <div className={navbarClass}>
      <div className="md:w-4/12">
        <Link href="/">
          {path === "/"
            ? <Image src={logo} alt="logo" className="w-[40px]" />
            : <Image src={logoAlt} alt="logo" className="w-[40px]" />
          }
        </Link>
      </div>

      <div className="hidden md:w-4/12 md:flex justify-between capitalize items-start">
        {Nav.map((v, i) => {
          return (
            <Link
              href={v.path}
              prefetch
              key={i}
              className={linkClass + `${path === v.path ? " font-semibold" : " font-extralight"}`}
            >
              {v.title}
              {path === v.path && <GoDotFill size={10} />}
            </Link>
          );
        })}
      </div>

      <div className="hidden w-4/12 md:flex justify-end">
        <Button url="/consultancy" title="book consultancy" />
      </div>

      <Popover
        content={
          <ul className="space-y-3">
            {Nav.map((v, i) => (
              <li key={i}>
                <Link
                  href={v.path}
                  prefetch
                  className={`min-w-56 text-sm flex justify-between flex-col items-center py-4 px-4 rounded-md transition-all hover:bg-ui-desc/15 text-ui-dark hover:text-ui-dark capitalize ${path === v.path ? " bg-ui-desc/15 font-semibold" : " bg-ui-desc/5 font-extralight"}`}
                >
                  {v.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={'/consultancy'}
                prefetch
                className={`min-w-56 text-sm flex justify-between flex-col items-center py-4 px-4 rounded-md transition-all hover:bg-ui-desc/15 text-ui-dark hover:text-ui-dark capitalize ${path.startsWith('/consultancy') ? " bg-ui-desc/15 font-semibold" : " bg-ui-desc/5 font-extralight"}`}
              >
                book consultancy
              </Link>
            </li>
          </ul>
        }
        trigger={'click'}
        open={openPopMenu}
        onOpenChange={handleOpenChange}
      >
        <button className="size-6">
          <FaBars className={`${path === '/' ? 'text-white' : 'text-ui-dark'} size-full`} />
        </button>
      </Popover>
    </div>
  );
};

export default Navbar;
