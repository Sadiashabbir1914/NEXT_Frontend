export async function Slug(id) {
  const data = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!data.ok) throw new Error("Post not Found!");

  return data.json(); 
}

export default async function BlogPostPage({ params }) {
  const para = await params;
  const post = await Slug(para.slug);
  return (
    <>
    <h1 className="text-4xl font-bold text-center">{post.title} </h1>
    <p className="mt-4 text-gray-600 text-center">
        {para.year} / {para.month}{" "}
    </p> <br />
    <div className="p-6 bg-gray-300">
      <br /><p className="mt-6">{post.body} </p> <br />

      <div className="flex justify-evenly">
        <p>Total Views: {post.views} </p>
        <p>Likes: {post.reactions.likes} </p>
        <p>Dislikes: {post.reactions.dislikes} </p>
      </div>
    </div>
    </>
  );
}
