"use server";
import { BASE_URL } from "./api_url";
import axios from "axios";
import { SignJWT, jwtVerify } from "jose";
import { decrypt } from "./utils";
import { createSession } from "../try";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

// export async function decrypt(input: string): Promise<any> {
//   const { payload } = await jwtVerify(input, key, {
//     algorithms: ["HS256"],
//   });
//   return payload;
// }

export async function login(_prevState: unknown, formData: FormData) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const token = response.data.token;

    if (!token) return;

    // Set the session cookie to expire in 10 minutes
    cookies().set({
      name: "session",
      value: token,
      httpOnly: true,
      expires: new Date(new Date().getTime() + 10 * 60 * 1000),
    });

  } catch (err: any) {
    // Re-throw the error to be handled by the caller
    type TErrorReturn = { state: number; message: string; }

    if (err?.response) {
      return err?.response?.data as TErrorReturn
    }
    return { status: 400, message: 'Something went wrong. Please try again.' }
  }

  // Redirect to the dashboard
  redirect("/dashboard");
}

export async function dasboardPass(toke: any) {
  let user: any = {};
  try {
    const token = decrypt(toke);
    let user_id = (token as any)["ID"].split('"')[1];
    // retrieve actual user data
    const userData = await axios.get(`${BASE_URL}/users/${user_id}`, {
      headers: {
        Authorization: `${toke}`,
        "Content-Type": "application/json",
      },
    });
    // await createSession(toke)
    user["id"] = userData.data["id"];
    user["email"] = userData.data["email"];
    user["firstName"] = userData.data["firstName"];
    user["lastName"] = userData.data["lastName"];
    user["image"] = "";
    user["token"] = toke;

    // for some reason, user session only picks up the returned
    // user data if it is returned in a user object.
    return user;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  redirect("/login");
}

export async function getSession() {
  try {
    const session = Cookies.get();
    console.log("getSession - Retrieved session:", session);

    if (!session) {
      console.log("getSession - Session not found");
      return null;
    }
    return session;
  } catch (error) {
    console.error("getSession - Error retrieving session:", error);
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire

  const expires = new Date(Date.now() + 10 * 1000);
  console.log("mid", expires);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: session,
    httpOnly: true,
    expires: expires,
  });
  return res;
}
