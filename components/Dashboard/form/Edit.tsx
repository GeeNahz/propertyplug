'use client'


import { useActionState, useEffect, useState } from "react";
import { TBlogPost } from "@/components/common/type";
import { BlogHeader } from "../blog/header";
import Rightbar from "../rightbar/Rightbar";
import Form from "./Form";
import Button from "./Button";

import { notification } from "antd";
import { editBlog } from "@/lib/actions";
import ContentParser from "@/components/editor/content-parser";
import Image from "next/image";
import { dataUrl } from "@/lib/utils";


type NotificationType = 'success' | 'info' | 'warning' | 'error';


export default function EditForm({ post }: { post: TBlogPost }) {
  const [formData, setFormData] = useState<Partial<TBlogPost>>({ ...post })
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, msg: string, desc?: string) => {
    api[type]({
      message: msg,
      description: desc,
    })
  }

  useEffect(() => {
    if (formData.backgroundImage) {
      if (formData.backgroundImage instanceof File && formData.backgroundImage.size > 0) {
        // Preview url from FileReader
        const reader = new FileReader()
        reader.readAsDataURL(formData.backgroundImage)
        reader.onload = (e) => setImagePreview(e.target?.result as string)
      } else if (typeof formData.backgroundImage === 'string') {
        setImagePreview(formData.backgroundImage)
      }
    }
  }, [formData.backgroundImage])


  const [state, dispatch, isPending] = useActionState(editBlog, null)

  if (state) {
    if (typeof state === 'string') {
      console.log('Form res: ', state)
      openNotificationWithIcon('error', state)
    } else {
      state.map((item:any) => {
        let key = Object.keys(item)[0]
        openNotificationWithIcon('error', key, item[key])
      })
    }
  }

  return (
    <>
      {contextHolder}

      <div className="header">
        <BlogHeader />
      </div>

      <div className="main max-h-full overflow-y-hidden flex-auto flex gap-5 lg:gap-8">
        <div className="form no-scrollbar overflow-y-scroll" style={{ flex: 3 }}>
          <Form action={dispatch} formData={formData} setFormData={setFormData}>
            {/* <Button disabled={isPending} name="post" classes="bg-white border border-ui-dark !text-ui-dark" /> */}

            <Button disabled={isPending} submittingText="updating" name="update" classes="!bg-ui-dark" />
          </Form>
        </div>

        <Rightbar>
          <div className="bg-ui-dash-gray h-full w-full overflow-y-scroll">
            <div className="image h-auto bg-ui-red/20 w-full rounded-md overflow-hidden">
              {imagePreview && (
                <Image placeholder="blur"  blurDataURL={dataUrl} src={imagePreview} alt="preview-image" height={100} width={200} className="size-full object-contain object-center" />
              )}
            </div>

            <div className="prose-sm px-4 py-2 mt-2 max-w-full">
              <div className="flex flex-col gap-1 items-start mb-5">
                <h1 className="!font-bold !mb-0">{formData.title}</h1>
                <small className="text-ui-desc">{formData.tags}</small>
              </div>

              <div className="!text-sm article">
                <ContentParser codeString={formData.blogContent} ads={formData.addContent}/>
              </div>
            </div>
          </div>
        </Rightbar>
      </div>
    </>
  )
}
