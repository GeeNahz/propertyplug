"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import img from './noavatar.jpg'
import { useSearchParams } from "next/navigation";
import { dasboardPass } from "@/lib";

export default function NavSide() {
  // const [user, setUser] = useState<any>(null);
  // const search = useSearchParams();
  // const tokenParam = search.get("id") as string;

  // useEffect(() => {
  //   const fetchUser = async (token: string) => {
  //     try {
  //       const user = await dasboardPass(token);
  //       setUser(user);
  //     } catch (error) {
  //       console.error("Failed to fetch user:", error);
  //     }
  //   };
  //   fetchUser(tokenParam);
  // }, []);

  // console.log(user);
  return (
    <div className="profile-img size-11 rounded-full overflow-hidden border-2 border-ui-dark/50 bg-ui-desc">
        <Image
          src={img} // Provide a default image path
          alt="profile"
          width={56}
          height={56}
          className="object-contain object-center"
        />
    </div>
  )
}
