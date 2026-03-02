const URL_Path = "https://dummyjson.com";

import React from 'react'

export default function api() {
  return (
    <div>
      <CoursesApi />
      <GetCourse />
      <GetMentors />
      <GetPaths />
    </div>
  )
}


export async function CoursesApi() {
    const result = await fetch(`${URL_Path}/products?limit=15`,{
        next: {revalidate: 5000}
    })

    if (!result.ok) throw new Error("Failed to fetch courses");

    return result.json();
}

export async function GetCourse(id) {

  const result = await fetch(`${URL_Path}/products/${id}`);

  if (!result.ok) throw new Error("Courses not Found!");

  return result.json();
}

export async function GetMentors() {
    const result = await fetch(`https://randomuser.me/results/?limit=10`, {
      cache: "no-cache",
    });

    return result.json();
}

export async function GetPaths() {
  await new Promise(res => setTimeout(res, 500));

  return paths;
}