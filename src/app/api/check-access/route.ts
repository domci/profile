export const runtime = 'edge';

import { NextResponse } from 'next/server';

interface AccessRequest {
  code: string;
}

export async function POST(request: Request) {
  try {
    const { code } = await request.json() as AccessRequest;
    
    // Simple access code check
    if (code === 'DOM15APRO') {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: false });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
} 