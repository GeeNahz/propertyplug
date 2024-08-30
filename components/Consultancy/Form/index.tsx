'use client'


import { useState } from "react"
import Form from "./Form"
import { TConsultancyList, TConsultancyRentrent, TTab } from "@/components/common/type"

type Props = { tab: TTab }

const FormPage = ({ tab }: Props) => {
  const initialValue1 = {
    state: '',
    location: '',
    propertyType: '',
    numberOfRooms: '',
    propertySize: 0,
    fullName: '',
    number: '',
    email: '',
    min: 0,
    max: 100,
  }

  const initialValue: TConsultancyList | TConsultancyRentrent = {
    state: '',
    location: '',
    Property_type: '',
    rooms: '',
    property_size: '',
    name: '',
    number: '',
    email: '',
    price: '',
    min_price: '',
    max_price: '',
    option: '',
    description: '',
    request_type: tab,
    real_estate_type: '',
  }

  const [formData, setFormData] = useState(initialValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.preventDefault()
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log("Form Data: ", formData)
  }

  return (
    <div className="mb-32">

      <section className="container max-w-screen-xl mx-auto md:px-20">
        <p className="my-10 md:my-[32px] text-xl md:text-[28px] font-bold text-ui-dark capitalize text-start">{tab}</p>

        <Form
          tab={tab}
          formData={formData}
          onChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </div>
  )
}


export default FormPage
