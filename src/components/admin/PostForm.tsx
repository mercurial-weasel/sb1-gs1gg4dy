import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import type { BlogPost } from '../../types/blog';

interface PostFormProps {
  initialData?: BlogPost;
  onSubmit: (data: Partial<BlogPost>) => Promise<void>;
}

export default function PostForm({ initialData, onSubmit }: PostFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const postData = {
      title: formData.get('title') as string,
      slug: formData.get('slug') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      image_url: formData.get('image_url') as string,
      category: formData.get('category') as string,
      published: formData.get('published') === 'true',
    };

    setLoading(true);
    try {
      await onSubmit(postData);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={initialData?.title}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-300">Slug</label>
        <input
          type="text"
          id="slug"
          name="slug"
          defaultValue={initialData?.slug}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">Excerpt</label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={3}
          defaultValue={initialData?.excerpt}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300">Content</label>
        <textarea
          id="content"
          name="content"
          rows={10}
          defaultValue={initialData?.content}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="image_url" className="block text-sm font-medium text-gray-300">Image URL</label>
        <input
          type="url"
          id="image_url"
          name="image_url"
          defaultValue={initialData?.image_url}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          defaultValue={initialData?.category}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Status</label>
        <div className="mt-1 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="published"
              value="true"
              defaultChecked={initialData?.published}
              className="text-[#249826]"
            />
            <span className="ml-2 text-gray-300">Published</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="published"
              value="false"
              defaultChecked={!initialData?.published}
              className="text-[#249826]"
            />
            <span className="ml-2 text-gray-300">Draft</span>
          </label>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Post'}
        </Button>
        <Button type="button" variant="secondary" onClick={() => navigate('/admin/posts')}>
          Cancel
        </Button>
      </div>
    </form>
  );
}