"use client"

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Sidebar() {
    const Pathname = usePathname();
    const linkStyle = (path) => {
        if(Pathname === path){
            return "font-bold bg-blue-600";
        }
        else{
            return "";
        }
    }
  return (
    <div>

      <aside className='w-56 bg-gray-400 min-h-5/5 p-4'>
        <h2 className='mb-6 text-2xl font-bold'>SkillForge</h2>
        
        <nav className='flex flex-col gap-3'>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/paths">Learning Paths</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/blog">Blogs</Link>
        </nav>

      </aside>

    </div>
  )
}
