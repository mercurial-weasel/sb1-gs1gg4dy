import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../../components/admin/PostForm';
import { getBlogPostById, updateBlogPost } from '../../lib/blog';
import type { BlogPost } from '../../types/blog';

export default function EditPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      loadPost();
    }
  }, [id]);

  async function loadPost() {
    try {
      const data = await getBlogPostById(id!);
      setPost(data);
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(postData: Partial<BlogPost>) {
    try {
      await updateBlogPost(id!, postData);
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }

  if (loading) return <div className="text-white">Loading...</div>;
  if (!post) return <div className="text-white">Post not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Edit Post</h1>
      <PostForm initialData={post} onSubmit={handleSubmit} />
    </div>
  );
}