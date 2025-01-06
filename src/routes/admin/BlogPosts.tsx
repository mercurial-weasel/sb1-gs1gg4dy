import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAdminBlogPosts } from '../../lib/blog';
import Button from '../../components/shared/Button';
import PostsTable from '../../components/admin/PostsTable';
import type { BlogPost } from '../../types/blog';

export default function BlogPosts() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const data = await getAdminBlogPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
        <Link to="/admin/posts/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>
      
      {loading ? (
        <div className="text-gray-400">Loading posts...</div>
      ) : (
        <PostsTable posts={posts} onUpdate={loadPosts} />
      )}
    </div>
  );
}