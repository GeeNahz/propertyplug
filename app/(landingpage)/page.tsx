import { Suspense, lazy } from "react";
import Loading from "./loading"; // Adjust the path to your loading component

// Lazy load components
const HeroSection = lazy(() => import("../../components/Landing_Page/Hero_Section"));
const Blog = lazy(() => import("../../components/Landing_Page/Blog_Post"));
const OurService = lazy(() => import("../../components/Landing_Page/Our_services"));
const FeatureProject = lazy(() => import("../../components/Landing_Page/Feature_Project"));
const MakeUsSpecial = lazy(() => import("../../components/Landing_Page/Make_Us_Special"));
const Testimonial = lazy(() => import("../../components/Landing_Page/Testimonials"));

export default function Home() {
  return (
    <main className="w-full">
      <Suspense fallback={<Loading />}>
        <HeroSection />
      </Suspense>
      <div className="w-full md:px-20 mt-8">
        <Blog />

        <Suspense fallback={<Loading />}>
          <OurService />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <FeatureProject />
        </Suspense>
      </div>
      <div className="hidden md:block">
        <Suspense fallback={<Loading />}>
          <MakeUsSpecial />
        </Suspense>
      </div>
      <div className="w-full md:px-20 mt-8">
        <Suspense fallback={<Loading />}>
          <Testimonial />
        </Suspense>
      </div>
    </main>
  );
}

