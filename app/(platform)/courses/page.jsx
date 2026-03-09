import React from "react";
import { CoursesApi } from "@/app/_lib/api";
import Link from "next/link";

export const metadata = {
  title: "Courses"
}

export default async function CoursesPage() {
  const data = await CoursesApi();

  return (
    <>
    <h1 className="text-4xl text-center">Courses</h1> <br />
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

      {data.products.map((course) => (
        <Link key={course.id} href={`/courses/${course.id}`}>
          <div className="bg-gray-300 rounded-xl shadow-gray-900 hover:shadow-lg transition p-5 border border-black">
            <h2 className="text-lg font-semibold text-gray-800">
              {course.title}
            </h2>
            <p className="text-center text-gray-500 mt-1">${course.price}</p> <br />
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}
