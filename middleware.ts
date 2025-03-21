// 这个文件使用NextAuth的中间件，它会自动处理路由保护和重定向
// 在App Router中不应使用NextResponse.next()

import { NextResponse,NextRequest } from 'next/server';
import { auth } from './auth';

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const session = await auth();  
  const isAuthenticated = !!session?.user;
  
  // 获取当前路径
  const isOnProtectedPage = ['/EV', '/ER'].some(path => 
    nextUrl.pathname.startsWith(path)
  );
  const isAuthPage = ['/login', '/register'].some(path => 
    nextUrl.pathname.endsWith(path)
  );
  
  // 如果用户已登录但访问登录/注册页面，重定向到首页
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // 如果用户未登录但访问受保护页面，重定向到登录页面并保存原始URL
  if (isOnProtectedPage && !isAuthenticated) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirectTo', nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
  
  // 在App Router中不使用NextResponse.next()
  // 而是直接返回undefined，让请求继续正常处理
  return undefined;
}

export const config = {
  matcher: [
    /*
     * 匹配所有需要验证的路由和认证页面
     */
    '/EV/:path*',
    '/ER/:path*',
    '/EV',
    '/ER',
    '/login',
    '/register'
  ]
}