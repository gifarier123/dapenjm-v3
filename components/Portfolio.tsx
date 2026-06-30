import React, { useState } from 'react';
import { X, ZoomIn, Wrench } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Kinerja Investasi Saham",
    category: "Saham",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Alokasi Aset Obligasi",
    category: "Obligasi",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Pertumbuhan Dana Kelolaan",
    category: "Dana Kelolaan",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Kinerja & Portofolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-4">Portofolio Investasi</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Gambaran kinerja dan alokasi aset investasi Dana Pensiun Jasa Marga yang dikelola secara profesional dan transparan.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <Wrench className="w-10 h-10 text-orange-500" />
          </div>
          <h4 className="text-xl font-bold text-gray-900">Sedang Perbaikan</h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Mohon maaf, halaman Portofolio Investasi saat ini sedang dalam perbaikan. Silakan coba kembali beberapa saat lagi.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[80vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h4 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h4>
              <p className="text-white/60 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
