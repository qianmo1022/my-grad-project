import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server'
 
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
        if (isLoggedIn) return true;
        return false
      } else if(isLoggedIn) {
        return NextResponse.redirect(new URL('/', nextUrl))
      }
      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig;