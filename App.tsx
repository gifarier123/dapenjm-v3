import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoginModal } from './components/LoginModal';
import { Dashboard } from './components/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

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

  if (isLoggedIn && user) {
    return (
      <Dashboard user={user} onLogout={handleLogout} />
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-accent-500 selection:text-white">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <News />
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