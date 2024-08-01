"use client";
import { Modal } from "antd";
import calendar from "./image/Calendar.svg";
import Image from "next/image";
import { useStateContext } from "@/hook/statecontext";
import { dataUrl } from "@/lib/utils";

export const Moda = () => {
  const { modal, setModal } = useStateContext();
  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <Modal open={modal} onOk={handleOk} onCancel={handleCancel}>
      <div className="">
        <div className="flex w-4/12 justify-between items-center">
          <Image placeholder="blur" blurDataURL={dataUrl} src={calendar} alt="calendar" className="w-6" />|
          <h4 className="font-semibold">Book Consultancy</h4>
        </div>
        <div className="flex flex-col mt-12 gap-3">
            {['use calendly', 'schedule office meetup', 'setup a zoom meeting', 'reach out on whatsApp'].map((v, i) => <button key={i} className="bg-[#FCFCFC] text-[#0B2831] py-3 rounded-2xl border border-transparent hover:border-black capitalize font-medium">{v}</button>)}
        </div>
      </div>
    </Modal>
  );
};
