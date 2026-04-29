import React, { useState, useRef } from 'react';
import { GalleryItem } from '../types';
import { Instagram, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const galleryItems: GalleryItem[] = [
  {
    id: 9,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/PPDP%20(1).jpeg?raw=true",
    caption: "PPDP Regulatory Dissemination Day 2026",
    category: "Kegiatan",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/PPDP%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/PPDP%20(2).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/PPDP%20(3).jpeg?raw=true"
    ]
  },
  {
    id: 1,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(1).jpeg?raw=true",
    caption: "Rapat pendiri 2026",
    category: "Kegiatan",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(2).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(3).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(4).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(5).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(6).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(7).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/rapat%20pendiri%20(8).jpeg?raw=true"
    ]
  },
  {
    id: 2,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(1).jpeg?raw=true",
    caption: "Kajian Switching instrumen investasi pada portofolio BHR dan MP",
    category: "Sosialisasi",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(2).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(3).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(4).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(5).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(6).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(7).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/kajian%20switching%20investasi%20(8).jpeg?raw=true"
    ]
  },
  {
    id: 3,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/SOSIALISASI%20PENSIUNAN%20%20(1).jpg?raw=true",
    caption: "Purnabakti kepada Karyawan Jasa Marga Batch 46.",
    category: "Kegiatan",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/SOSIALISASI%20PENSIUNAN%20%20(1).jpg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/SOSIALISASI%20PENSIUNAN%20%20(2).jpg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/SOSIALISASI%20PENSIUNAN%20%20(3).jpg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/SOSIALISASI%20PENSIUNAN%20%20(4).jpg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/SOSIALISASI%20PENSIUNAN%20%20(5).jpg?raw=true"
    ]
  },
  {
    id: 4,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/pelatihan%20ai%20dan%20manajemen%20data%20(1).jpeg?raw=true",
    caption: "Fasilitas dan kegiatan internal dalam kantor",
    category: "Kegiatan internal",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/pelatihan%20ai%20dan%20manajemen%20data%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/pelatihan%20ai%20dan%20manajemen%20data%20(11).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/pelatihan%20ai%20dan%20manajemen%20data%20(6).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/pelatihan%20ai%20dan%20manajemen%20data%20(9).jpeg?raw=true"
    ]
  },
  {
    id: 5,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/bencmark%20dapen%20pagadaian%20(1).jpeg?raw=true",
    caption: "Benchmark ke Dana Pensiun Pegadaian",
    category: "Sosialisasi External",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/bencmark%20dapen%20pagadaian%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/bencmark%20dapen%20pagadaian%20(2).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/bencmark%20dapen%20pagadaian%20(3).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/bencmark%20dapen%20pagadaian%20(4).jpeg?raw=true"
    ]
  },
  {
    id: 6,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/hut%20JM%20(1).jpeg?raw=true",
    caption: "Kegiatan Olahraga Bersama",
    category: "Kegiatan",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/hut%20JM%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/hut%20JM%20(2).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/hut%20JM%20(3).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/hutJM.jpeg?raw=true"
    ]
  },
  {
    id: 7,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/pertemuan%20industri%20keuangan.jpeg?raw=true",
    caption: "Pertemuan Industri Keuangan",
    category: "Kegiatan",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/pertemuan%20industri%20keuangan.jpeg?raw=true"
    ]
  },
  {
    id: 8,
    imageUrl: "https://github.com/danapensiunjm-glitch/assets/blob/main/digitalisasi%20kearsipan%20(1).jpeg?raw=true",
    caption: "Digitalisasi Kearsipan",
    category: "Kegiatan Internal",
    images: [
      "https://github.com/danapensiunjm-glitch/assets/blob/main/digitalisasi%20kearsipan%20(1).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/digitalisasi%20kearsipan%20(2).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/digitalisasi%20kearsipan%20(3).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/digitalisasi%20kearsipan%20(4).jpeg?raw=true",
      "https://github.com/danapensiunjm-glitch/assets/blob/main/digitalisasi%20kearsipan%20(5).jpeg?raw=true"
    ]
  }
];

export const Gallery: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (e: React.MouseEvent, item: GalleryItem) => {
    if (item.images && item.images.length > 0) {
      e.preventDefault();
      setSelectedGallery(item);
      setCurrentImageIndex(0);
    }
  };

  const closeLightbox = () => {
    setSelectedGallery(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery && selectedGallery.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.images!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery && selectedGallery.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.images!.length) % selectedGallery.images!.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Galeri Aktivitas</h2>
          <h3 className="text-3xl font-bold text-corporate-900 mb-4">Momen Kebersamaan & Profesionalisme</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative group/nav">
          {/* Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 z-10 bg-white/90 shadow-lg rounded-full p-2 lg:p-3 text-corporate-900 border border-slate-100 hover:bg-corporate-50 hover:text-corporate-800 hover:scale-110 transition-all opacity-0 group-hover/nav:opacity-100"
            aria-label="Geser ke kiri"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 z-10 bg-white/90 shadow-lg rounded-full p-2 lg:p-3 text-corporate-900 border border-slate-100 hover:bg-corporate-50 hover:text-corporate-800 hover:scale-110 transition-all opacity-0 group-hover/nav:opacity-100"
            aria-label="Geser ke kanan"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 -mx-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {galleryItems.map((item) => (
            <a 
              key={item.id} 
              href={item.images ? "#" : "https://www.instagram.com/dapen.jm/"}
              target={item.images ? "_self" : "_blank"}
              rel={item.images ? "" : "noopener noreferrer"}
              onClick={(e) => openLightbox(e, item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer h-80 block flex-none w-[85vw] md:w-[45vw] lg:w-[350px] xl:w-[400px] snap-center shadow-lg"
            >
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300 group-hover:from-corporate-900/90 group-hover:via-corporate-900/50">
                <span className="text-white text-sm font-bold uppercase tracking-wider mb-2 drop-shadow-md">
                    {item.category}
                </span>
                <p className="text-white font-bold text-xl leading-tight drop-shadow-lg">
                  {item.caption}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {item.images ? <Images className="w-5 h-5 text-white" /> : <Instagram className="w-5 h-5 text-white" />}
              </div>
            </a>
          ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/dapen.jm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-corporate-900 font-bold border-b-2 border-accent-500 pb-1 hover:text-accent-600 transition-colors"
            >
                <Instagram className="w-4 h-4" />
                Lihat di Instagram
            </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedGallery && selectedGallery.images && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {selectedGallery.images.length > 1 && (
              <button 
                onClick={prevImage}
                className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors z-50"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            
            <div className="relative w-full h-full flex flex-col items-center">
              <img 
                src={selectedGallery.images[currentImageIndex]} 
                alt={`${selectedGallery.caption} - Image ${currentImageIndex + 1}`} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h4 className="text-white text-xl font-bold mb-2">{selectedGallery.caption}</h4>
                <p className="text-white/60 text-sm">
                  {currentImageIndex + 1} / {selectedGallery.images.length}
                </p>
              </div>
            </div>

            {selectedGallery.images.length > 1 && (
              <button 
                onClick={nextImage}
                className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors z-50"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};