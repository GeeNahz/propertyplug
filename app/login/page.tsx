"use client";
import { LoginForm } from "@/components/Login";
import Image from "next/image";
import logo from "@/public/PropertPlugLogo.svg";
import { dataUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("session")) {
      router.push("/dashboard");
    }
  }, [router]);
  return (
    <main className="w-full md:min-h-screen flex items-center justify-center">
      <div className="relative flex w-full max-w-[400px] flex-col space-y-2.5 p-4 max-md:mt-32 rounded-xl shadow-2xl max-md:shadow">
        <div className="flex items-center justify-center gap-5 text-white h-20 w-full rounded-lg bg-ui-dark/80 p-3 md:h-36">
          <div className="size-20 md:size-20 h-full">
            <Image
              placeholder="blur"
              blurDataURL={dataUrl}
              src={logo}
              alt="logo"
              height={100}
              width={100}
              className="size-full object-center object-contain"
            />
          </div>
          <p className="text-2xl font-bold">Property Plug</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
