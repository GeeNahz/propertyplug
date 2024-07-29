import { SignJWT, jwtVerify } from "jose";
import { jwtDecode } from "jwt-decode";
import { hasCookie, setCookie } from 'cookies-next'
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const  payload  = await jwtVerify(input, key);
  return payload;
}

export async function login(formData: FormData) {
  // Verify credentials && get the user

  const user = { email: formData.get("email"), name: "John" };

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  // Cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  // Cookies().set("session", "", { expires: new Date(0) });
}

export async function createSession(token: string) {
    try {
        const decoded = jwtDecode(token) as any;
        
        // Encrypt session data
        const session = await encrypt({
            user: {
                id: decoded?.ID,
                email: decoded?.Email
            },
            expires: decoded?.exp
        });
        
        // Set cookie with encrypted session
        setCookie('session', session, {
            expires: new Date(decoded?.exp * 1000), // Convert Unix timestamp to Date object
            httpOnly: true
        });
    } catch (error: any) {
        throw new Error('Invalid session: ' + error.message); // Adjust error message format
    }
}


export async function getSession() {
  const session = hasCookie('session') as any;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}