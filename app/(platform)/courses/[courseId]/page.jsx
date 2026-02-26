import React from "react";
import { GetCourse } from "@/app/_lib/api";
import { notFound } from "next/navigation";

export default async function CoursePage({ params }) {
  const { courseId } = await params;

  try {
    const course = await GetCourse(courseId);

    return (  
      <div>
        <h1 className="text-4xl text-center">{course.title}</h1>

        <div className="mt-6">
          <p>{course.description}</p>
          <p className="font-bold mt-2">${course.price}</p>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
