
import Link from "next/link";


export function BlogCard({ post }: { post: any }) {
  return (
    <div className="w-full p-3.5 rounded-lg border-b-2 border-teal-800">
      <Link href={`/blogs/${post.slug.current}`}>
      <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
      </Link>
     
    </div>
  );
}