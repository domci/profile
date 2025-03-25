import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Public paths that don't require access code
const PUBLIC_PATHS = ['/access', '/api/validate-access'];

// This function runs on the edge for every request
export function middleware(request: NextRequest) {
  // Skip middleware for API routes and access page
  if (
    request.nextUrl.pathname.startsWith('/api/') || 
    request.nextUrl.pathname.startsWith('/access') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Check if access cookie is set
  const hasAccess = request.cookies.has('access_token');
  
  // If no cookie, redirect to access page
  if (!hasAccess) {
    return NextResponse.redirect(new URL('/access', request.url));
  }
  
  return NextResponse.next();
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