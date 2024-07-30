import { CreateForm } from "@/components/Dashboard";
import { Suspense } from "react";
import Loading from "../../loading";

export default async function Page() {
  const user = "Admin";
  return (
    <div className="flex flex-col min-h-full">
      <Suspense fallback={<Loading/>}>
        <CreateForm user={user} />
      </Suspense>
    </div>
  );
}
