import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Provider";

export const metadata: Metadata = {
  title: "Property Plug",
  description:
    "Property Plug is an urban contemporary real estate company dedicated to the delivery of premium services within the real estate industry.",
  creator: "Helix Fons",
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
