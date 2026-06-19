import AboutCard from "./AboutCard";
import { aboutData } from "@/data/aboutData";
 
const positions = [
    "md:top-24 md:left-10 ",
    "md:top-40 md:right-20 ",
    "md:bottom-40 md:right-10",
    "md:bottom-32 md:left-20 ",
    "md:bottom-20 md:right-1/3 ",
];

export default function BookCard() {
    return(
        <div className="w-full h-full overflow-hidden">
            {aboutData.map((card, index) => (
                <div 
                 key={card.id}
                className={`
                    w-full flex justify-center mb-6
                    md:absolute md:w-auto md:mb-0
                    ${positions[index]} 
                    bg-white/80 rounded-2xl
                    md:bg-transparent md:rounded-none
                    transition-all duration-300 
                    hover:scale-110 hover:z-50 hover:bg-white/80 hover:rounded-2xl
                `}
                >
                <AboutCard 
                id={card.id} 
                title={card.title} 
                description={card.description}
                 />

                </div>
             ))}
        </div>
    )
}