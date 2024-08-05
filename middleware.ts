import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();

  const expires = new Date(new Date().getTime() + 10 * 60 * 1000);

  response.cookies.set({
    name: "session",
    value: `${token.value}`,
    expires: expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: "/dashboard/:path*",
};
