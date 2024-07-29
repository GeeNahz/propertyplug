'use server';

// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

import  { BASE_URL } from './apiConfig';
import { blogSchema, TBlog } from './zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { login } from '@/lib';
import { decrypt } from '@/try';

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData,
) {
  try {
   const token = await login(formData);
   console.log('took',token)
  //  const session = await decrypt(token)
  //  console.log(session)
  } catch (error: any) {
    if (error instanceof AxiosError) {
      // @ts-ignore
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        case 'CallbackRouteError':
          return 'Email of password is incorrect'
        default:
          return 'Something went wrong.'
      }
    }
    return error
  }
}

export async function createBlog(_prevState: unknown, formData: FormData) {
  const { title, blogContent, tags, createdBy, backgroundImage } = Object.fromEntries(formData) as TBlog

  const result = blogSchema.safeParse({ title, blogContent, tags, createdBy, backgroundImage })

  if (!result.success) {
    let fieldErrors = result.error.flatten().fieldErrors
    type TFieldErr = keyof typeof fieldErrors
    let errorKeys = (Object.keys(fieldErrors) as unknown) as TFieldErr[]
    let errors = errorKeys.map((key: TFieldErr) => ({ [key]: fieldErrors[key]?.join(' ') }))

    return errors;
  }

  let response: AxiosInstance

  try {
    response = await axios.post(`${BASE_URL}/blogs`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  } catch (err: any) {
    console.log('Err: ', err.message)
    return 'Unable to complete request. Please try again'
  }

  revalidatePath('/dasboard/blogs')
  // redirect(`/dashboard/blogs/${response.data['id']}`) // redirect to the page showing the just created blog
  redirect('/dashboard/blogs')

}

export async function editBlog(_prevState: unknown, formData: FormData) {
  const { id, title, blogContent, tags, createdBy, backgroundImage } = Object.fromEntries(formData)

  const result = blogSchema.safeParse({ title, blogContent, tags, createdBy, backgroundImage })

  if (!result.success) {
    let fieldErrors = result.error.flatten().fieldErrors
    type TFieldErr = keyof typeof fieldErrors
    let errorKeys = (Object.keys(fieldErrors) as unknown) as TFieldErr[]
    let errors = errorKeys.map((key: TFieldErr) => ({ [key]: fieldErrors[key]?.join(' ') }))

    return errors;
  }
  let payload = { title, blogContent, tags, createdBy, backgroundImage }

  try {
    const response = await axios.patch(`${BASE_URL}/blogs/${id}`, payload)

    // return response.data
  } catch (error: any) {
    console.log('Update Err: ', error.message)
    return 'Unable to update blog. Please try again'
  }

  revalidatePath('/dasboard/blogs')
  redirect('/dashboard/blogs')
}

export async function getBlog(id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/${id}`)
    return response.data
  } catch(error: any) {
    console.log('Blog Err: ', error.message)
    return error.message
  }
}

export async function getBlogs() {
  try {
    const response = await axios.get(`${BASE_URL}/blogs`,)

    revalidatePath('/dasboard/blogs')
    return response.data
  } catch (err: any) {
    console.log('Blogs error: ', err.message)
    return err.message
  }
}
