import Navbar from "@/components/Navbar";
import Footer from "@/components/common/footer";
import { Moda } from "@/components/modal";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col relative">
      <nav className="z-50 relative">
        <Navbar />
      </nav>
      <main>{children}</main>
      <Footer />
      <Moda />
    </main>
  )
}
