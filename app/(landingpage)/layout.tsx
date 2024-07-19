import Navbar from "@/components/Navbar";
import Footer from "@/components/common/footer";
import { Moda } from "@/components/modal";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="z-50 relative">
        <Navbar />
      </nav>
      <div>{children}</div>
      <Footer />
      <Moda />
    </>
  )
}
