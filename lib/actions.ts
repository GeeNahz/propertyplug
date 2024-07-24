'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

import apiClient, { BASE_URL } from './apiConfig';
import { blogSchema, TBlog } from './zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AxiosInstance } from 'axios';

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData,
) {
  const { email, password } = Object.fromEntries(formData)
  try {
    await signIn('credentials', { email, password });
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        case 'CallbackRouteError':
          return 'Email of password is incorrect'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function createBlog(_prevState: unknown, formData: FormData) {
  const { title, blogContent, tags, createdBy, backgroundImage } = Object.fromEntries(formData) as TBlog

  const result = blogSchema.safeParse({ title, blogContent, tags, createdBy, backgroundImage })

  if (!result.success) {
    let fieldErrors = result.error.flatten().fieldErrors
    type TFieldErr = keyof typeof fieldErrors
    let errorKeys = (Object.keys(fieldErrors) as unknown) as TFieldErr[]
    let errors = errorKeys.map((key: TFieldErr) => ({[key]: fieldErrors[key]?.join(' ')}))

    return errors;
  }

  let response: AxiosInstance

  try {
    response = await apiClient.post('/blogs', formData, {
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

export async function getBlogs() {
  try {
    const response = await apiClient.get(`/blogs`,)

    revalidatePath('/dasboard/blogs')
    return response.data
  } catch (err: any) {
    console.log('Blogs error: ', err.message)
    return err.message
  }
}
