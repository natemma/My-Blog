import ArticleCard from "./ArticleCard";
import {mockArticles} from "./ArticleCard";

export default function ArticlesGrid() {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-pinkMain font-istok text-center mb-4">Articles</h1>
        </div>
  
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  }

  
