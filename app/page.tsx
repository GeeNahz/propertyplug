import {
  Blog,
  FeatureProject,
  HeroSection,
  MakeUsSpecial,
  OurService,
  Testimonial,
} from "../components/Landing_Page";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="w-full px-20 mt-8">
        <Blog />
      </div>
      <MakeUsSpecial />
      <div className="w-full px-20 mt-8">
        <FeatureProject />
        <OurService />
        <Testimonial />
      </div>
    </main>
  );
}
