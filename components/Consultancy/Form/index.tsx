'use client'


import { useState } from "react"
import Form from "./Form"
import { useSearchParams } from 'next/navigation'
import Header from "../Header"
import { TTab } from "@/components/common/type"

const FormPage = () => {
  const searchParam = useSearchParams()
  const tab = searchParam.get('tab') as TTab || 'buy'

  const initialValue = {
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

  const [formData, setFormData] = useState(initialValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    e.preventDefault()
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log("Form Data: ", formData)
  }

  return (
    <div className="mb-32 md:mb-60">
      <Header tab={tab} />

      <section className="px-7 md:px-20">
        <p className="my-10 md:my-[72px] text-2xl md:text-[40px] font-bold text-ui-dark capitalize text-start">{tab}</p>

        <Form formData={formData} onChange={handleChange} handleSubmit={handleSubmit} />
      </section>
    </div>
  )
}


export default FormPage