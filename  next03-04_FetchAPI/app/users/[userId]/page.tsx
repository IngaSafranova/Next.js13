import React from 'react'
import getUser from '@/library/getUser'
import getUserPosts from '@/library/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  
  // not need to await individualy as we receive the promise
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // await both at the same time.
  //const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  return (
    <>
      {/* Show user name straight away while other data still rendering */}
      <h2>{user.name}</h2>
      <br />
      {/* use Suspence to improve rendering while user posts are rendering after fetching */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={ userPostsData} />
      </Suspense>
    </>
  )
}
