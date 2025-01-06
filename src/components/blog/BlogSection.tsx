import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogGrid from './BlogGrid';
import GridBackground from '../effects/GridBackground';
import { getBlogPosts } from '../../lib/blog';
import type { BlogPost } from '../../types/blog';

export default function BlogSection() {
  const navigate = useNavigate();
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <section id="blog" className="relative bg-black py-24 overflow-hidden">
      <GridBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeader />
        {loading ? (
          <div className="text-center text-gray-400">Loading posts...</div>
        ) : (
          <BlogGrid posts={posts} />
        )}
      </div>
    </section>
  );
}