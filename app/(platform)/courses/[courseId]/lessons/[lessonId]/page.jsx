import React from 'react'

export default async function Lesson( {params} ) {
  const lesson = await params;
  return (
    <div>
      Course: {lesson.courseId}
      <br />
      Lesson: {lesson.lessonId}
    </div>
  );
}
