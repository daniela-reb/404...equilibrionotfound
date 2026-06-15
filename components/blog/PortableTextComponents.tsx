import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";

export const portableTextComponents: PortableTextComponents = {
    block: {
        h1:({children}) => (
            <h1 className= "text-4xl font-bold mt-10 mb-6">
                {children}
            </h1>
        ),
        h2:({children}) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4">
                {children}
                </h2>
        ),
        h3:({children}) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3">
                {children}  
            </h3>
        ),
        normal:({children}) => (
            <p className ="leading-8 mb-4 text-lg">
           {children}
            </p>
        ),
        blockquote:({children}) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
                {children}
            </blockquote>
        ),
    },
    list:{
        bullet:({children}) => (
            <ul className="list-disc pl-6 my-4">
                {children}
            </ul>
        ),
    },
    marks: {
        strong:({children}) => (
            <strong className="font-bold">
                {children}
            </strong>
        ),
        em:({children}) => (
            <em className ="italic">
                {children}
             </em>
        ),
           
        link:({children, value}) => (
          <Link
           href={value?.href}
           target="_blank"
           className="underline"
           >
            {children}
           </Link>
        ),
    },
    types: {
        image:({value}) => (
            <div className="my-8">
              <Image
              src={urlFor(value).url()}
              alt={value.alt || "Blog Image"}
              width={1200}
              height={700}
              className="rounded-lg"
              />
            </div>
        ),
    },
}