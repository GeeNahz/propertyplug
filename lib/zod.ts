import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 30 // 30MB
const SUPPORTED_FILE_TYPE = ['png', 'jpg', 'jpeg']

function checkFileType(file: File | undefined) {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    return SUPPORTED_FILE_TYPE.some((el) => (el === fileType))
  }
  return false;
}

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").trim(),
  addContent: z.string().min(5, "Ads contents must be at least 5 characters long").trim(),
  blogContent: z
    .string()
    .min(5, "Blog content must be at least 5 characters long")
    .trim()
    .refine(
      (content) => content && content !== '<div></div>',
      "Content must be provided and cannot be empty"),
  createdBy: z.string(),
  tags: z.string().refine(
    (tag) => tag && tag !== '', 'Tags must be provided'
  ),
  backgroundImage: z.instanceof(File).refine(
    (file) => file && file?.size < MAX_FILE_SIZE, `File size must be less to ${MAX_FILE_SIZE / (1024 * 1024)}.`
  ).refine(
    (file) => checkFileType(file), `Only ${SUPPORTED_FILE_TYPE.join(', ')} formats are supported.`
  ),
})

export type TBlog = z.infer<typeof blogSchema>

// backgroundImage: z.any()
//   .refine((file: File) => file?.length !== 0, 'File is required')
//   .refine((file) => file.size < MAX_FILE_SIZE, `File size must be less or equal to ${MAX_FILE_SIZE / (1024 * 1024)}.`)
//   .refine((file) => checkFileType(file), `Only ${SUPPORTED_FILE_TYPE.join(', ')} formats are supported.`),
