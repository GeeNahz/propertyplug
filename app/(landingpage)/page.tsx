import {
  Blog,
  FeatureProject,
  HeroSection,
  MakeUsSpecial,
  OurService,
  Testimonial,
} from "@/components/Landing_Page";

export default async function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="w-full md:px-20 mt-8">
        <Blog />
        <OurService />
        <FeatureProject />
      </div>
      <div className="hidden md:block">
        <MakeUsSpecial />
      </div>
      <div className="w-full md:px-20 mt-8">
        <Testimonial />
      </div>
    </main>
  );
}
