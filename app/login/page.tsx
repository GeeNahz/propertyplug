import { LoginForm } from "@/components/Login";
import Image from "next/image";
import logo from '@/public/PropertPlugLogo.svg'

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex items-center justify-center gap-5 text-white h-20 w-full items-end rounded-lg bg-ui-dark/80 p-3 md:h-36">
          <div className="size-20 md:size-20 h-full">
            <Image src={logo} alt="logo" height={100} width={100} className="size-full object-center object-contain" />
          </div>
          <p className="text-2xl font-bold">Property Plug</p>
        </div>
        <LoginForm />
      </div>
    </main>)
}
