import { NextResponse } from "next/server";

//for CORS define allowed origins. Can be different depending is our site still in dev mode or deployed.
const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000', 'https://google.com']

export function middleware(request: Request) {
    // use regex to show where to apply middleware.
    // const regex = new RegExp('/api/*')
    // if (regex.test(request.url)) {
        
    // }

    // other ways to limit where middleway is applied.
    // if (request.url.includes('/api/')) {
        
    // }

    //! to use CORS
     const origin = request.headers.get("origin");
    console.log(origin);

    //check is origin exist and if it is not in our defined allow list block request. !origin - will apply to Postman or other backend tools as they have no origin. If we want to block them nedd to put into if statement.

    if (origin && !allowedOrigins.includes(origin)){
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad Request',
            headers: {
                'Content-Type': 'text/plain'
            }
        })
    }

    console.log('Middleware')

    console.log(request.method)
    console.log(request.url)

    return NextResponse.next()
}

//middleware will apply only in /api/ directory any path.

export const config = {
    matcher: '/api/:path*'
}