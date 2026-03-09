import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/app/_lib/data";

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
} 

export default function Categories() {
  return (
    <div className="p-4 space-y-2">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/categories/${cat.slug}`}
          className="ml-96 block p-2 rounded hover:bg-gray-200"
        >
          <div className="bg-gray-400">
            <h2><span>{cat.icon}</span>{cat.name}</h2>
            <p>{cat.description}</p>
            <p>{cat.level}</p>
          </div>
          
        </Link>
      ))}
    </div>
  );
}
