import React from 'react'
import getUser from '@/library/getUser'
import getUserPosts from '@/library/getUserPosts'
import getAllUsers from "@/library/getAllUsers";
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation';

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData

  if (!user.name) {
    return {
      title: 'User Not Found'
    }
  }

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

  // to stop the page for looking for data that do not exist we need to check for one of user properties as empty object would not validate the search
  if (!user.name) return notFound()

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

// to generate static parameters so dinamic pages can be rendered in advance.
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData
 return users.map((user) => ({
   userId: user.id.toString()
 }));
}
