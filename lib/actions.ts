"use server";
import apiClient from "./apiConfig";
import { blogSchema, TBlog } from "./zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import axios, { AxiosError, AxiosInstance } from "axios";
import { login } from "./lib";
import Cookies from "js-cookie";
import { BASE_URL } from "./api_url";
import { cookies } from "next/headers";

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
  const { title, blogContent, addContent, tags, createdBy, backgroundImage } =
    Object.fromEntries(formData) as TBlog;

  const result =
    blogSchema.safeParse({
      title,
      blogContent,
      tags,
      createdBy,
      backgroundImage,
      addContent,
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
    console.log(formData);
    response = await apiClient.post("/blogs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  } catch (err: any) {
    console.log("Err: ", err.message);
    return "Unable to complete request. Please try again";
  }
  // redirect(`/dashboard/blogs/${response.data['id']}`) // redirect to the page showing the just created blog
  redirect("/dashboard/blogs");
}

export async function editBlog(_prevState: unknown, formData: FormData) {
  const {
    id,
    title,
    blogContent,
    tags,
    createdBy,
    backgroundImage,
    addContent,
    slug,
  } = Object.fromEntries(formData);

  const result = blogSchema.safeParse({
    title,
    blogContent,
    addContent,
    tags,
    slug,
    createdBy,
    backgroundImage,
  });

  if (!result.success) {
    let fieldErrors = result.error.flatten().fieldErrors;
    type TFieldErr = keyof typeof fieldErrors;
    let errorKeys = Object.keys(fieldErrors) as unknown as TFieldErr[];
    let errors = errorKeys.map((key: TFieldErr) => ({
      [key]: fieldErrors[key]?.join(" "),
    }));

    return errors;
  }
  let payload = { title, blogContent, tags, createdBy, slug, addContent };

  try {
    const response = await axios.patch(`${BASE_URL}/blogs/${slug}`, payload);

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

export async function editPublish(datas: any) {
  try {
    await axios.get(`${BASE_URL}/blogs/publish/${datas.slug}`, {
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
