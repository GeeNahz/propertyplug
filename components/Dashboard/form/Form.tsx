import { ChangeEvent } from "react";
import ImageUpload from "./ImageUpload";
import NovelEditor from "@/components/editor/novel-editor";
import { TBlogPost } from "@/components/common/type";
import { JSONContent } from "@tiptap/core";

type Props = {
  formData: Partial<TBlogPost>;
  setFormData: React.Dispatch<React.SetStateAction<Props['formData']>>;
  action?: (formData: FormData) => void;
  children?: React.ReactNode;
}

export default function Form({ formData, setFormData, action, children }: Props) {
  function handleFormChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault()

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: (e.target as HTMLInputElement).files?.[0] ? (e.target as HTMLInputElement).files?.[0] : e.target.value
    }))
  }

  function setContent(htmlContent: string | any) {
    setFormData(prev => ({ ...prev, blogContent: htmlContent }))
  }

  return (
    <form action={action} className="bg-white rounded-lg p-8 flex flex-col gap-6 h-full xl:max-w-[700px] 2xl:max-w-[850px] ">
      <div className="double-fields flex gap-5">
        <div className="flex flex-col gap-2" style={{ flex: 3 }}>
          <Label value="blog title" id="title" isRequired />

          <input
            type="text"
            placeholder="Input the title here"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleFormChange}
            className="w-full text-xs border-2 border-ui-dark rounded-lg py-4 px-6"
            required
          />
        </div>

        <div className="tags flex flex-col gap-2" style={{ flex: 1 }}>
          <Label isRequired value="tags" id="tags" />

          <input
            type="text"
            placeholder="e.g: #housing #construction"
            id="tags"
            onChange={handleFormChange}
            value={formData.tags}
            name="tags"
            className="w-full text-xs border-2 border-ui-dark rounded-lg py-4 px-6"
          />
        </div>
      </div>

      <div className="image flex flex-col gap-4">
        <div className="label flex flex-col">
          <Label isRequired value="Banner image" id="backgroundImage" />

          <small className="text-ui-desc text-xs font-light">
            Click on the icon below to upload your image. File types supported: JPG, PNG, SVG. (30MB)
          </small>
        </div>

        <ImageUpload handleFormChange={handleFormChange} />
      </div>

      <div className="content flex flex-col gap-2">
        <Label value="content" id="blogContent" isRequired />

        <div className="border border-ui-dark rounded-lg min-h-44 w-full">
          <NovelEditor content={([formData.blogContent] as unknown) as JSONContent[]} setContent={setContent} />
        </div>

        <input
          className="body h-44 w-full text-xs border-2 border-ui-dark rounded-lg py-4 px-6"
          type="hidden"
          name="blogContent"
          id="blogContent"
          value={formData.blogContent}
          onChange={handleFormChange}
          required
        />
      </div>

      {/* user */}
      <input type="hidden" value={formData.createdBy} name="createdBy" required />

      <div className="actions flex gap-4 items-center">
        {children}
      </div>
    </form>
  )
}

function Label({ id, value, isRequired }: { id: string; value: string; isRequired?: boolean }) {
  return (
    <label htmlFor={id} className="capitalize text-[13px] text-ui-dark font-semibold mr-1">{value} {isRequired && <span className="text-ui-red">*</span>}</label>
  )
}
