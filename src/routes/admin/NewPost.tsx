import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../../components/admin/PostForm';
import { createBlogPost } from '../../lib/blog';
import type { BlogPost } from '../../types/blog';

export default function NewPost() {
  const navigate = useNavigate();

  async function handleSubmit(postData: Partial<BlogPost>) {
    try {
      await createBlogPost(postData);
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}