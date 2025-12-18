import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { mockArticles } from "@/types/article";

// slug to categories
const categoryMap: Record<string, string> = {
  'games': 'Games',
  'simulator': 'Simulator',
  'news': 'News',
  'horror': 'Horror',
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = categoryMap[slug];
  
  if (!categoryName) {
    notFound();
  }

  // filter our articles 
  const categoryArticles = mockArticles.filter(
    article => article.category?.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-white">
      
      <main className="container mx-auto px-4 py-12">
        {/* categories names */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pinkMain text-white px-6 py-2 rounded-full text-lg font-medium mb-4">
            {categoryName}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-istok mb-4">
            {categoryName} Articles
          </h1>
          <p className="text-gray-600 text-lg">
            {categoryArticles.length} articles in this category
          </p>
        </div>

        {/* articles list */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📭</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              No articles yet
            </h3>
            <p className="text-gray-600">
              There are no articles in this category yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}