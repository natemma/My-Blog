import Image from "next/image";
import { notFound } from "next/navigation";
import { FiCalendar, FiUser, FiMessageSquare, FiSend} from "react-icons/fi";
import { mockArticles } from "@/types/article";
import CommentsList from "@/components/comments/CommentsList";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postId = parseInt(id);
    const post = mockArticles.find(article => article.id === postId);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested post could not be found.',
      };
    }
    
    return {
      title: `${post.title} | MY BLOG`,
      description: post.description,
    };
  }
  
  export default async function PostPage({ params }: { params: { id: string } }) {
    //  get id from params with await
        const { id } = await params;
        const postId = parseInt(id);
        
        // get post
        const post = mockArticles.find(article => article.id === postId);
        
        if (!post) {
            notFound();
        }
  
    return (
      <div className="min-h-screen bg-white">
        
        <main className="container mx-auto px-4 py-8 font-istok max-w-4xl">
          
          {/* category */}
          <div className="mb-6">
            <span className="inline-block bg-pinkMain text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category || "Games"}
            </span>
          </div>
  
          {/* heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-istok mb-6">
            {post.title}
          </h1>
  
          {/* author and date*/}
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <FiUser className="text-pinkMain" />
              <span className="font-medium">{post.author || "Author"}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-pinkMain" />
              <span>{post.date || "Recent"}</span>
            </div>
          </div>
  
          {/* description */}
          <p className="text-xl text-gray-700 mb-10 leading-relaxed border-l-4 border-pinkMain pl-4 py-2">
            {post.description}
          </p>
  
          {/* photo */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.img}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
  
          {/* post's content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed font-istok space-y-6">
              <p className="text-xl font-istok">
                {post.content}      
              </p>
             
            </div>
          </article>
  
          {/* tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {post.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-pinkMain/10 text-pinkMain px-4 py-2 rounded-full hover:bg-pinkMain hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              )) || (
                <>
                  <span className="bg-pinkMain/10 text-pinkMain px-4 py-2 rounded-full">
                    #gaming
                  </span>
                  <span className="bg-pinkMain/10 text-pinkMain px-4 py-2 rounded-full">
                    #news
                  </span>
                  <span className="bg-pinkMain/10 text-pinkMain px-4 py-2 rounded-full">
                    #update
                  </span>
                </>
              )}
            </div>
          </div>
  

        {/* comments section */}
        <CommentsList postId={postId} />  
        </main>
      </div>
    );
}
