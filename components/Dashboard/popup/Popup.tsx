"use client";

import { Modal } from "antd";
import calendar from "./image/Calendar.svg";
import Image from "next/image";
import { useStateContext } from "@/hook/statecontext";

export const Popup = () => {
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
          <Image src={calendar} alt="calendar" className="w-6" />|

          <h4 className="font-semibold">Book Consultancy</h4>
        </div>
      </div>
    </Modal>
  );
};

