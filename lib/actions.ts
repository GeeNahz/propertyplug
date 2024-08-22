"use server";
import apiClient from "./apiConfig";
import { blogSchema, passwordChangeSchema, TBlog } from "./zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import axios, { AxiosError, AxiosInstance } from "axios";
import { login } from "./lib";
import Cookies from "js-cookie";
import { BASE_URL } from "./api_url";
import { cookies } from "next/headers";
import { decrypt } from "./utils";

// export async function authenticate(formData: FormData) {
//   try {
//     const token = await login(formData);
//     console.log("took", token);
//     Cookies.set("session", token, {
//       expires: new Date(new Date().getTime() + 10 + 60 * 1000),
//     });

//     redirect("/dashboard");
//   } catch (error: any) {
//     console.log(error);
//   }
//   //   if (error instanceof AxiosError) {
//   //     // @ts-ignore
//   //     switch (error.type) {
//   //       case 'CredentialsSignin':
//   //         return 'Invalid credentials.'
//   //       case 'CallbackRouteError':
//   //         return 'Email of password is incorrect'
//   //       default:
//   //         return 'Something went wrong.'
//   //     }
//   //   }
//   //   return error
//   // }
// }

export async function createBlog(_prevState: unknown, formData: FormData) {
  const { title, blogContent, addContents, tags, createdBy, backgroundImage } =
    Object.fromEntries(formData) as TBlog;

  const result =
    blogSchema.safeParse({
      title,
      blogContent,
      tags,
      createdBy,
      backgroundImage,
      addContents,
    }) || null;

  if (!result.success) {
    let fieldErrors = result.error.flatten().fieldErrors;
    type TFieldErr = keyof typeof fieldErrors;
    let errorKeys = Object.keys(fieldErrors) as unknown as TFieldErr[];
    let errors = errorKeys.map((key: TFieldErr) => ({
      [key]: fieldErrors[key]?.join(" "),
    }));

    return errors;
  }

  let response: AxiosInstance;

  try {
    response = await apiClient.post("/blogs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err: any) {
    console.log("Err: ", err.message);
    return "Unable to complete request. Please try again";
  }
  // redirect(`/dashboard/blogs/${response.data['id']}`) // redirect to the page showing the just created blog
  redirect("/dashboard/blogs");
}

export async function editBlog(_prevState: unknown, formData: FormData) {
  // const { id, title, blogContent, tags, createdBy, backgroundImage, addContents, slug, } = Object.fromEntries(formData);
  // const result = blogSchema.safeParse({ title, blogContent, addContents, tags, slug, createdBy, backgroundImage, });
  // let payload = { title, blogContent, tags, createdBy, slug, addContents };

  const updateData = Object.fromEntries(formData);
  if (updateData.backgroundImage === '' || (updateData.backgroundImage as File).size < 1) {
    delete updateData['backgroundImage']
  }

  const result = blogSchema.partial({
    addContents: true,
    backgroundImage: true,
  }).passthrough().safeParse(updateData)


  if (!result.success) {
    let fieldErrors = result.error.flatten().fieldErrors;
    type TFieldErr = keyof typeof fieldErrors;
    let errorKeys = Object.keys(fieldErrors) as unknown as TFieldErr[];
    let errors = errorKeys.map((key: TFieldErr) => ({
      [key]: fieldErrors[key]?.join(" "),
    }));

    return errors;
  }

  let payload = { ...result.data }

  try {
    // const response = await axios.patch(`${BASE_URL}/blogs/${updateData.slug}`, payload);
    const response = await axios.patch(
      `${BASE_URL}/blogs/update/${payload.title.replaceAll(' ', '-')}`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    );

    revalidatePath("/dasboard/blogs");
    return response.data;
  } catch (error: any) {
    console.log("Update Err: ", error.message);
    return "Unable to update blog. Please try again";
  }
}

export async function getBlog(id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/${id}`);
    return response.data;
  } catch (error: any) {
    console.log("Blog Err: ", error.message);
    return error.message;
  }
}

export async function deleteBlog(slug: string) {
  try {
    await axios.delete(`${BASE_URL}/blogs/${slug}`, {
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/dashboard/blogs");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "An error occurred while deleting the blog.",
    };
  }
}

export async function editPublish(datas: any, formData: FormData) {
  let publishAction = formData.get('action')

  let publishUrl: string

  if (publishAction === 'yes') {
    publishUrl = `${BASE_URL}/blogs/publish/${datas.slug}?publish=${true}`
  } else if (publishAction === 'no') {
    publishUrl = `${BASE_URL}/blogs/publish/${datas.slug}?publish=${false}`
  } else {
    return {
      success: false,
      message: "Invalid publish action provided.",
    };
  }

  try {
    await axios.get(publishUrl, {
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/dashboard/blogs");
    return { success: true };
  } catch (error: any) {
    console.error("Error editing blog:", error);
    return {
      success: false,
      message: error.response?.data?.message ||
        "An error occurred while editing the blog.",
    };
  }
}

export async function getBlogs() {
  try {
    const response = await axios.get(`${BASE_URL}/blogs`);
    return response.data;
  } catch (err: any) {
    console.log("Blogs error: ", err.message);
    return err.message;
  }
}

export async function getBlogsWithQueryParams(url?: string) {
  let urlPath = url ? url : `${BASE_URL}/blogs`

  try {
    const response = await axios.get(urlPath);
    return response.data;
  } catch (err: any) {
    console.log("Blogs error: ", err.message);
    return err.message;
  }
}

export async function changePassword(_prevStete: unknown, formData: FormData) {
  let url = `${BASE_URL}/users/change_password`
  const passwordData = Object.fromEntries(formData)
  const result = passwordChangeSchema.safeParse(passwordData)

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors, message: 'Failed' }
  }

  let session = cookies().get('session')?.value
  const token = decrypt(session as string);
  let id = (token as any)["ID"].split('"')[1];

  let payload = {
    id,
    oldPassword: result.data.current_password,
    newPassword: result.data.new_password,
  }

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: session,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err: any) {
    console.log("Blogs error: ", err.message);
    return err.message;
  }
}
