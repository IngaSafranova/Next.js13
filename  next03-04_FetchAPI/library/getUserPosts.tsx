import React from "react";

export default async function getUserPosts(userId: string) {

  //after fetching and generating data staticly, revalidate data after 60s. If data changed it will not show automaticaly, we need to refresh the page.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {next: {revalidate: 60}}
  );

  if (!response.ok)  undefined;

  return response.json();
}
