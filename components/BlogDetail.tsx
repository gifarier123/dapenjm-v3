import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { NewsItem } from '../types';

interface BlogDetailProps {
  post: NewsItem;
  onBack: () => void;
  relatedNews: NewsItem[];
  onRelatedClick: (item: NewsItem) => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack, relatedNews, onRelatedClick }) => {
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-corporate-900/50 z-10"></div>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 md:px-6 flex flex-col justify-end pb-16">
          <button 
            onClick={onBack}
            className="absolute top-8 left-4 md:left-6 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
          
          <div className="max-w-4xl animate-in slide-in-from-bottom-6 fade-in duration-700">
            <span className="inline-block px-3 py-1 bg-accent-600 text-white text-xs font-bold uppercase tracking-wider rounded-md mb-4 shadow-lg">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight shadow-sm">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-400" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent-400" />
                Admin Dapen
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-400" />
                5 menit baca
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg prose-slate max-w-none">
              {/* First paragraph stylized */}
              <p className="lead text-xl text-gray-600 mb-8 font-medium leading-relaxed border-l-4 border-accent-500 pl-6">
                {post.summary}
              </p>
              
              {/* Main Body */}
              <div className="text-gray-800 leading-8 space-y-6 text-justify">
                {post.content ? (
                  post.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{post.summary}</p>
                )}
              </div>
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Bagikan Artikel
              </h4>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-corporate-900 mb-6 pb-4 border-b border-gray-200">
                Berita Lainnya
              </h3>
              <div className="space-y-6">
                {relatedNews.filter(item => item.id !== post.id).slice(0, 3).map((item) => (
                  <div 
                    key={item.id} 
                    className="group cursor-pointer flex gap-4 items-start"
                    onClick={() => onRelatedClick(item)}
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-accent-600 uppercase tracking-wider mb-1 block">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-corporate-600 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-2 block">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={onBack}
                className="w-full mt-8 bg-white border border-gray-200 text-corporate-900 font-bold py-3 rounded-xl hover:bg-corporate-50 transition-colors"
              >
                Lihat Semua Berita
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
