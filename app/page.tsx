import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import ArticlesGrid from "@/components/ArticlesGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-10">
      {/* greeting senction  */}
      <section 
        className="mt-10 flex justify-center" 
        
      >
        <div className="w-[1523px] h-[630px] bg-pinkMain rounded-[60px] overflow-hidden"> 
          <div className="h-full flex items-center justify-between px-16">
            
            {/* Text */}
            <div className="w-1/2 pl-10">
              <h1 className="text-5xl md:text-8xl lg:text-7xl font-bold text-cremeMain font-istok leading-tight">
                <div>Your spot for</div>
                <div>game news, trends and</div>
                <div>excitement</div>
              </h1>
            </div>
            
            {/* Правая часть: Картинка */}
            <div className="w-1/2 flex justify-end h-full items-center">
              <div className="relative rounded-[40px] overflow-hidden">
                <Image
                  src="/img/ForGreett.jpg" 
                  alt="Inspiration and growth"
                  width={480} 
                  height={520}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* card grid section */}
      <ArticlesGrid />
    </div>
      
  );
}
