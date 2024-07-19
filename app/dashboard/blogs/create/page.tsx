import { Form } from "@/components/Dashboard"
import { TFormDataBlog } from "@/components/common/type"

const data: Partial<TFormDataBlog> = {
  title: '',
  body: '',
  image: '',
  date: ''.toString(),
}

export default function Page() {
  return (
    <div>
      Create form page
      <Form data={data} />
    </div>
  )
}
