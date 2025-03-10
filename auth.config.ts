import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtectedPage = ['/EV', '/ER'].some(path => 
        nextUrl.pathname.startsWith(path)
      );
      
      if (isOnProtectedPage) {
        return isLoggedIn;
      } else {
        return true;
      }
    },
  },
  providers: [],
} satisfies NextAuthConfig;