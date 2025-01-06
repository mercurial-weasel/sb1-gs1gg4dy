import React from 'react';
import { Calendar } from 'lucide-react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, imageUrl, category, slug }: BlogCardProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="px-3 py-1 bg-[#249826]/10 text-[#249826] text-sm rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{excerpt}</p>
        <Link to={`/blog/${slug}`}>
          <Button variant="secondary" className="w-full">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}