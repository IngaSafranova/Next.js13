To hide API keys create .env.local file for it. Make sure it is in .gitignore file.
Also if we want to hide url we use.

Middleware will be invoked for **every route in your project**. So better option is to limit where it will apply. For that we need to use - matcher.
E.g. export const config = {
    matcher: '/api/:path*'
}
will apply middleware only in any file in api directory.

**npm i limiter**

Rate limiter provides restrictions for api. E.g. 150 request per hour or 1 message allowed to be sent in 250ms.
If we want to create different limits for different routes we need to create separate files for them.
If we use the same rate limiter file for different routes they all share the same limit. 