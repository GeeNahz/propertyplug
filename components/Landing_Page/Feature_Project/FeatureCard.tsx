import { FaNairaSign, FaPersonSwimming, FaBath } from "react-icons/fa6";
import imgs from "./images/ppt1.jpg";
import { GrLocation } from "react-icons/gr";
import { IoIosBed } from "react-icons/io";
import Image from "next/image";
import { Divider } from "antd";

type Props = {
  bed: number,
  jacuzzi: boolean,
  pool: boolean,
  loc: string,
  flat: number,
  price: string
  alignJustify?: boolean;
}

const HomepageCard = ({ feature }: { feature: Props }) => {
  return (
    <>
      <Image src={imgs} alt="" className="rounded-[32px]" />
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
          <small className="flex text-[11px] gap-1 font-medium items-center">
            <IoIosBed /> {feature.bed}{" "}
            <span className="text-red-500">Beds</span>
          </small>
          {feature.jacuzzi && (
            <small className="flex text-[11px] gap-1 font-medium items-center">
              <FaBath /> Jacuzzi
            </small>
          )}
          {feature.pool && (
            <small className="flex text-[11px] gap-1 font-medium items-center">
              <FaPersonSwimming /> Swimming Pool
            </small>
          )}
        </div>
        <div className="flex justify-between px-2">
          <div className="flex justify-between items-center gap-2">
            <GrLocation size={20} />
            <h4 className="flex flex-col font-semibold text-xs capitalize">
              {feature.loc}{" "}
              <span className="text-[10px] font-light">
                {feature.flat} Bedroom Flat
              </span>
            </h4>
          </div>

          <h4 className="flex flex-col font-semibold text-xs ">
            <span className="flex items-center">
              <FaNairaSign size={10} /> {feature.price}
            </span>
            <span className="font-light text-[10px]">Price</span>
          </h4>
        </div>
        <button className="py-2 px-4 rounded-full text-white text-xs bg-red-500 hover:bg-red-500/95 w-max mx-auto">
          view
        </button>
      </div>
    </>
  )
};

const PropertiespageCard = ({ feature }: { feature: Props }) => {
  return (
    <>
      <Image src={imgs} alt="" className="rounded-[32px]" />

      <div className="text-ui-dark font-light">
        <div className="grid grid-cols-2 gap-y-[23px]">
          <small className="flex text-[11px] gap-1 items-center">
            <IoIosBed /> {feature.bed}{" "}
            <span className="text-red-500">Beds</span>
          </small>
          {feature.jacuzzi && (
            <small className="flex text-[11px] gap-1 items-center">
              <FaBath /> Jacuzzi
            </small>
          )}
          {feature.pool && (
            <small className="flex text-[11px] gap-1 items-center">
              <FaPersonSwimming /> Swimming Pool
            </small>
          )}
          <small className="flex text-[11px] gap-1 items-center">
            <GrLocation size={20} /> {feature.loc}{" "}
          </small>
        </div>

        <div className="flat-price !border-black">
          <Divider className="!border-gray-400 !mb-3"/>
          <div className="flex justify-between px-2">
            <div className="flex justify-between items-center gap-2">
              <p className="flex flex-col font-light text-sm capitalize">
                {feature.flat} Bedroom Flat
              </p>
            </div>

            <h4 className="font-semibold text-lg">
              <span className="flex items-center">
                <FaNairaSign size={14} /> &nbsp; {feature.price}
              </span>
            </h4>
          </div>
          <Divider className="!border-gray-400 !mt-3" />
        </div>

        <button className="py-[15px] px-[30px] rounded-full text-white font-medium capitalize text-xs bg-red-500 hover:bg-red-500/95 w-max mx-auto">
          view
        </button>
      </div>
    </>
  );
};

const FeatureCard = ({ feature }: { feature: Props }) => {
  if (feature.alignJustify) return <PropertiespageCard feature={feature} />

  return <HomepageCard feature={feature} />
};

export default FeatureCard;
