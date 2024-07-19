'use client'

import { TFormDataBlog } from "@/components/common/type"
import { ChangeEvent, useState } from "react";

type Props = {
  data: Partial<TFormDataBlog>;
}

export default function Form({ data }: Props) {
  const [formData, setFormData] = useState(data)

  function handleFormChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault()

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form className="bg-white rounded-lg p-8">
      <div>
        <label htmlFor="title">Blog Title <span>*</span></label>

        <input
          type="text"
          placeholder="Input the title here"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleFormChange}
          className="w-full border-none outline-ui-dark outline-2 rounded-sm"
        />
      </div>

      <div className="image">
        <div className="label">
          <label htmlFor="image" className="capitalize">Banner image</label>

          <small className="text-desc text-xs font-light">
            Click on the icon below to upload your image. File types supported: JPG, PNG, SVG. (30MB)
          </small>
        </div>

        <input
          id="image"
          name="image"
          type="image"
          value={formData.image as string}
          onChange={handleFormChange}
        />
      </div>

      <div className="content">
        <label htmlFor="body" className="capitalize">content <span>*</span></label>

        <textarea
          className="body"
          name="body"
          id="body"
          value={formData.body}
          onChange={handleFormChange}
        ></textarea>
      </div>
    </form>
  )
}
