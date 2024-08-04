// import { getSession, logout } from "@/lib";
import { logout } from "@/lib/lib";
import axios from "axios";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
// import { validateToken } from "./utils";

export const BASE_URL = "https://propertyplug-backend.onrender.com/api/v1";

export type CookieProp = {
  value: string;
  name: string;
  path: string;
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  async (req: any) => {
    try {
      const cookieStore = cookies();
      const token = cookieStore.get("session") as CookieProp;
      if (token.name === "session") {
        req.headers.Authorization = token.value;
        return req;
      } else {
        redirect("/login");
      }
    } catch (error) {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // If the response status is 401 (Unauthorized), logout the user
      await logout();
      redirect("/login");
    } else if (error.response && error.response.status === 403) {
      // Optionally handle forbidden responses (403) if necessary
      notFound();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
