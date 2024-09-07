import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 1.5 // 1.5MB
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
  addContents: z.string()
    .trim()
    .optional(),
  // .refine(
  //   (ad) => ad && ad === '' && ad.length >= 5,
  //   "Ads contents must be at least 5 characters long"),
  blogContent: z.string()
    .min(5, "Blog content must be at least 5 characters long")
    .trim()
    .refine(
      (content) => content && content !== '<div></div>',
      "Content must be provided and cannot be empty"),
  createdBy: z.string(),
  tags: z.string().refine(
    (tag) => tag && tag !== '', 'Tags must be provided'
  ),
  backgroundImage: z.instanceof(File)
    .refine(
      (file) => file && file?.size < MAX_FILE_SIZE, `File size must be less to ${MAX_FILE_SIZE / (1024 * 1024)}.`
    )
    .refine(
      (file) => checkFileType(file), `Only ${SUPPORTED_FILE_TYPE.join(', ')} formats are supported.`
    )
    .optional(),
})

export type TBlog = z.infer<typeof blogSchema>

// backgroundImage: z.any()
//   .refine((file: File) => file?.length !== 0, 'File is required')
//   .refine((file) => file.size < MAX_FILE_SIZE, `File size must be less or equal to ${MAX_FILE_SIZE / (1024 * 1024)}.`)
//   .refine((file) => checkFileType(file), `Only ${SUPPORTED_FILE_TYPE.join(', ')} formats are supported.`),

export const passwordChangeSchema = z.object({
  current_password: z.string()
    .min(5, 'Password must be at least 6 characters')
    .trim(),
  new_password: z.string()
    .min(5, 'Password must be at least 6 characters')
    .trim(),
  confirm_password: z.string()
    .min(5, 'Password must be at least 6 characters')
    .trim(),
})
  .refine((values) => values.new_password === values.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });


export const ConsultancyrentBuySchema = z.object({
  request_type: z.enum(['rent', 'buy']),
  state: z.string().trim(),
  location: z.string().trim(),
  Property_type: z.string().trim(),
  property_size: z.string().trim(),
  rooms: z.string().trim(),
  name: z.string().trim(),
  number: z.string().trim(),
  email: z.string().email().trim(),
  price: z.string().trim(),
  max_price: z.string().trim(),
  min_price: z.string().trim(),
})

export const ConsultancyListSchema = z.object({
  request_type: z.enum(['list']),
  state: z.string().trim(),
  location: z.string().trim(),
  real_estate_type: z.string().trim(),
  option: z.string().trim(),
  description: z.string().trim(),
  name: z.string().trim(),
  email: z.string().email().trim(),
  number: z.string().trim(),
  price: z.string().trim(),
})

export type TConsultancyRentrent = z.infer<typeof ConsultancyrentBuySchema>
export type TConsultancyList = z.infer<typeof ConsultancyListSchema>
