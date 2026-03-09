import next from "next";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blog",
};

export default async function Blog() {
  const data = await fetch("https://dummyjson.com/posts?limit=5", {
    next: { revalidate: 3600 },
  });
  const blog_data = await data.json();

  return (
    <>
    <h1 className="text-4xl font-bold mb-6">Welcome to our Blogs</h1> <br />
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
      {blog_data.posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/2025/12/${post.id}`}
          className="bg-white rounded-xl overflow-hidden shadow-gray-900 hover:shadow-lg transition"
        >
          <div className="p-5 bg-gray-300">
            <h3 className="font-semibold text-lg">
              {post.title}
            </h3>

            <p className="text-sm mt-2">{post.description}</p>

            <div className=" mt-4 text-sm">
              <span>Total Views: {post.views}</span> <br />
              <span>Likes: {post.reactions.likes}</span> <br />
              <span>Dislikes: {post.reactions.dislikes}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}
