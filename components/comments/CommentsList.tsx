'use client';

import { FiMessageSquare } from "react-icons/fi";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import { mockComments } from "@/types/comment";

interface CommentsListProps {
  postId?: number;
  showForm?: boolean;
}

export default function CommentsList({ postId, showForm = true }: CommentsListProps) {
  // downloand comments with postId
  
  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      
      {/* heading */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FiMessageSquare className="text-2xl text-pinkMain" />
          <h2 className="text-2xl font-bold text-gray-800 font-istok">
            Comments ({mockComments.length})
          </h2>
        </div>
        
        
      </div>

      {/* comment form */}
      {showForm && <CommentForm />}

      {/* comments list */}
      <div className="space-y-8">
        {mockComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {/* show more */} 
       <div className="text-center mt-10">
        <button className="px-6 py-3 border border-pinkMain text-pinkMain rounded-full hover:bg-pinkMain hover:text-white transition-colors">
          Load More Comments
        </button>
      </div>
    </section>
  );
}