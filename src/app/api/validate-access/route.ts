import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'access_token';
// 7 days in seconds
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60;

interface AccessCodeRequest {
  code: string;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { code } = data as AccessCodeRequest;
    
    console.log('Received access code:', code);
    console.log('Expected access code:', process.env.ACCESS_CODE);

    if (!process.env.ACCESS_CODE) {
      console.error('ACCESS_CODE environment variable is not set');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const isValid = code === process.env.ACCESS_CODE;
    console.log('Is code valid?', isValid);

    if (isValid) {
      const response = NextResponse.json({ success: true });
      
      // Set an HttpOnly cookie that expires in 7 days
      response.cookies.set(COOKIE_NAME, 'valid', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: COOKIE_MAX_AGE,
        path: '/',
      });

      console.log('Access granted, cookie set');
      return response;
    }

    console.log('Access denied');
    return NextResponse.json(
      { success: false, message: 'Invalid access code' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Access validation error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
} 