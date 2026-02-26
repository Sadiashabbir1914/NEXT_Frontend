import React from "react";
import { CoursesApi } from "@/app/_lib/api";
import Link from "next/link";

export const metadata = {
  title: "Courses"
}

export default async function CoursesPage() {
  const data = await CoursesApi();

  return (
    <div>
      <h1 className="text-4xl text-center">Courses</h1>

      {data.products.map((course) => (
        <Link key={course.id} href={`/courses/${course.id}`}>
          <div className="border p-4 m-3 cursor-pointer hover:bg-gray-100">
            <h2 className="text-2xl text-gray-700">
              {course.title}
            </h2>
            <p>${course.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
