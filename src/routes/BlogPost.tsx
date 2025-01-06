import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../lib/blog';
import { Calendar, ArrowLeft } from 'lucide-react';
import GridBackground from '../components/effects/GridBackground';
import LoadingScreen from '../components/shared/LoadingScreen';
import { useDelayedLoading } from '../hooks/useDelayedLoading';
import type { BlogPost } from '../types/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const showLoading = useDelayedLoading(loading);

  React.useEffect(() => {
    async function loadPost() {
      if (!slug) {
        setError('No post slug provided');
        setLoading(false);
        return;
      }

      try {
        const data = await getBlogPostBySlug(slug);
        if (!data) {
          setError('Post not found');
          return;
        }
        setPost(data);
      } catch (error) {
        console.error('Error loading post:', error);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (showLoading) {
    return <LoadingScreen />;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-white mb-4">{error || 'Post not found'}</div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <article className="relative min-h-screen bg-black pt-32 pb-24">
      <GridBackground />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="flex items-center space-x-4 mb-8">
          <span className="px-3 py-1 bg-[#249826]/10 text-[#249826] text-sm rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.created_at).toLocaleDateString()}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
        <div className="prose prose-invert max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}