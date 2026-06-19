import { getPostBySlug } from "@/sanity/lib/posts";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {notFound} from "next/navigation";

interface Props {
  params: Promise<{
    slug: string; 
  }>;
} 


export async function generateMetadata({
  params,
}: {
  params:Promise<{slug:string}>;
}) {
  const {slug} = await params;
  const post = await getPostBySlug(slug);
  if(!post){
    notFound();
  }

  return {
    title:post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}
 
export default async function BlogPost({ params }: Props) {

const {slug} =await params;
const post = await getPostBySlug(slug);
if(!post){
  notFound();
}
const formatDate = new Date(
  post.publishedAt
).toLocaleDateString("it-IT", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      
       <div className="fixed inset-0 -z-10">
            {post.mainImage && (
              <Image
              src={urlFor(post.mainImage).url()}
              alt={post?.mainImage.alt || post.title}
             fill
             priority
              className="object-cover"
              />
            )}
              </div>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 rounded-lg bg-white/90 md:bg-transparent md:hover:bg-white/90 transition-colors">
             <h1 className="text-3xl font-bold text-teal-900 tracking-wide">
            {post.title}
            </h1>
            
            <div className="mt-2 mb-6 text-sm">
              {post.author?.name && (
                <span>
                  Di {post.author.name}
                </span>
              )}
              {
                post.publishedAt && (
                  <span className="ml-2">
                  {" •"}
                    {formatDate}
                  </span>
                )}
            </div>

        <div className="flex flex-col gap-4 mt-4">
           <PortableText value = {post.body} 
           components={portableTextComponents}/>
        </div>
     </main>
    </div>
  );
}
