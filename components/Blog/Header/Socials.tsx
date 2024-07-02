import { FaInstagram } from "react-icons/fa6"
import { LiaFacebookSquare } from "react-icons/lia";
import { PiXLogo, PiYoutubeLogo } from "react-icons/pi";


const Socials = () => {
  return (
    <div className="social-icons flex gap-2">
      {/* switch span tags with anchor tags */}
      <a href="#" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <FaInstagram className="size-6 text-white" />
      </a>

      <a href="#" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <LiaFacebookSquare className="size-6 text-white" />
      </a>

      <a href="#" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <PiYoutubeLogo className="size-6 text-white" />
      </a>

      <a href="#" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <PiXLogo className="size-6 text-white" />
      </a>
    </div>
  );
};

export default Socials;
