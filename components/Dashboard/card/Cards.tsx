import { HiOutlineArrowSmallUp, HiOutlineArrowSmallDown, HiPencilSquare } from "react-icons/hi2"

import Card from "./Card";

export default function Cards() {
  return (
    <div className="cards flex gap-5">
      <Card title="total reads" subTitle="48,567">
        <div className="rate flex items-center gap-2 text-green-500">
          <p className="value text-xs rounded-full p-2 bg-green-50">+/- 5.37%</p>
          <span className="icon">
            <HiOutlineArrowSmallUp />
            {/* <HiOutlineArrowSmallDown /> */}
          </span>
        </div>
      </Card>
      <Card title="monthly view threshold" subTitle="1,480"></Card>
      <Card title="total blog post" subTitle="450">
        <div className="text-gray-500 bg-ui-desc/10 rounded-full px-4 py-2 w-fit">
          <HiPencilSquare size={20} />
        </div>
      </Card>
      <Card title="audience reached"></Card>
    </div>
  )
}
