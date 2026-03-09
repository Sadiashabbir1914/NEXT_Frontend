"use client"

import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='flex min-h-screen'>

      <aside className='w-56 bg-slate-900 text-slate-200 p-4 m-0'>
        <h2 className='mb-6 text-2xl font-bold'>SkillForge</h2> <br />
        
        <nav className='flex flex-col gap-3'>
          <Link href="/" className='hover:bg-gray-500 h-9 p-9'>Home</Link>
          <Link href="/dashboard" className='hover:bg-gray-500 h-9 p-9'>Dashboard</Link>
          <Link href="/courses" className='hover:bg-gray-500 h-9 p-9'>Courses</Link>
          <Link href="/mentors" className='hover:bg-gray-500 h-9 p-9'>Mentors</Link>
          <Link href="/paths" className='hover:bg-gray-500 h-9 p-9'>Learning Paths</Link>
          <Link href="/categories" className='hover:bg-gray-500 h-9 p-9'>Categories</Link>
          <Link href="/blog" className='hover:bg-gray-500 h-9 p-9'>Blogs</Link>
        </nav>

      </aside>

    </div>
  )
}
