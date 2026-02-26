import React from 'react';
import { Suspense } from 'react';
import { GetCourse, CoursesApi } from '@/app/_lib/api';

export const metadata = {
  title: "Dashboard"
}

export default async function DashboardPage() {
  const coursePromise = await CoursesApi();
  const displayedPromise = await GetCourse(1);

  const [course, displayed] = await Promise.all([
    coursePromise, displayedPromise
  ]);

  return (
    <div className="p-6">
      <h1 className="text-4xl">Dashboard</h1>
      <h2 className="text-2xl mt-6">Featured Courses</h2>
      <p>{displayed.title}</p>

      <h2 className="text-2xl mt-6">All Courses</h2>
      {
        course.products.slice(0,5).map((c) => (
          <p key={c.id}>{c.title}</p>
        ))
      }
    </div>
  )
}
