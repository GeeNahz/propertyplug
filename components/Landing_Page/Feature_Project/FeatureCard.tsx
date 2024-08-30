import { FaNairaSign, FaPersonSwimming, FaBath, FaPlus, FaHouseMedical } from "react-icons/fa6";
import imgs from "./images/ppt1.jpg";
import { GrLocation } from "react-icons/gr";
import { IoIosBed } from "react-icons/io";
import Image from "next/image";
import { Divider } from "antd";
import { dataUrl } from "@/lib/utils";

type Props = {
  bed?: number,
  jacuzzi?: boolean,
  pool?: boolean,
  loc?: string,
  flat?: number,
  alignJustify?: boolean;

  id?: number;
  title?: string;
  houseType?: string;
  bedSpace?: string;
  location?: string;
  price: string;
  description?: string;
  facilities?: string[];
  otherImage?: {
    src: string;
    width: number;
    height: number;
  }[];
  otherProperties?: string[];
}

const HomepageCard = ({ feature }: { feature: Props }) => {
  return (
    <>
      <div className="h-56 md:h-72 w-full rounded-[24px] md:rounded-[32px] overflow-hidden">
        <Image
          placeholder="blur"
          blurDataURL={feature?.otherImage![0].src}
          src={feature.otherImage![0].src}
          width={feature?.otherImage![0].width}
          height={feature?.otherImage![0].height}
          alt={feature.title as string}
          className="object-cover aspect-square object-center"
        />
      </div>
      <div className="flex flex-col gap-4 px-2">
        <div className="flex items-center justify-between">
          <small className="flex text-[11px] gap-1 font-medium items-center">
            <IoIosBed /> <span className="text-red-500">{feature.bedSpace}</span>
          </small>
            <small className="flex text-[11px] gap-1 font-medium items-center">
              <FaHouseMedical /> {feature.facilities![0]}
            </small>
          {feature.pool && (
            <small className="flex text-[11px] gap-1 font-medium items-center">
              <FaHouseMedical /> {feature.facilities![1]}
            </small>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-2">
            <GrLocation size={20} />
            <h4 className="flex flex-col font-semibold text-xs capitalize">
              {feature.location}{" "}
              <span className="text-[10px] font-light">
                {feature.houseType}
              </span>
            </h4>
          </div>

          <h4 className="flex flex-col font-semibold text-xs">
            <span className="flex items-center">
              <FaNairaSign size={10} /> &nbsp; <span className="whitespace-nowrap">{feature.price}</span>
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

const PropertyPageCard = ({ feature }: { feature: Props }) => {
  return (
    <>
      <div className="h-56 lg:h-72 w-full rounded-[24px] md:rounded-[32px] overflow-hidden">
        <Image
          placeholder="blur"
          blurDataURL={feature?.otherImage![0].src}
          src={feature.otherImage![0].src}
          width={feature?.otherImage![0].width}
          height={feature?.otherImage![0].height}
          alt={feature.title as string}
          className="object-cover size-full aspect-auto lg:aspect-square object-center"
        />
      </div>

      <div className="text-ui-dark font-light">
        <div className="grid grid-cols-2 gap-y-2 md:gap-y-[16px]">
          <small className="flex text-[11px] gap-1 items-center">
            <IoIosBed size={13} /> <span className="text-red-500">{feature.bedSpace}</span>
          </small>
          <small className="flex text-[11px] gap-1 items-center">
            <FaHouseMedical size={13} /> {feature?.facilities![4]}
          </small>
          <small className="flex text-[11px] gap-1 items-center">
            <FaHouseMedical size={13} /> {feature?.facilities![1]}
          </small>
          <small className="flex text-[11px] gap-1 items-center">
            <GrLocation size={13} /> <span>{feature.location}</span>
          </small>
        </div>

        <div className="flat-price">
          <Divider className="!border-gray-400 !mb-1 md:!mb-3" />
          <div className="flex justify-between px-1">
            <div className="flex justify-between items-center gap-2">
              <p className="flex flex-col font-light text-xs capitalize">
                {feature.houseType}
              </p>
            </div>

            <h4 className="font-semibold text-xs md:text-sm lg:text-base">
              <span className="flex items-center whitespace-nowrap">
                <FaNairaSign size={14} /> {feature.price}
              </span>
            </h4>
          </div>
          <Divider className="!border-gray-400 !mt-1 md:!mt-3" />
        </div>

        <button className="py-2 md:py-3 px-6 rounded-full text-white font-medium capitalize text-xs bg-red-500 hover:bg-red-500/95 w-max mx-auto">
          view
        </button>
      </div>
    </>
  );
};

const FeatureCard = ({ feature }: { feature: Props }) => {
  if (feature.alignJustify) return <PropertyPageCard feature={feature} />

  return <HomepageCard feature={feature} />
};

export default FeatureCard;
