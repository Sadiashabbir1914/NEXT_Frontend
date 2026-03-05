import React from 'react';
import { Suspense } from 'react';
import { GetCourse, CoursesApi } from '@/app/_lib/api';

export const metadata = {
  title: "Dashboard"
}

export default async function DashboardPage() {

  const [course, displayed] = await Promise.all([CoursesApi(), GetCourse(1)]);

  return (
    <div className="p-6">
      <h1 className="text-4xl">Dashboard</h1>
      <h2 className="text-2xl mt-6 p-4 border rounded hover:bg-gray-400">Featured Courses</h2> <br />
      <p>{displayed.title}</p>

      <h2 className="text-2xl mt-6 p-4 border rounded hover:bg-gray-400">All Courses</h2>
      {
        course.products.slice(0,5).map((c) => (
          <p key={c.id}>{c.title}</p>
        ))
      }
    </div>
  )
}
