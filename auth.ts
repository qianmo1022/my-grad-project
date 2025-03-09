import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { cookies } from 'next/headers';

async function getUser() {
  const authToken = cookies().get('auth_token')?.value;
  
  if (!authToken) {
    return null;
  }
  
  try {
    // 这里我们只是验证token存在，实际项目中可能需要验证token的有效性
    return { id: 'user-id', name: 'User', email: 'user@example.com' };
  } catch (error) {
    console.error('Auth token validation error:', error);
    return null;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async session({ session }) {
      const user = await getUser();
      if (user) {
        session.user = user;
      }
      return session;
    },
    async authorized({ auth, request }) {
      const user = await getUser();
      const isLoggedIn = !!user;
      const { nextUrl } = request;
      const isOnProtectedPage = ['/EV', '/ER'].some(path => 
        nextUrl.pathname.startsWith(path)
      );
      
      if (isOnProtectedPage) {
        if (isLoggedIn) return true;
        return false; // 重定向到登录页面
      }
      
      return true;
    },
  },
});