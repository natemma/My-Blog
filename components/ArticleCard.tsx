import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

// Тип для статьи (пока заглушка, потом подключим с бэкенда)
interface Article {
    id: number;
    img: string;
    title: string;
    description: string;
    date?: string;
    category?: string;
  }
  
  // Временные данные для демонстрации
 export const mockArticles: Article[] = [
    { id: 1, img: "/img/LUTT.jpg", title: "Light Up The Town, Released: November 28, 2025", description: "Cozy, casual holiday game for all ages. Play as Bean, a precocious young ferret, and explore the town of Bellflower, Colorado as you hang up festive string lights around to spread holiday cheer. Click to throw a light or decoration; the only limit is your imagination." },
    { id: 2,  img: "/img/REPO.jpg",title: "R.E.P.O.", description: "R.E.P.O. has a big Halloween update" },
    { id: 3,  img: "/img/Peak.jpg", title: "Peak", description: "Peak gets a Root biome and balance fixes: a new update for a fun simulator" },
    { id: 4,  img: "/img/Thrifty Business.webp",title: "Thrifty Business", description: "The colorful Thrifty Business simulator will show the life of a thrift store in 2026" },
    { id: 5,  img: "/img/Roblox.jpg",title: "Roblox", description: "Roblox has been blocked in the Russia" },
    { id: 6,  img: "/img/stardewValley.jpg", title: "Stardew Valley", description: "Stardew Valley became the most-rated game on Steam, surpassing Portal 2 and Terraria" },
    { id: 7,  img: "/img/MashaGame.png", title: "Forzen", description: "I LOVE THEMMMM" },
  ];

export default function ArticleCard({ article }: { article: Article }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        
             {/* Image */}
            <div className="relative h-48 overflow-hidden group">
                <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                
                {/* {article.category && (
                <div className="absolute top-0 right-0 z-10">
                    <span className="inline-block text-xs bg-pinkMain px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-pinkMain transition duration-500 ease-in-out rounded-full">
                    {article.category}
                    </span>
                </div> */}
                {/* )} */}
            </div>
           

            {/* heading */}
            <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 font-istok mb-3 line-clamp-2">
                {article.title}
            </h3>
            
            {/* description */}
            <p className="text-gray-600 mb-4 line-clamp-3">
                {article.description}
            </p>
            
            {/*  read button */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">5 min read</span>
                <button className="flex items-center gap-2 text-pinkMain hover:text-pinkMain font-medium transition-colors group">
                <span>Read</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
        
      </div>
    );
  }