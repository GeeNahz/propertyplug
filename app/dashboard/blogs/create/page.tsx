import { CreateForm } from "@/components/Dashboard";
import { Suspense } from "react";
import Loading from "../../loading";

export default function Page() {
  const user = "Admin";
  return (
    <div className="flex flex-col min-h-full max-h-full">
      <Suspense fallback={<Loading/>}>
        <CreateForm user={user} />
      </Suspense>
    </div>
  );
}
