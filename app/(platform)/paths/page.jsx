import React from 'react';
import { GetCategories } from '../categories/page';
import Link from 'next/link';

export const metadata = {
  title: "Learning Paths"
}

export default async function Category() {
  const categories = await GetCategories();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Learning Paths</h1>

      <div className="grid grid-cols-2 gap-4">
        {categories.slice(0,4).map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="p-4 border rounded hover:bg-gray-100"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

