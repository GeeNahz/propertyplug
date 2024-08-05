"use client";
import { Modal } from "antd";
import calendar from "./image/Calendar.svg";
import Image from "next/image";
import { useStateContext } from "@/hook/statecontext";
import { useRouter } from "next/navigation";
import { dataUrl } from "@/lib/utils";

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
    if (v.includes("call us")) {
      router.push("tel:+2348104268727");
    }
    if (v.includes("send us a mail")) {
      router.push("mailto:bemshima@gmail.com");
    }
    if (v.includes("reach out on whatsApp")) {
      router.push(
        "https://api.whatsapp.com/send?phone=2348104268727&text=Hi,+you+have+reached+property+plug,+how+may+we+help+you"
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
          {[
            "use calendly",
            "schedule office meetup",
            "setup a zoom meeting",
            "reach out on whatsApp",
            "send us a mail",
            "call us",
          ].map((v, i) => {
            return (
              <button
                key={i}
                onClick={() => handleRoute(v)}
                className="bg-[#FCFCFC] text-[#0B2831] py-3 rounded-2xl border border-transparent hover:border-black capitalize font-medium"
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
