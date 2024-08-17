import { HiOutlineArrowSmallUp, HiPencilSquare } from "react-icons/hi2"

import Card from "./Card";
import axios from "axios";
import { BASE_URL } from "@/lib/api_url";
import { cookies } from "next/headers";

export default async function Cards() {
  const token = cookies().get('session')?.value
  const response = await axios.get(`${BASE_URL}/dashboard`,{
    headers:{
      Authorization:token,
      'Content-Type': 'application/json'
    }
  })

  const data = await response.data
  console.log(data)
  return (
    <div className="cards flex gap-5">
      <Card title="total reads" subTitle={data?.totalReads || ''}>
        <div className="rate flex items-center gap-2 text-green-500">
          {/* <p className="value text-xs rounded-full p-2 bg-green-50">+/- 5.37%</p> */}
          <span className="icon">
            <HiOutlineArrowSmallUp />
            {/* <HiOutlineArrowSmallDown /> */}
          </span>
        </div>
      </Card>
      {/* <Card title="monthly view threshold" subTitle="1,480"></Card> */}
      <Card title="total blog post" subTitle={data?.totalBlogs || ''}>
        <div className="text-gray-500 bg-ui-desc/10 rounded-full px-4 py-2 w-fit">
          <HiPencilSquare size={20} />
        </div>
      </Card>
      <Card title="total Blogs liked" subTitle={data?.totalLikes || ''} />
    </div>
  )
}
