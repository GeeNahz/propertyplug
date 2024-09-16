import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: "Property Plug",
  description:
    "Property Plug is an urban contemporary real estate company dedicated to the delivery of premium services within the real estate industry.",
  creator: "Helix Fons",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative overflow-x-hidden w-full min-h-screen flex flex-col">
        <Providers>
          <NextTopLoader
            color="#FF1F1E"
            initialPosition={0.08}
          />

          {children}

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
