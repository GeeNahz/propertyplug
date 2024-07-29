"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { decrypt } from "@/lib/utils";
import { BASE_URL } from "@/lib/apiConfig";

export default function NavSide() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const search = useSearchParams();
  const tokenParam = search.get("id");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (tokenParam) {
          const token = decrypt(tokenParam);
          const userId = (token as any)["ID"].split('"')[1];

          const response = await axios.get(`${BASE_URL}/users/${userId}`, {
            headers: {
              Authorization: tokenParam,
              "Content-Type": "application/json",
            },
          });
          if (response.data) {
            setUser(response.data);
            router.replace("/dashboard");
          }
          else{
            router.push('/login')
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [tokenParam]);

  console.log(user);
  return (
    <div className="profile-img size-11 rounded-full overflow-hidden border-2 border-ui-dark/50 bg-ui-desc">
      {/* Conditionally render image or a placeholder
      {user ? (
        <Image
          src={user.image || "/default-profile.png"} // Provide a default image path
          alt={user.email || "profile"}
          width={56}
          height={56}
          className="object-contain object-center"
        />
      ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}
