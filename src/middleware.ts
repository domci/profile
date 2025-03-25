import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CORRECT_CODE = 'DOM15APRO';

// Public paths that don't require access code
const PUBLIC_PATHS = ['/access', '/api/validate-access'];

// This function runs on the edge for every request
export function middleware(request: NextRequest) {
  // Skip middleware for API routes, access page, and static files
  if (
    request.nextUrl.pathname.startsWith('/api/') || 
    request.nextUrl.pathname.startsWith('/access') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Check if access cookie is set
  const hasAccessCookie = request.cookies.has('access_token');
  
  // Check for access code in URL
  const accessCode = request.nextUrl.searchParams.get('accesscode');
  const hasValidAccessCode = accessCode === CORRECT_CODE;

  // Allow access if either cookie is set or valid access code is provided
  if (hasAccessCookie || hasValidAccessCode) {
    // If access is granted via URL parameter, set the cookie and redirect to clean URL
    if (hasValidAccessCode && !hasAccessCookie) {
      const response = NextResponse.redirect(new URL(request.nextUrl.pathname, request.url));
      response.cookies.set('access_token', 'valid', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: '/',
      });
      return response;
    }
    return NextResponse.next();
  }
  
  // If no valid access, redirect to access page
  return NextResponse.redirect(new URL('/access', request.url));
}

// Configure the middleware to run for specific paths
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /access (our access page)
     * 5. all files in the public folder
     */
    '/((?!api|_next|fonts|access|.*\\.).*)',
  ],
}; 