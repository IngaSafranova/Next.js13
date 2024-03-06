import { NextResponse } from "next/server";

export function middleware(request: Request) {
    // use regex to show where to apply middleware.
    const regex = new RegExp('/api/*')
    if (regex.test(request.url)) {
        
    }

    // other ways to limit where middleway is applied.
    if (request.url.includes('/api/')) {
        
    }

    console.log('Middleware')

    console.log(request.method)
    console.log(request.url)

    const origin = request.headers.get('origin')
    console.log(origin)

    return NextResponse.next()
}

//middleware will apply only in /api/ directory any path.

export const config = {
    matcher: '/api/:path*'
}