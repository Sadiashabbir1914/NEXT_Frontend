import React from "react";
import { GetCourse } from "@/app/_lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CoursePage({ params }) {
  const { courseId } = await params;

  try {
    const course = await GetCourse(courseId);

    return (  
      <div>
        <h1 className="text-4xl text-center">{course.title}</h1> <br />

        <div className="mt-6 bg-gray-300 rounded">
          <p className="text-center">{course.description}</p> <br />
          <p>Views: {course.stock}</p>
          <p className="font-semibold">Ratings: {course.rating}</p>
          <p className="font-bold mt-2 text-center">Only in ${course.price}</p>
          <br />
          <Link href={`/courses/${course.id}/lessons/${course.id}`} className="text-2xl text-blue-900">View Lesson</Link>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
