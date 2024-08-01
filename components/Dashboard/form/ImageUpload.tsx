'use client'

import { dataUrl } from "@/lib/utils";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { MdImage } from "react-icons/md";

type Props = {
  value?: string;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUpload({ value, handleFormChange }: Props) {
  // const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    setPreviewUrl(value as string)
  }, [value])

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (file) {
      // setSelectedImage(file)

      // Preview url from FileReader
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => setPreviewUrl(e.target?.result as string)
    } else {
      // setSelectedImage(null)
      setPreviewUrl(null)
    }

    handleFormChange(e)
  }

  return (
    <div
      className="relative w-72 h-44 text-xs border-2 border-dashed border-ui-dark rounded-lg bg-transparent"
    >
      <div className={`absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-stone-400 ${previewUrl && 'opacity-50'}`}>
        <MdImage className="size-20" />

        <p>Banner Image</p>
      </div>

      <input
        id="backgroundImage"
        name="backgroundImage"
        accept="image/*"
        type="file"
        onChange={handleImageChange}
        className="size-full opacity-0 absolute top-0 left-0 right-0 bottom-0"
        required
      />

      {previewUrl && (<Image placeholder="blur" blurDataURL={dataUrl}
        src={previewUrl}
        alt="preview"
        width={50}
        height={50}
        className="bg-gray-200 object-cover object-center size-full"
      />)}
      {/* value={value} */}
    </div>
  )
}
