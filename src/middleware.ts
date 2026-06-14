import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for an admin route (except login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check for admin authentication in localStorage (client-side)
    // Since middleware runs on the server, we can't directly check localStorage
    // We'll rely on client-side checks in the components
    // This middleware can be enhanced with cookies or JWT tokens in production
    
    // For now, allow the request to proceed - authentication is handled client-side
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
