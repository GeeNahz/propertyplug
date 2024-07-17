import { useState } from "react"
import Form from "./Form"

const FormPage = () => {
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
    <div className="mb-60">
      <Form formData={formData} onChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}


export default FormPage
