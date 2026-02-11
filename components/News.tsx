import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { NewsItem } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: 10, // High ID for the new item
    slug: 'berita-jasa-marga',
    title: "Berita Jasa Marga: Komitmen Pelayanan Prima",
    date: "16 Februari 2026",
    category: "Berita Utama",
    // Using a relevant professional image ID from Unsplash
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    summary: "Dapen Jasa Marga terus berkomitmen meningkatkan kualitas layanan dan pengelolaan dana pensiun yang transparan demi kesejahteraan peserta.",
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.\n\nAliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.\n\nNam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.`
  },
  {
    id: 1,
    title: "Laporan Kinerja Investasi Semester I Tahun 2024",
    date: "12 Oktober 2024",
    category: "Laporan",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    summary: "Dapen Jasa Marga mencatatkan pertumbuhan hasil investasi yang positif di atas rata-rata pasar, didorong oleh alokasi aset yang strategis pada instrumen SBN.",
    content: "Dapen Jasa Marga mencatatkan pertumbuhan hasil investasi yang positif di atas rata-rata pasar. Hal ini didorong oleh strategi alokasi aset yang berfokus pada instrumen Surat Berharga Negara (SBN) dan obligasi korporasi dengan rating tinggi.\n\nKinerja ini menunjukkan komitmen manajemen dalam mengelola dana pensiun secara prudent dan transparan. Diharapkan tren positif ini dapat terus berlanjut hingga akhir tahun buku."
  },
  {
    id: 2,
    title: "Sosialisasi Pembaruan Peraturan Dana Pensiun (PDP)",
    date: "05 Oktober 2024",
    category: "Regulasi",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    summary: "Manajemen melakukan sosialisasi terkait penyesuaian regulasi OJK terbaru untuk memastikan tata kelola yang semakin baik dan transparan.",
    content: "Dalam rangka mematuhi peraturan OJK terbaru, Dana Pensiun Jasa Marga mengadakan sosialisasi kepada seluruh peserta. Kegiatan ini bertujuan untuk memberikan pemahaman mengenai perubahan tata kelola dana pensiun yang lebih ketat dan transparan.\n\nSosialisasi ini dihadiri oleh perwakilan karyawan dari berbagai unit kerja. Manajemen menekankan pentingnya kepatuhan terhadap regulasi demi keamanan dana peserta jangka panjang."
  },
  {
    id: 3,
    title: "Tips Mengelola Keuangan di Masa Purnabakti",
    date: "28 September 2024",
    category: "Edukasi",
    imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    summary: "Simak tips praktis menjaga kesehatan finansial pasca pensiun agar tetap produktif dan bahagia bersama keluarga.",
    content: "Masa purnabakti bukan akhir dari produktivitas. Pengelolaan keuangan yang bijak sangat diperlukan agar masa pensiun tetap sejahtera. Beberapa tips yang bisa dilakukan antara lain:\n\n1. Lunasi hutang sebelum pensiun.\n2. Sesuaikan gaya hidup dengan pendapatan pensiun.\n3. Cari aktivitas atau hobi yang produktif.\n4. Jaga kesehatan fisik dan mental.\n\nDengan perencanaan yang matang, masa pensiun bisa menjadi masa yang paling membahagiakan."
  }
];

interface NewsProps {
  onNewsClick?: (item: NewsItem) => void;
}

export const News: React.FC<NewsProps> = ({ onNewsClick }) => {
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
          {newsItems.slice(0, 3).map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden h-56 cursor-pointer" onClick={() => onNewsClick?.(item)}>
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
                <h4 
                  className="text-xl font-bold text-corporate-900 mb-3 leading-snug group-hover:text-accent-600 transition-colors cursor-pointer"
                  onClick={() => onNewsClick?.(item)}
                >
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {item.summary}
                </p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                   <span className="text-xs text-gray-400 flex items-center">
                     <Clock className="w-3 h-3 mr-1" /> 5 min read
                   </span>
                   <button 
                    onClick={() => onNewsClick?.(item)}
                    className="text-sm font-bold text-corporate-800 group-hover:text-accent-600 cursor-pointer flex items-center hover:underline"
                   >
                     Baca Selengkapnya
                   </button>
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