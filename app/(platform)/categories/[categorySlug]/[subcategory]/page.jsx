import React from 'react'

export default async function SubCategory({params}) {
    const para = await params;
    const {categorySlug, subcategory} = para;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        {categorySlug} / {subcategory}
      </h1>

      <p className="mt-4">
        Showing courses for this subcategory.
      </p>
    </div>
  )
}
