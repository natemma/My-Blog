import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import {GetAllCategories, GetPostByCateg } from "@/lib/api";

export async function generateStaticParams() {
 try {
    // Получаем реальные категории из API
    const categories = await GetAllCategories();
    
    return categories.map((category: Category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  
  const postsPromise = GetPostByCateg(slug);
  const categoriesPromise = GetAllCategories();
  
  const [posts, categories] = await Promise.all([
    postsPromise,
    categoriesPromise
  ]);
  

  const currentCategory = categories.find((cat: Category) => cat.slug === slug);
  
  if (!currentCategory) {
    notFound();
  }


   const formattedArticles = Array.isArray(posts) ? posts.map((post: any) => ({
    id: post.id,
    title: post.title || "Без названия",
    slug: post.slug || slug,
    excerpt: post.excerpt || "",
    content: post.content || "", // Добавьте content в GraphQL запрос если нужно
    createdAt: post.createdAt 
      ? new Date(post.createdAt).toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      : "Не указана",
    category: post.category?.name || "Без категории",
    tags: post.tags || [],
    author: post.author?.name || "Аноним",
    image: post.image || null, // ← Обратите внимание: post.image уже содержит {url: ...}
  })) : [];

  return (
    <div className="min-h-screen bg-white">
      
      <main className="container mx-auto px-4 py-12">
        {/* categories names */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pinkMain text-white px-6 py-2 rounded-full text-lg font-medium mb-4">
            {currentCategory.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-istok mb-4">
            {currentCategory.name} Articles
          </h1>
          <p className="text-gray-600 text-lg">
            {formattedArticles.length} articles in this category
          </p>
        </div>

        {/* articles list */}
        {formattedArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {formattedArticles.map((article: Article) => (
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