const URL_Path = "https://dummyjson.com";

import React from 'react'

export default function api() {
  return (
    <div>
      <CoursesApi />
      <GetCourse />
      <GetMentors />
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
    const result = await fetch(`https://randomuser.me/api/?results=10`);

    return result.json();
}
