import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { code } = await request.json();
    
    // Simple access code check
    if (code === 'DOM15APRO') {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: false });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
} 