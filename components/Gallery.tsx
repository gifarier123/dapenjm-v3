import React from 'react';
import { GalleryItem } from '../types';
import { Camera } from 'lucide-react';

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop",
    caption: "Rapat Kerja Tahunan Dewan Pengawas & Direksi",
    category: "Kegiatan"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    caption: "Sosialisasi Program Pensiun ke Cabang",
    category: "Sosialisasi"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    caption: "Pelatihan Persiapan Masa Purnabakti",
    category: "Kegiatan"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    caption: "Gedung Kantor Pusat Dana Pensiun",
    category: "Fasilitas"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    caption: "Forum Komunikasi Pensiunan",
    category: "Sosialisasi"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    caption: "Kegiatan Olahraga Bersama",
    category: "Kegiatan"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Galeri Aktivitas</h2>
          <h3 className="text-3xl font-bold text-corporate-900 mb-4">Momen Kebersamaan & Profesionalisme</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden cursor-pointer h-72">
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-corporate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {item.category}
                </span>
                <p className="text-white font-semibold text-lg leading-tight">
                  {item.caption}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="text-corporate-900 font-bold border-b-2 border-accent-500 pb-1 hover:text-accent-600 transition-colors">
                Lihat Seluruh Galeri
            </button>
        </div>
      </div>
    </section>
  );
};