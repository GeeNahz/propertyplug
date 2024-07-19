import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Statecontext } from "@/hook/statecontext";

export const metadata: Metadata = {
  title: "Property Plug",
  description: "Property Plug is an urban contemporary real estate company dedicated to the delivery of premium services within the real estate industry.",
  creator: "Helix Fons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative overflow-x-hidden w-full min-h-screen flex flex-col justify-between">
        <AntdRegistry>
          <Statecontext>
            <div className="z-0 min-h-full">{children}</div>
          </Statecontext>
        </AntdRegistry>
      </body>
    </html>
  );
}
