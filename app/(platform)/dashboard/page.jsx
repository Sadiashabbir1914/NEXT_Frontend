import React from 'react';
import { GetCourse, CoursesApi } from '@/app/_lib/api';

export const metadata = {
  title: "Dashboard"
}

export default async function DashboardPage() {

  const [course, displayed] = await Promise.all([CoursesApi(), GetCourse(1)]);

  return (
    <div className="flex-1 ml-72">
      <h1 className="text-4xl">Dashboard</h1>
      <h2 className="text-3xl mt-6 p-4 ">Featured Courses</h2> <br />
      <div className='ml-96 w-2xl h-full text-center bg-gray-400 rounded shadow-2xs'>
        <h3 className='text-2xl'>{displayed.title}</h3>
        <p>{displayed.description}</p>
      </div>

      <h2 className="text-3xl mt-6 p-4">All Courses</h2> <br />
      {
        course.products.slice(0,5).map((c) => (
          <p key={c.id} className='ml-96 w-2xl h-full text-center bg-gray-400 rounded shadow-2xs'>{c.title}</p>
        ))
      }
    </div>
  )
}
