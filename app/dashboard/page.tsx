import {
  Cards,
  ChartWrapper,
  Rightbar,
  RightTab,
} from "@/components/Dashboard";
import { Suspense } from "react";
import Loading from "./loading";

const Page = async () => {
  return (
    <>
      <main className="h-full flex-auto flex gap-5 lg:gap-8 max-xl:hidden">
        <div className="flex flex-col gap-5 lg:gap-8" style={{ flex: 3 }}>
          <Suspense fallback={<div className="h-36 w-full flex items-center justify-center"><Loading /></div>}>
            <Cards />
          </Suspense>
          <div className="flex-auto w-full h-fit bg-white rounded-2xl">
            <Suspense fallback={<div className="h-full w-full flex items-center justify-center"><Loading /></div>}>
              <ChartWrapper />
            </Suspense>
          </div>
        </div>

        <Rightbar>
          <Suspense fallback={<Loading />}>
            <RightTab />
          </Suspense>
        </Rightbar>
      </main>
      <main className="xl:hidden flex justify-center items-center">
        <p className="text-black text-sm capitalize">
          not suitable for a mobile 📳
        </p>
      </main>
    </>
  );
};

export default Page;
