import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    // Increased min-height to screen and added significant bottom padding (pb-32) 
    // to extend the blue background downwards as requested
    <section id="home" className="relative min-h-screen flex items-center bg-corporate-900 overflow-hidden pb-32">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        >
          {/* Abstract Network/Financial Growth Video - Blue tones matching corporate identity */}
          <source 
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay for Text Readability - blending nicely with the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-900 via-corporate-900/90 to-corporate-900/60"></div>
        
        {/* Subtle Noise Texture for Professional Finish */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse duration-[4s]"></div>

      {/* Content - Added pt-32 to balance the layout vertically */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck className="w-4 h-4 text-accent-500" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">Dapen Jasa Marga</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Mewujudkan Masa Depan <br/>
            {/* Changed from gradient to solid white as requested */}
            <span className="text-white">
              Sejahtera & Bahagia
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Kami mengelola dana pensiun karyawan Jasa Marga dengan prinsip kehati-hatian, transparansi, dan profesionalisme untuk memberikan manfaat pasti di hari tua.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a 
              href="#services" 
              className="flex items-center justify-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-accent-600/20 cursor-pointer"
            >
              <span>Layanan Peserta</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:border-white/40 cursor-pointer"
            >
              <span>Tentang Kami</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">1983</span>
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Tahun Berdiri</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">4.000+</span>
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Peserta</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">100%</span>
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Komitmen Layanan</span>
            </div>
             <div className="hidden md:flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">PPMP</span>
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Program Manfaat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};