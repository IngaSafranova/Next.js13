//! NOT WORKING LIKE THAT IN NEXTJS14



//! On demand revalidation.
//https://<your-site.com>/api/revalidate?secret=<token>.

//for localhost.
//http://localhost:3000/api/revalidate?path=/&secret=DaveGrayTeachesCode

//path=/ - means home page.

import { NextApiRequest, NextApiResponse } from "next";

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //check is secret token correct
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({message: 'Invalid token'})
    }

    const path = req.query.path as string
    await res.revalidate(path)

    //better not to catch error in developement so we can see exact error in console.
    //! revalitate do not work in developement, need to build and start to see it work.

    return res.json({revalidated: true})
}