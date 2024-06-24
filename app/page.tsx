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
        <MakeUsSpecial />
        <FeatureProject />
        <OurService />
        <Testimonial />
      </div>
    </main>
  );
}
