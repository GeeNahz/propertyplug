import React from "react";
import Logo from "@/public/PropertPlugLogo.svg";
import Image from "next/image";
import { LuSendHorizonal } from "react-icons/lu";
import { Nav } from "./data";
import Link from "next/link";
import { Social } from "./type";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B2831] py-12 px-7 md:px-20 self-end w-full">
      <div className="flex gap-4 md:gap-0 justify-between items-start md:items-center">
        <Link href='/'><Image src={Logo} alt="logo" /></Link>

        <div className="flex flex-col gap-4 text-white/70">
          <h5 className=" text-right">Stay Informed:</h5>

          <h5 className="text-right text-sm md:text-base">
            Subscribe to Our Newsletter for Regular Updates.
          </h5>

          <div className="h-max w-full relative">
            <input
              placeholder="input your email address here"
              className="rounded-[20px] border w-full md:w-[500px] px-4 py-3 bg-transparent placeholder:text-xs placeholder:font-extralight"
            />

            <LuSendHorizonal className="absolute top-4 right-5" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row mt-12 justify-between">
        <div className="flex-1 flex flex-col gap-4 w-full md:w-max mb-6 md:mb-0">
          <h6 className="text-white font-semibold text-sm">Pages</h6>

          <nav className="flex flex-wrap md:flex-nowrap text-white/70 capitalize text-xs gap-2 md:gap-4">
            {Nav.map((v, i) => (
              <Link key={i} href={v.path} className="transition-all hover:text-white/100">
                {v.title} <span className="ml-2 md:ml-4">|</span>
              </Link>
            ))}
            <Link href="/" className="transition-all hover:text-white/100">
            request <span className="ml-2 md:ml-4">|</span>
            </Link>

            <Link href="/login" className="transition-all hover:text-white/100">login</Link>
          </nav>
        </div>

        <div className="flex-1 flex flex-col gap-4 md:gap-0 items-end justify-between w-full">
          <h6 className="text-white font-semibold text-sm self-start">
            Contact Us
          </h6>

          <nav className="flex flex-wrap md:flex-nowrap text-white/70 capitalize text-xs gap-2 md:gap-4 self-start">
            {[
              "+234 912 460 4075",
              "+234 903 081 0919",
              "info@propertyplugng.com",
            ].map((v, i) => (
              <Link href={"#"} key={i} className="transition-all hover:text-white/100 whitespace-nowrap">
                {v} {i != 2 && <span className="ml-2 md:ml-4">|</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12 justify-center gap-8">
        <div className="flex items-center gap-8">
          {SocialLinks.map((v, i) => {
            return (
              <Link href={v.url} key={i} className="capitalize transition-all text-white/70 hover:text-white/100 text-xs">
                {v.title}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-8">
          {SocialLinks.map((v, i) => {
            return (
              <Link
                href={v.url}
                key={i}
                className="bg-white h-8 w-8 p-2 rounded-full"
              >
                {v.icon}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-3 border-t border-white/70">
          <small className="text-xs text-white/70">&copy; {new Date().getFullYear()} Property Plug, All Rights Reserved</small>
          <div className="flex justify-between items-center gap-7">
            <small className="transition-all text-white/70 hover:text-white/100 text-xs capitalize">support</small>
            <small className="transition-all text-white/70 hover:text-white/100 text-xs capitalize">privacy policy</small>
            <small className="transition-all text-white/70 hover:text-white/100 text-xs capitalize">terms of use</small>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialLinks: Social = [
  {
    title: "linkedin",
    icon: <FaLinkedinIn />,
    url: "#",
  },
  {
    title: "x",
    icon: <FaXTwitter />,
    url: "#",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    url: "#",
  },
  {
    title: "facebook",
    icon: <FaFacebookF />,
    url: "#",
  },
];
