import Image from "next/image";
import BookCard from "@/components/about/BookCard";

export default function About() {
  return (
    <div
      className="flex-1 overflow-x-hidden">
    
        <div className="fixed inset-0 -z-10">
                 <Image
                  src="/about-bg.jpg"
                  alt="Backgound Image"
                  fill
                  priority
                  className="object-cover object-center"
             />
            </div>


              <BookCard />
       
        
        
    </div>
  );
}