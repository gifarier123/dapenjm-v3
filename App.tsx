import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { News, newsItems } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoginModal } from './components/LoginModal';
import { Dashboard } from './components/Dashboard';
import { BlogDetail } from './components/BlogDetail';
import { User, NewsItem } from './types';

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Blog State
  const [view, setView] = useState<'home' | 'blog'>('home');
  const [selectedPost, setSelectedPost] = useState<NewsItem | null>(null);

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    window.scrollTo(0, 0);
  };

  // Navigation Handlers
  const handleNewsClick = (item: NewsItem) => {
    setSelectedPost(item);
    setView('blog');
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedPost(null);
    // Note: Scroll restoration is handled by Header logic or manually here if needed, 
    // but typically we let Header handle ID scrolling if clicked, or just scroll top here.
    if (view === 'blog') window.scrollTo(0, 0);
  };

  // View: Dashboard (User Logged In)
  if (isLoggedIn && user) {
    return (
      <Dashboard user={user} onLogout={handleLogout} />
    );
  }

  // View: Blog Detail
  if (view === 'blog' && selectedPost) {
    return (
      <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-accent-500 selection:text-white">
         <Header 
            onLoginClick={() => setIsLoginOpen(true)} 
            onNavigateHome={handleBackToHome}
         />
         <BlogDetail 
            post={selectedPost} 
            onBack={handleBackToHome}
            relatedNews={newsItems}
            onRelatedClick={handleNewsClick}
         />
         <Footer />
         <ChatAssistant />
         <LoginModal 
           isOpen={isLoginOpen} 
           onClose={() => setIsLoginOpen(false)} 
           onLoginSuccess={handleLoginSuccess}
         />
      </div>
    );
  }

  // View: Main Landing Page
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-accent-500 selection:text-white">
      <Header 
        onLoginClick={() => setIsLoginOpen(true)} 
        onNavigateHome={handleBackToHome}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <News onNewsClick={handleNewsClick} />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default App;