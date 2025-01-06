import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function AdminSidebar() {
  const navigate = useNavigate();

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6">
      <nav className="space-y-1">
        <Link
          to="/admin/posts"
          className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
        >
          <FileText className="w-5 h-5 mr-3" />
          Blog Posts
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <button
          onClick={handleSignOut}
          className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg w-full"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}