'use client'
import { BASE_URL } from "./lib/apiConfig";
import axios from "axios";
import { SignJWT, jwtVerify } from "jose";
// 

import { decrypt } from "./lib/utils";
import { createSession } from "./try";
import { redirect } from "next/navigation";

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

export async function login(formData: FormData) {
  // Verify credentials && get the user
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.token
  } catch (err) {
    // @ts-ignore
    console.log(err.message);
  }
}

export async function dasboardPass(toke:any){
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
  localStorage.removeItem('session')
  redirect('/dashboard')
  // Destroy the session
  // cookies().set("session", "", { expires: new Date(0) });
}

// export async function getSession() {
//   const session = cookies().get("session")?.value;
//   if (!session) return null;
//   return await decrypt(session);
// }

// export async function updateSession(request: NextRequest) {
//   const session = request.cookies.get("session")?.value;
//   if (!session) return;

//   // Refresh the session so it doesn't expire
//   const parsed = await decrypt(session);
//   parsed.expires = new Date(Date.now() + 10 * 1000);
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: "session",
//     value: await encrypt(parsed),
//     httpOnly: true,
//     expires: parsed.expires,
//   });
//   return res;
// }
