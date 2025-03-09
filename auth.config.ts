import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }: { auth: any; request: any }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtectedPage = ['/EV', '/ER'].some(path => 
        request.nextUrl.pathname.startsWith(path)
      );
      
      if (isOnProtectedPage) {
        return isLoggedIn;
      } else {
        return true;
      }
    },
  },
  providers: [],
};