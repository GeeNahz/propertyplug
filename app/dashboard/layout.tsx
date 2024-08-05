import { Navbar, Sidebar } from "@/components/Dashboard";
import { Suspense } from "react";
import Loading from "./loading";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("session");
  if (!token) {
    redirect("/login");
  }
  return (
    <main>
      {/* mobile behaviour */}
      <div className="xl:hidden flex justify-center items-center h-screen">
        <p className="font-medium text-sm px-4 text-center text-balance">
          Admin Dashboard not suitable for mobile. Please use Desktop💻🖥️
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden xl:flex bg-ui-dash-gray p-4 max-h-screen h-screen">
        <div
          className="bg-ui-primary-soft min-h-full h-full"
          style={{ flex: 1 }}
        >
          <Sidebar />
        </div>

        <Suspense fallback={<Loading />}>
          <div className="px-5 h-full flex flex-col" style={{ flex: 4 }}>
            <Navbar />
            <div className="py-5 h-full overflow-y-scroll">{children}</div>
          </div>
        </Suspense>
      </div>
    </main>
  );
}
