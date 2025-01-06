import React from 'react';
import BlogCard from './BlogCard';
import type { BlogPost } from '../../types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-400">
        No blog posts available at the moment.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={new Date(post.created_at).toLocaleDateString()}
          imageUrl={post.image_url}
          category={post.category}
          slug={post.slug}
        />
      ))}
    </div>
  );
}