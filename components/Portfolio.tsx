import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

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
  },
  {
    id: 4,
    title: "Distribusi Portofolio",
    category: "Diversifikasi",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Analisis Risiko Pasar",
    category: "Manajemen Risiko",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Proyeksi Imbal Hasil",
    category: "Proyeksi",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
  }
];

export const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const openLightbox = (e: React.MouseEvent, item: PortfolioItem) => {
    e.preventDefault();
    setSelectedImage(item);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              onClick={(e) => openLightbox(e, item)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-corporate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <span className="text-accent-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-corporate-900 font-bold text-lg leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
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
