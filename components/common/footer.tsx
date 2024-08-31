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
import { dataUrl } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-[#0B2831] py-8 px-7 md:px-20 w-full">
      <Link href="/" className="w-[80px] max-w-max md:hidden">
        <Image
          placeholder="blur"
          blurDataURL={dataUrl}
          src={Logo}
          alt="logo"
          className=""
        />
      </Link>
      <div className="flex gap-4 md:gap-12  items-start md:items-center">
        <Link href="/" className="w-[100px] max-md:hidden">
          <Image
            placeholder="blur"
            blurDataURL={dataUrl}
            src={Logo}
            alt="logo"
            className=""
          />
        </Link>
        <div className="w-full flex flex-col md:flex-row mt-12">
          <div className="flex-1 flex flex-col gap-4 max-md:gap-1 w-full md:w-max mb-6 md:mb-0">
            <h6 className="text-white font-semibold text-sm">Pages</h6>

            <nav className="flex flex-col flex-wrap md:flex-nowrap text-white/70 capitalize text-xs gap-2 md:gap-4">
              {Nav.map((v, i) => (
                <Link
                  key={i}
                  href={v.path}
                  className="transition-all hover:text-white/100"
                >
                  {v.title}
                </Link>
              ))}
              <Link href="/" className="transition-all hover:text-white/100">
                request
              </Link>

              <Link
                href="/login"
                className="transition-all hover:text-white/100"
              >
                login
              </Link>
            </nav>
          </div>

          <div className="flex-1 flex flex-col gap-4 max-md:gap-1 w-full md:w-max mb-6 md:mb-0">
            <h6 className="text-white font-semibold text-sm">Real Estate</h6>

            <nav className="flex flex-col flex-wrap md:flex-nowrap text-white/70 capitalize text-xs gap-2 md:gap-4">
              {Estate.map((item, index) => {
                let linkHref

                if (item.toLowerCase().includes("sale")) {
                  linkHref = "/consultancy?tab=buy";
                } else if (item.toLowerCase().includes("rent")) {
                  linkHref = "/consultancy?tab=rent";
                } else if (item.toLowerCase().includes("rent")) {
                  linkHref = "/consultancy?tab=lease";
                }
                else{
                  linkHref = "#"
                }

                return (
                  <Link
                    key={index}
                    href={linkHref}
                    className="transition-all hover:text-white/100"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 flex flex-col space-y-4 max-md:space-y-1 gap-4 max-md:gap-0 md:gap-0 items-end w-full">
            <h6 className="text-white font-semibold text-sm self-start">
              Contact Us
            </h6>

            <nav className="flex flex-col flex-wrap md:flex-nowrap text-white/70 text-xs gap-2 md:gap-4 self-start">
              {[
                "+234 912 460 4075",
                "+234 903 081 0919",
                "info@propertyplugng.com",
              ].map((v, i) => (
                <Link
                  href={`${
                    v.includes("info") ? "mailto:info@propertyplugng.com" : "#"
                  }`}
                  key={i}
                  className={`transition-all hover:text-white/100 whitespace-nowrap ${
                    v.includes("info") && "underline font-semibold"
                  }`}
                >
                  {v}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 self-start gap-4 max-md:gap-2">
          <h6 className="text-white font-semibold text-sm self-start">
            Socials
          </h6>
          <div className="flex max-md:hidden items-center gap-8">
            {SocialLinks.map((v, i) => {
              return (
                <Link
                  href={v.url}
                  key={i}
                  className="capitalize transition-all text-white/70 hover:text-white/100 text-xs"
                >
                  {v.title}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-8 self-start max-md:flex-col max-md:gap-2 max-md:items-start">
            {SocialLinks.map((v, i) => {
              return (
                <Link
                  href={v.url}
                  target="_blank"
                  key={i}
                  className="bg-white h-8 w-8 p-2 rounded-full"
                >
                  {v.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* newletter */}
      <div className=" w--full flex flex-col-reverse gap-4 text-white/70">
        <h5 className="max-md:text-left text-right text-xs max-sm:text-[11px] font-extralight">
          <span className="font-semibold">Stay Informed:</span> Subscribe to Our
          Newsletter for Regular Updates.
        </h5>

        <div className="h-max w-full md:w-max max-sm:mt-6  relative self-end justify-self-end">
          <input
            placeholder="input your email address here"
            className="rounded-[20px] border w-full md:w-[350px] px-4 py-3 bg-transparent placeholder:text-xs placeholder:capitalize placeholder:font-medium"
          />

          <LuSendHorizonal className="absolute top-4 right-5" />
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-3 border-t border-white/70">
        <small className="text-xs text-white/70">
          &copy; {new Date().getFullYear()} Property Plug, All Rights Reserved
        </small>
        <div className="flex justify-between items-center gap-7">
          <small className="transition-all text-white/70 hover:text-white/100 text-xs capitalize">
            support
          </small>
          <small className="transition-all text-white/70 hover:text-white/100 text-xs capitalize">
            privacy policy
          </small>
          <small className="transition-all text-white/70 hover:text-white/100 text-xs capitalize">
            terms of use
          </small>
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
    url: "https://www.linkedin.com/company/propertyplug",
  },
  {
    title: "x",
    icon: <FaXTwitter />,
    url: "https://x.com/propertyplugngr?s=21&t=MSYMhx7Evn6oXwhwVmOj6A",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/propertyplugglobal",
  },
  {
    title: "facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=100095368216603&mibextid=kFxxJD",
  },
];

const Estate = [
  "Property for sale",
  "Land for sale",
  "Sell Your Property",
  "Rent out your property",
  "Join our investment club",
];
