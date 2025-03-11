'use server';

import { signOut } from './auth';

/**
 * 处理用户登出的服务器端操作
 * @param redirectPath 登出后重定向的路径
 */
export async function handleLogout(redirectPath: string = '/') {
  // 调用API清除cookie
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API登出失败:', error);
  }

  // 使用NextAuth的signOut函数
  return signOut({ redirectTo: redirectPath });
}