import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Laporan Kinerja Investasi Semester I Tahun 2024",
    date: "12 Oktober 2024",
    category: "Laporan",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    summary: "Dapen Jasa Marga mencatatkan pertumbuhan hasil investasi yang positif di atas rata-rata pasar, didorong oleh alokasi aset yang strategis pada instrumen SBN."
  },
  {
    id: 2,
    title: "Sosialisasi Pembaruan Peraturan Dana Pensiun (PDP)",
    date: "05 Oktober 2024",
    category: "Regulasi",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    summary: "Manajemen melakukan sosialisasi terkait penyesuaian regulasi OJK terbaru untuk memastikan tata kelola yang semakin baik dan transparan."
  },
  {
    id: 3,
    title: "Tips Mengelola Keuangan di Masa Purnabakti",
    date: "28 September 2024",
    category: "Edukasi",
    imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    summary: "Simak tips praktis menjaga kesehatan finansial pasca pensiun agar tetap produktif dan bahagia bersama keluarga."
  }
];

export const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-corporate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Berita & Artikel</h2>
            <h3 className="text-3xl font-bold text-corporate-900">Kabar Terkini Dapen Jasa Marga</h3>
          </div>
          <button className="hidden md:flex items-center text-corporate-700 font-bold hover:text-accent-600 transition-colors mt-4 md:mt-0 group">
            Arsip Berita <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-corporate-900 uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-center text-gray-400 text-xs font-medium mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-accent-500" />
                  {item.date}
                </div>
                <h4 className="text-xl font-bold text-corporate-900 mb-3 leading-snug group-hover:text-accent-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {item.summary}
                </p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                   <span className="text-xs text-gray-400 flex items-center">
                     <Clock className="w-3 h-3 mr-1" /> 3 min read
                   </span>
                   <span className="text-sm font-bold text-corporate-800 group-hover:text-accent-600 cursor-pointer">
                     Baca Selengkapnya
                   </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
            <button className="inline-flex items-center bg-white px-6 py-3 rounded-full text-corporate-900 font-bold shadow-md hover:bg-gray-50 transition-colors border border-gray-200">
                Lihat Semua Berita <ArrowRight className="w-4 h-4 ml-2" />
            </button>
        </div>
      </div>
    </section>
  );
};