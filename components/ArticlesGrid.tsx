import ArticleCard from "./ArticleCard";
import { GetAllPosts } from "@/lib/api";

export default async function ArticlesGrid() {
    const data = await GetAllPosts();
    console.log("Data from GetAllPosts:", data);
    const posts = data.posts;
  
    return (
      <div className="container mx-auto px-4 py-12">
        {/* heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-pinkMain font-istok text-center mb-4">Articles</h1>
        </div>
  
        {/* article grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {posts.map((post: any) => (
            <ArticleCard key={post.id} article={post} />
          ))}
        </div>
      </div>
    );
  }

  
