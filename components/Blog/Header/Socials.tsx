import { FaInstagram } from "react-icons/fa6"
import { LiaFacebookSquare } from "react-icons/lia";
import { PiXLogo, PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link";


const Socials = () => {
  return (
    <div className="social-icons flex gap-2">
      {/* switch span tags with anchor tags */}
      <Link href="https://www.instagram.com/propertyplugglobal" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <FaInstagram className="size-6 text-white" />
      </Link>

      <Link href="https://www.facebook.com/profile.php?id=100095368216603&mibextid=kFxxJD" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <LiaFacebookSquare className="size-6 text-white" />
      </Link>

      <Link href="#" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <PiYoutubeLogo className="size-6 text-white" />
      </Link>

      <Link href="#" target="_blank" className="p-2 rounded-full bg-ui-dark">
        <PiXLogo className="size-6 text-white" />
      </Link>
    </div>
  );
};

export default Socials;
