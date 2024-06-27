import { ScrollTestimony } from "./components/ScrollTestimony";


const Testimonial = () => {

  return (
    <section className="my-28 h-full w-full overflow-x-hidden">
      <h3 className="text-xl text-black font-semibold text-center">
        What our Clients are saying about us
      </h3>
      <div className="w-full relative">
        <ScrollTestimony/>
      </div>
    </section>
  );
};

export default Testimonial;
