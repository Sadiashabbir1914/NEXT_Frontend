import { GetMentors } from "@/app/_lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Mentors",
};

export default async function Mentor() {
  const ment = await GetMentors();
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Mentors</h1> <br />
      <div className="grid md:grid-cols-3 gap-6 mr-2">
        {ment.results.map((mentor, i) => (
          <div
            key={i}
            className="bg-gray-300 border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition"
          >
            <Image
              src={mentor.picture.medium}
              width={60}
              height={60}
              unoptimized
              alt="mentor"
              className="w-20 h-20 mx-auto rounded-full mb-4 center"
            />

            <p className="font-semibold text-gray-800">
              {mentor.name.first} &nbsp; {mentor.name.last}
            </p>
            <p>Frontend Developer</p> <br />
            <a
              href="/mentors/[mentorId]"
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
