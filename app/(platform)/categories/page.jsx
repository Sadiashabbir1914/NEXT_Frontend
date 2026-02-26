import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Categories"
}

export async function GetCategories() {
  const data = await fetch("https://dummyjson.com/products/categories", {
    next: {revalidate: 3000}
  });

  if (!data.ok) throw new Error("Failed to fetch categories...");

  return data.json();
  
}

export default async function Category() {
  const categories = await GetCategories();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Categories</h1>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
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
