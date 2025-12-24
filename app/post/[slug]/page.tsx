import Image from "next/image";
import { notFound } from "next/navigation";
import { FiCalendar, FiUser, FiMessageSquare, FiSend} from "react-icons/fi";
import CommentsList from "@/components/comments/CommentsList";
import { GetOnePost } from "@/lib/api";


export async function generateMetadata({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await GetOnePost(slug);
    console.log('PostPage: post data:', post);
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested post could not be found.',
      };
    }
    
    return {
      title: `${post.title} | MY BLOG`,
      description: post.excerpt,
    };
  }
  
  export default async function PostPage({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await GetOnePost(slug);

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
            {post.excerpt}
          </p>
  
          {/* photo */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image?.url ? `http://localhost:3001${post.image.url}` : "/images.jpg"}
              alt={post.title|| "Blog post image"}
              fill
              unoptimized
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
          <div className="flex gap-3 flex-wrap mb-12">
          {post.tags?.map((tag:{name: string}, i:number) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-pinkMain/10 text-pinkMain"
            >
              #{tag.name}
            </span>
          ))}
        </div>
  

        {/* comments section */}
        <CommentsList postId={post.id} />  
        </main>
      </div>
    );
}
