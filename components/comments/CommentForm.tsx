'use client';

import { useState } from 'react';
import { FiUser, FiSend } from "react-icons/fi";

export default function CommentForm() {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New comment:', commentText);
    setCommentText('');
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 mb-8">
      <div className="flex items-start gap-4">
        {/* user img */}
        <div className="w-12 h-12 rounded-full bg-pinkMain/20 flex items-center justify-center">
          <FiUser className="text-pinkMain text-xl" />
        </div>
        
        {/* type here */}
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full h-32 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-pinkMain focus:border-transparent outline-none"
            rows={4}
            required
          />
          
          {/* button */}
          <div className="flex items-center justify-end mt-4">
            
            <div className="flex items-center gap-3">
              <button 
                type="submit"
                className="flex items-center gap-2 bg-pinkMain text-white px-6 py-2 rounded-full hover:bg-pink-300 transition-colors"
              >
                <FiSend />
                <span>Post Comment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}