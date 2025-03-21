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
      const isAuthPage = ['/login', '/register'].some(path => 
        nextUrl.pathname.endsWith(path)
      );
      
      // 保护页面需要登录
      if (isOnProtectedPage) {
        return isLoggedIn;
      }
      
      // 已登录用户不应访问登录/注册页面
      if (isAuthPage && isLoggedIn) {
        return false; // 将在middleware中重定向到首页
      }
      
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;