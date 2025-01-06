import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/hero/HeroSection';
import Services from './components/Services';
import About from './components/About';
import BlogSection from './components/blog/BlogSection';
import BlogPost from './routes/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLayout from './routes/admin/AdminLayout';
import Login from './routes/admin/Login';
import BlogPosts from './routes/admin/BlogPosts';
import NewPost from './routes/admin/NewPost';
import EditPost from './routes/admin/EditPost';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<BlogPosts />} />
          <Route path="posts" element={<BlogPosts />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={
          <div className="min-h-screen bg-black">
            <Header />
            <main>
              <HeroSection />
              <Services />
              <About />
              <BlogSection />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;