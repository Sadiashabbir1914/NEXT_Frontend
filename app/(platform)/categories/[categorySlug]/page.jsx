import Link from "next/link";

async function GetCategoryProducts(slug) {
    const data = await fetch(`https://dummyjson.com/products/category/${slug}`,{
        next: {revalidate: 3600}
    });

    if (!data.ok) throw new Error("Failed to Load Categories...");

    return data.json();
}

export default async function CategoriesSlug({params}) {
    const para = await params;
    const slugs = await GetCategoryProducts(para.categorySlug);

    return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {para.categorySlug}
      </h1>

      {slugs.products.map((product) => (
        <Link key={product.id} href={`/categories/${para.categorySlug}/${para.subcategory}`}
          className="block border p-4 mb-3"
        >
          {product.title}
        </Link>
      ))}
    </div>
  );
}
