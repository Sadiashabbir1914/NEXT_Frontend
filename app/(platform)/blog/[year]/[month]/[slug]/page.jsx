export async function Slug(id) {
  const data = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!data.ok) throw new Error("Post not Found!");

  return data.json();
}

export default async function BlogPostPage({ params }) {
  const para = await params;
  const post = await Slug(para.slug);
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{post.title} </h1>

      <p className="mt-4 text-gray-600">
        {para.year} / {para.month}{" "}
      </p>

      <p className="mt-6">{post.body} </p>

      <p>Total Views: {post.views} </p>
      <p>Likes: {post.reactions.likes} </p>
      <p>Dislikes: {post.reactions.dislikes} </p>
    </div>
  );
}
