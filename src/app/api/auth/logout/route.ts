import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // 创建响应对象
    const response = NextResponse.json(
      { message: '登出成功' },
      { status: 200 }
    );
    
    // 清除auth_token cookie
    response.cookies.set('auth_token', '', {
      httpOnly: true,
      expires: new Date(0), // 设置过期时间为过去，立即使cookie失效
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('登出错误:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
}