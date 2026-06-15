import Image from "next/image";
import { getPosts } from "@/sanity/lib/posts";
import {BlogCard} from "@/components/blog/BlogCard";

export default async function Blogs() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">

         <div className="fixed inset-0 -z-10">
              <Image
                src="/blog-page.jpg"
                alt="Background"
                fill
                priority
                className="object-cover"
              />
            </div>
            
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-5 bg-black/80 rounded-lg">
        {posts.map((post) => (
     <div key={post._id} className="w-full"> 
       <BlogCard key={post._id} post={post} />
      </div>
          ))}
      </main>
    </div>
  );
}