import { AboutCardData} from "@/data/aboutData";

export default function AboutCard({title, description}: AboutCardData) {
 
    return(
        <div className="flex flex-1 w-full max-w-md flex-col items-center gap-3 py-6 px-6 bg-white/20 rounded-2xl shadow-xl">
          
            <h1 className="text-lg font-bold text-white tracking-wide">
                {title}
                </h1>

                <p className="text-black tracking-wide text-sm">
                {description}
                </p>
            
        
        </div>
    )

}