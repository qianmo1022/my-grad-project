// import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server'

// const protectedRoutes = ['/EV','/ER']
// const authRoutes = ['/login', '/register']

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl
//   const isLoggedIn = request.cookies.has('auth_token')

//   // 保护需要认证的路由
//   if (protectedRoutes.some(p => pathname.startsWith(p)) && !isLoggedIn) {
//     const loginUrl = new URL('/login', request.url)
//     // 直接使用pathname，避免双重编码
//     loginUrl.searchParams.set('callbackUrl', pathname)
//     return NextResponse.redirect(loginUrl)
//   }

//   // 已登录用户访问登录/注册页面时重定向到首页
//   if (authRoutes.some(p => pathname.endsWith(p)) && isLoggedIn) {
//     return NextResponse.redirect(new URL('/', request.url))
//   }

//   return NextResponse.next()
// }

import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
 
export default NextAuth(authConfig).auth;

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