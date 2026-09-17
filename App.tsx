import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { News, newsItems } from './components/News';
import { Files } from './components/Files';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoginModal } from './components/LoginModal';
import { Dashboard } from './components/Dashboard';
import { BlogDetail } from './components/BlogDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { User, NewsItem } from './types';

const isPrivacyPath = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path === '/kebijakan-privasi' || path.startsWith('/kebijakan-privasi') || hash === '#kebijakan-privasi';
};

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // View State - initialized based on URL
  const [view, setView] = useState<'home' | 'blog' | 'privacy'>(() => {
    return isPrivacyPath() ? 'privacy' : 'home';
  });
  const [selectedPost, setSelectedPost] = useState<NewsItem | null>(null);

  // Sync with browser back/forward buttons (History API)
  useEffect(() => {
    const handlePopState = () => {
      if (isPrivacyPath()) {
        setView('privacy');
        setSelectedPost(null);
      } else {
        setView('home');
        setSelectedPost(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const handlePrivacyClick = () => {
    setView('privacy');
    setSelectedPost(null);
    if (window.location.pathname !== '/kebijakan-privasi') {
      window.history.pushState({ view: 'privacy' }, '', '/kebijakan-privasi');
    }
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedPost(null);
    if (window.location.pathname === '/kebijakan-privasi' || window.location.hash === '#kebijakan-privasi') {
      window.history.pushState({ view: 'home' }, '', '/');
    }
    window.scrollTo(0, 0);
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
         <Footer onPrivacyClick={handlePrivacyClick} />
         <ChatAssistant />
         <LoginModal 
           isOpen={isLoginOpen} 
           onClose={() => setIsLoginOpen(false)} 
           onLoginSuccess={handleLoginSuccess}
         />
      </div>
    );
  }

  // View: Privacy Policy
  if (view === 'privacy') {
    return (
      <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-accent-500 selection:text-white">
         <Header 
            onLoginClick={() => setIsLoginOpen(true)} 
            onNavigateHome={handleBackToHome}
         />
         <PrivacyPolicy onBack={handleBackToHome} />
         <Footer onPrivacyClick={() => {
           window.scrollTo({ top: 0, behavior: 'smooth' });
         }} />
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
        <Files />
        <Portfolio />
        <Contact />
      </main>
      <Footer onPrivacyClick={handlePrivacyClick} />
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