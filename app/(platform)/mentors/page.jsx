import { GetMentors } from '@/app/_lib/api';
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: "Mentors"
}

export default async function Mentor() {
    const ment = await GetMentors(); 
  return (
    <div>
        <h1 className='text-2xl font-bold mb-4'>Mentors</h1>
      {
        ment.results.map((mentor,i) => (
            <div key={i} className='flex gap-3 items-center mb-4 border p-3 rounded hover:bg-gray-50'>
                <Image src={mentor.picture.medium} width={60}
                 height={60} unoptimized alt='mentor'/>
                <p>{mentor.name.first} &nbsp; {mentor.name.last}</p>
            </div>
        ))
      }
    </div>
  )
}
