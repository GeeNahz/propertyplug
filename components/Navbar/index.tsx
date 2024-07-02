"use client";
import Image from "next/image";
import logo from "@/public/PropertPlugLogo.svg";
import Link from "next/link";
import { Button } from "../common/button";
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { Nav } from "../common/data";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="flex bg-ui-dark w-full py-2 px-20 justify-between items-center fixed top-0">
      <div className="w-4/12">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[40px]" />
        </Link>
      </div>

      <div className="w-4/12 flex justify-between capitalize items-start">
        {Nav.map((v, i) => {
          return (
            <Link
              href={v.path}
              prefetch
              key={i}
              className={`${
                path === v.path ? "font-semibold" : "font-extralight"
              } text-white text-xs flex justify-between flex-col items-center`}
            >
              {v.title}
              {path === v.path && <GoDotFill size={10} />}
            </Link>
          );
        })}
      </div>

      <div className="w-4/12 flex justify-end">
        <Button title="book consultancy" />
      </div>
    </div>
  );
};

export default Navbar;
