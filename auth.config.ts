import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isLoginPage = nextUrl.pathname.startsWith('/login');
      const isDashboardPage = nextUrl.pathname.startsWith('/dashboard');

      if (isLoginPage) {
        if (isLoggedIn) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      }

      if (isDashboardPage) {
        if (!isLoggedIn) {
          return false; // Redirect unauthenticated users to login page
        }
        return true
      }

      return true;

      /*
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (!isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
      */
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
