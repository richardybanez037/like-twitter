import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const session_cookie = request.cookies.get('session_cookie')

    if(!session_cookie){
        switch(request.nextUrl.pathname){
            case '/home': return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if(session_cookie){
        switch(request.nextUrl.pathname){
            case '/': return NextResponse.redirect(new URL('/home', request.url))
        }
    }
    return NextResponse.next()
}
 
export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }