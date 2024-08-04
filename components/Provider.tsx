'use client';
import { Statecontext } from "@/hook/statecontext";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export function Providers({ children }: {children:React.ReactNode}) {
  return (
    <AntdRegistry>
    <Statecontext>
      <main className="z-0 min-h-full">{children}</main>
    </Statecontext>
  </AntdRegistry>
  );
}
