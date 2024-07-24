import { auth, signOut } from "@/auth";
import axios from "axios";
import { redirect } from "next/navigation";
import { validateToken } from "./utils";

export const BASE_URL = 'https://propertyplug-backend.onrender.com/api/v1'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

apiClient.interceptors.request.use(async (req: any) => {
  const session = await auth()
  const token = (session?.user as any)?.token

  if (token) {
    if (!req.headers.Authorization) {
      req.headers.Authorization = (session?.user as any)?.token
    }

    if (validateToken(token)) {
      return req
    } else {
      // Attempt to reauthenticate the user instead.
      await signOut()
    }
  } else {
    redirect('/login')
  }
})

export default apiClient
