import { FiArrowRight } from "react-icons/fi";

// Тип для статьи (пока заглушка, потом подключим с бэкенда)
interface Article {
    id: number;
    title: string;
    description: string;
    date?: string;
    category?: string;
  }
  
  // Временные данные для демонстрации
  const mockArticles: Article[] = [
    { id: 1, title: "Путешествие в Японию", description: "Мой опыт посещения Токио и Киото весной 2024" },
    { id: 2, title: "Рецепты здорового питания", description: "Простые и вкусные блюда на каждый день" },
    { id: 3, title: "Йога для начинающих", description: "Основные асаны и техники дыхания" },
    { id: 4, title: "Сад на балконе", description: "Как вырастить зелень и овощи в городских условиях" },
    { id: 5, title: "Изучение английского", description: "Эффективные методы и приложения" },
    { id: 6, title: "DIY проекты для дома", description: "Простые идеи для творчества и рукоделия" },
  ];



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

  // card
function ArticleCard({ article }: { article: Article }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        
        {/* Заголовок */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 font-istok mb-3 line-clamp-2">
            {article.title}
          </h3>
          
          {/* Описание */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.description}
          </p>
          
          {/* Кнопка Read */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">5 min read</span>
            <button className="flex items-center gap-2 text-pinkMain hover:text-pink-700 font-medium transition-colors group">
              <span>Read</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
  
      </div>
    );
  }