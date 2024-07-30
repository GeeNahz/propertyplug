import { Navbar, Sidebar } from "@/components/Dashboard";
import AuthWrapper from "@/components/Dashboard/authWrapper";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <div className="flex bg-ui-dash-gray p-4 max-h-screen h-screen">
        <div
          className="bg-ui-primary-soft min-h-full h-full"
          style={{ flex: 1 }}
        >
          <Sidebar />
        </div>

        <Suspense fallback={<Loading/>}>
          <div className="px-5 h-full flex flex-col" style={{ flex: 4 }}>
            <Navbar />
            <div className="py-5 h-full overflow-y-scroll">{children}</div>
          </div>
        </Suspense>
      </div>
    </AuthWrapper>
  );
}
