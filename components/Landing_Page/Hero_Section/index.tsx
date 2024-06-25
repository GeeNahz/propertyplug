import { DropList } from "@/components/Landing_Page/Hero_Section/heroDropDown";

const HeroSection = () => {
  return (
    <section className="h-screen bg_hero flex items-center">
      <div className="h-full bg-transparent w-full flex flex-col justify-center items-center py-3 backdrop-blur-sm">
        <small className="text-zinc-400 text-sm">
          Excellence from Abuja Nigeria
        </small>
        <h1 className="text-white text-center font-bold text-6xl my-2">
          The <span className="text-[#FF4A55]">Ultimate</span> Real Estate{" "}
          <br /> Experience
        </h1>
        <small className="text-zinc-400 text-base font-medium text-center mt-2">
          We prioritize our clients' needs and are committed to <br />{" "}
          delivering tangible results.
        </small>
        <DropList/>
      </div>
    </section>
  );
};

export default HeroSection;
