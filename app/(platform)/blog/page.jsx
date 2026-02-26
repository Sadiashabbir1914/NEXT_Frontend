import next from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Blog"
}

export default async function Blog() {
  const data = await fetch("https://dummyjson.com/posts?limit=5", 
    {next: {revalidate: 3600}});
  const blog_data = await data.json();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to our Blogs</h1>
      {
        blog_data.posts.map(post => (
          <Link key={post.id} href={`/blog/2025/12/${post.id}`}
          className="block border p-4 mb-4">
            <h2> {post.title} </h2>  
            <p>{post.body} </p> <br />
            <p>Total Views: {post.views} </p>
            <p>Likes: {post.reactions.likes} </p>
            <p>Dislikes: {post.reactions.dislikes} </p> 
          </Link>  
        ))
      }
    </div>
  )
}
