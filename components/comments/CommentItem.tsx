'use client';

import { FiHeart } from "react-icons/fi";
import { Comment } from "@/types/comment";
import { BsPersonCircle } from "react-icons/bs";

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="border-b border-gray-100 pb-6 last:border-0">
      <div className="flex gap-4">
        
        {/* img */}
        <div className="flex-shrink-0 w-5 h-5 text-pinkMain">
        <BsPersonCircle className="text-pinkMain text-2xl" />
        </div>
        
        {/* comment body */}
        <div className="flex-1">
          
          {/* comment header */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="font-bold text-gray-800">{comment.author}</span>
              <span className="text-gray-500 text-sm ml-3">{comment.date}</span>
            </div>
            
          </div>
          
          {/* comments text */}
          <p className="text-gray-700 mb-4">
            {comment.text}
          </p>
          
          {/* actions */}
          <div className="flex items-center gap-6">
            {/* <button className="flex items-center gap-2 text-gray-500 hover:text-pinkMain">
              <FiHeart />
              <span>{comment.likes}</span> */}
            {/* </button> */}
            
            <button className="text-gray-500 hover:text-pinkMain">
              Reply
            </button>
          </div>
          
          {/* replyes to comment */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-6 ml-6 pl-6 border-l-2 border-gray-100">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="pt-4 first:pt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-pinkMain/10 flex items-center justify-center">
                      <span className="text-sm text-pinkMain font-bold">
                        {reply.author.charAt(0)}
                      </span>
                    </div>
                    <span className="font-bold text-gray-800">{reply.author}</span>
                    <span className="text-gray-500 text-sm">{reply.date}</span>
                  </div>
                  <p className="text-gray-600">{reply.text}</p>
                </div>
              ))}
            </div>
          )}
          
        </div>
        
      </div>
    </div>
  );
}