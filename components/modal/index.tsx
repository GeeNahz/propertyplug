"use client";
import { Modal } from "antd";
import calendar from "./image/Calendar.svg";
import Image from "next/image";
import { useStateContext } from "@/hook/statecontext";
import { useRouter } from "next/navigation";
import { dataUrl } from "@/lib/utils";

const OPTIONS = [
  "Reach us on WhatsApp",
  "Send us a mail",
  "Call us",
]

export const Moda = () => {
  const { modal, setModal } = useStateContext();
  const router = useRouter();
  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };


  const handleRoute = (v: string) => {
    if (v.includes(OPTIONS[2])) {
      router.push("tel:+2349124604075");
    }
    if (v.includes(OPTIONS[1])) {
      router.push("mailto:info@propertyplugng.com");
    }
    if (v.includes(OPTIONS[0])) {
      router.push(
        "https://api.whatsapp.com/send?phone=2349124604075&text=Hi,+you+have+reached+property+plug,+how+may+we+help+you"
      );
    }
    return;
  };


  return (
    <Modal open={modal} onOk={handleOk} onCancel={handleCancel}>
      <div className="">
        <div className="flex w-4/12 justify-between items-center max-sm:gap-4">
          <Image
            placeholder="blur"
            blurDataURL={dataUrl}
            src={calendar}
            alt="calendar"
            className="w-6"
          />
          |<h4 className="font-semibold">Book Consultancy</h4>
        </div>
        <div className="flex flex-col mt-12 gap-3">
          {OPTIONS.map((v, i) => {
            return (
              <button
                key={i}
                onClick={() => handleRoute(v)}
                className="bg-[#FCFCFC] text-[#0B2831] py-3 rounded-2xl border border-transparent hover:border-black font-medium"
              >
                {v}
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
