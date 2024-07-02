import SearchFilters from "./SearchFilters";
import Socials from "./Socials";
import Title from "./Title";

const Header = () => {
  return (
    <section className="px-20 py-12">
      <div className="section-title flex justify-between items-start w-full mb-11">
        <Title />

        <Socials />
      </div>
       <SearchFilters />
    </section>
  );
};

export default Header;
