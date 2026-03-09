import Link from "next/link";
import { PATHS } from "@/app/_lib/data";

export const metadata = {
  title: "Learning Paths"
};

export default function Paths() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Learning Paths</h1> <br />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {PATHS.map((path) => (
          <Link
            key={path.slug}
            href={`/paths/${path.slug}`}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-gray-300"
          >
            <h2 className="text-xl font-semibold">{path.title}</h2>
            <p className="text-gray-600 mt-2">{path.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}