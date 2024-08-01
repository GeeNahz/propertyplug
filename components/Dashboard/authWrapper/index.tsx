"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (screenSize !== null) {
      console.log(screenSize);
      if (screenSize <= 1200) {
        alert(
          "Admin Dashboard not suitable for mobile. Please use Desktop💻🖥️"
        );
        router.push("/login");
      }
    }
  }, [screenSize, router]);
  if (typeof window !== "undefined") {
    const session = localStorage.getItem("session");
    if (!session) {
      router.push("/login");
    }
  }

  return <>{children}</>;
}
