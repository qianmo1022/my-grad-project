import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { message: '测试接口成功' },
    { status: 200 }
  );
}