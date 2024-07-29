"use client"
import { useRouter} from "next/navigation";
import React from "react";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    if (typeof window !== 'undefined') {
        const session = localStorage.getItem('session');
        if (!session) {
          // Redirect to login if no session found
          router.push('/login');
        }
      }
  return <>{children}</>;
}
