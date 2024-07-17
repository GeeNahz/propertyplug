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

const Navbar = () => {
  const path = usePathname();

  const navbarClass = clsx(
    "flex w-full py-2 px-20 justify-between items-center fixed top-0",
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

  return (
    <div className={navbarClass}>
      <div className="w-4/12">
        <Link href="/">
        { path === "/"
          ? <Image src={logo} alt="logo" className="w-[40px]" />
          : <Image src={logoAlt} alt="logo" className="w-[40px]" />
        }
        </Link>
      </div>

      <div className="w-4/12 flex justify-between capitalize items-start">
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

      <div className="w-4/12 flex justify-end">
        <Button url="/consultancy" title="book consultancy" />
      </div>
    </div>
  );
};

export default Navbar;
