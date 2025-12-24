import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";


export default function ArticleCard({ article }: { article: any }) {
    return (
        <Link href={`/post/${article.slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 min-h-[500px]">
             {/* Image */}
            <div className="relative h-48 overflow-hidden group">
                <Image
                    src={`http://localhost:3001${article.image?.url}`}
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                {/* category */}
                {article.category && (
            <div className="absolute top-0 right-0 z-10">
              <span className="inline-block text-s bg-pinkMain px-4 py-2 text-white mt-3 mr-3 rounded-full">
                {article.category?.name}
              </span>
            </div>
          )}

               
            </div>
           
            <div className="p-6 flex flex-col flex-grow">
                {/* heading */}
                <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 font-istok mb-3 line-clamp-2">
                    {article.title}
                </h3>
                
                {/* description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                </p>
                
                {/*  read button */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="flex items-center gap-2 text-pinkMain hover:text-pinkMain font-medium transition-colors group">
                    <span>Read</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
        
      </div>
      </Link>
    );
  }