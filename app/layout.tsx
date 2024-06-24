import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Property Plug",
  description: "Generated by create next app",
  creator: "Helix Fons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden w-full">
        <AntdRegistry>
          <nav className="z-50 relative">
            <Navbar />
          </nav>
          <div className="z-0">{children}</div>
        </AntdRegistry>
      </body>
    </html>
  );
}
