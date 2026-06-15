"use client";

import Link from "next/link";
  
export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full flex justify-end items-center gap-8 p-6 bg-black/20 backdrop-blur-lg border
     border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] transition-all duration-300">

      <Link href="/" className="text-lg font-medium text-olive-900 hover:text-amber-900 transition">
        Home
      </Link>
      <Link href="/about" className="text-lg font-medium text-olive-900 hover:text-amber-900 transition">
        About
      </Link>
      <Link href="/blogs" className="text-lg font-medium text-olive-900 hover:text-amber-900 transition">
        Blogs
      </Link>
    </nav>
  );
}
