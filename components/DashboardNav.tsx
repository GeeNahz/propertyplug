"use client"
import Image from "next/image";
import React from "react";
import profileImg from "@/public/noavatar.jpg";
import { decrypt } from "@/lib/utils";

export const DashboardNav = () => {
  const session = localStorage.getItem("session") as string;
  console.log(session);
    const user = decrypt(session);
    console.log(user);
  return (
    <div className="profile-img size-11 rounded-full overflow-hidden border-2 border-ui-dark/50 bg-ui-desc">
      {/* <Image
        src={session?.user?.image || profileImg}
        alt={session?.user?.email || "profile"}
        width={56}
        height={56}
        className="object-contain object-center"
      /> */}
    </div>
  );
};
