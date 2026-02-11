import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple spy to detect active section
      const sections = ['home', 'about', 'services', 'gallery', 'news', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in view (with header offset)
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Tentang Kami', href: '#about', id: 'about' },
    { name: 'Layanan', href: '#services', id: 'services' },
    { name: 'Galeri', href: '#gallery', id: 'gallery' },
    { name: 'Berita', href: '#news', id: 'news' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
      setActiveSection(targetId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 group cursor-pointer" 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg border border-corporate-100 transition-transform group-hover:scale-105 overflow-hidden p-1 flex-shrink-0">
              <img 
                src="https://img.playbook.com/O_-Jh_vvPIwvHo8zemEPMcHR5E9_ol-_B6lmVlgh6tw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2MGY1YjE5/LWMwYzgtNDhhNi1i/MTU1LWE2MzIyOGY0/NTFmNg" 
                alt="Logo Dapen Jasa Marga" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/0e3d6b/ffffff?text=JM';
                }}
              />
            </div>
            <div className={`flex flex-col justify-center ${isScrolled ? 'text-corporate-900' : 'text-white'}`}>
              <span className="font-bold text-sm md:text-lg tracking-tight leading-none">Dana Pensiun Jasa Marga</span>
              <span className="text-[10px] md:text-xs font-medium text-accent-500 tracking-wide mt-0.5 uppercase">Sehat, Sejahtera, Bahagia</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative group py-2 ${
                  activeSection === link.id 
                    ? 'text-accent-500' 
                    : isScrolled ? 'text-gray-700 hover:text-accent-500' : 'text-gray-100 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
              </a>
            ))}
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-accent-500/30 transform hover:scale-105 hover:-translate-y-0.5"
            >
              <LogIn className="w-4 h-4" />
              Login Peserta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-corporate-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-corporate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-5 max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium border-b border-gray-50 pb-3 flex justify-between items-center ${
                  activeSection === link.id ? 'text-accent-600' : 'text-gray-700 hover:text-corporate-900'
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                {activeSection === link.id && <div className="w-1.5 h-1.5 rounded-full bg-accent-600"></div>}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLoginClick();
              }}
              className="bg-corporate-900 text-white w-full py-3.5 rounded-xl font-bold mt-4 flex items-center justify-center gap-2 shadow-lg hover:bg-corporate-800 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login Peserta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};