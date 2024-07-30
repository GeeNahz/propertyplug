import Loading from "@/app/dashboard/loading";
import { EditForm } from "@/components/Dashboard";
import { getBlog } from "@/lib/actions";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getBlog(params.id);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex flex-col min-h-full">
        <EditForm post={post} />
      </div>
    </Suspense>
  );
}
