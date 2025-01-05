"use client"
import React, { useState, useEffect } from 'react';

// Define the type for a single comment
interface Comment {
  userName: string;
  comment: string;
}

const CommentSection: React.FC = () => {
  // State for comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  // Load comments from local storage on mount
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(storedComments);
  }, []);

  // Save comments to local storage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  // Handle form submission
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim()) return;

    const newComment: Comment = { userName, comment };
    setComments([newComment, ...comments]);
    setUserName('');
    setComment('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-blue-200 p-6 rounded-md shadow-md">
        {/* Comment Form */}
        <h1 className="text-3xl font-bold text-black mb-4">Comment Section</h1>
        <form onSubmit={handleAddComment} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="userName" className="block text-black mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="userName"
              className="w-full px-3 py-2 border border-gray-900 rounded bg-transparent text-black"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          {/* Comment Input */}
          <div>
            <label htmlFor="comment" className="block text-black mb-1">
              Your Comment
            </label>
            <textarea
              id="comment"
              className="w-full px-3 py-2 border border-gray-600 rounded bg-transparent text-black"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-200 text-black border border-black px-4 py-2 rounded hover:bg-blue-500 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div className="bg-blue-100 p-6 rounded-md shadow-md mt-6">
        <h2 className="text-2xl font-bold text-black mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-400">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded">
                <p className="text-blue-400 font-semibold">{comment.userName}</p>
                <p className="text-white">{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
