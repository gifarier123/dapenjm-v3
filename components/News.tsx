import React from 'react';
import { Calendar, ArrowRight, Clock, Wrench } from 'lucide-react';
import { NewsItem } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: 11,
    title: "Laporan Kinerja Investasi Semester I Tahun 2026",
    date: "15 Juli 2026",
    category: "Laporan",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    summary: "Dapen Jasa Marga mencatatkan pertumbuhan hasil investasi yang positif di atas rata-rata pasar pada Semester I 2026, didorong oleh alokasi aset yang strategis.",
    content: "Dapen Jasa Marga mencatatkan pertumbuhan hasil investasi yang positif di atas rata-rata pasar pada Semester I tahun 2026. Hal ini didorong oleh strategi alokasi aset yang berfokus pada instrumen Surat Berharga Negara (SBN) dan obligasi korporasi dengan rating tinggi.\n\nKinerja ini menunjukkan komitmen manajemen dalam mengelola dana pensiun secara prudent dan transparan. Diharapkan tren positif ini dapat terus berlanjut hingga akhir tahun buku 2026."
  },
  {
    id: 10,
    slug: 'berita-jasa-marga',
    title: "Berita Jasa Marga: Komitmen Pelayanan Prima 2026",
    date: "16 Februari 2026",
    category: "Berita Utama",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    summary: "Dapen Jasa Marga terus berkomitmen meningkatkan kualitas layanan dan pengelolaan dana pensiun yang transparan demi kesejahteraan peserta di tahun 2026.",
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.\n\nAliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.\n\nNam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.`
  },
  {
    id: 2,
    title: "Sosialisasi Pembaruan Peraturan Dana Pensiun (PDP) 2026",
    date: "05 Januari 2026",
    category: "Regulasi",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    summary: "Manajemen melakukan sosialisasi terkait penyesuaian regulasi OJK terbaru tahun 2026 untuk memastikan tata kelola yang semakin baik dan transparan.",
    content: "Dalam rangka mematuhi peraturan OJK terbaru tahun 2026, Dana Pensiun Jasa Marga mengadakan sosialisasi kepada seluruh peserta. Kegiatan ini bertujuan untuk memberikan pemahaman mengenai perubahan tata kelola dana pensiun yang lebih ketat dan transparan.\n\nSosialisasi ini dihadiri oleh perwakilan karyawan dari berbagai unit kerja. Manajemen menekankan pentingnya kepatuhan terhadap regulasi demi keamanan dana peserta jangka panjang."
  },
  {
    id: 3,
    title: "Tips Mengelola Keuangan di Masa Purnabakti",
    date: "28 September 2025",
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
        </div>

        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <Wrench className="w-10 h-10 text-orange-500" />
          </div>
          <h4 className="text-xl font-bold text-gray-900">Sedang Perbaikan</h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Mohon maaf, halaman Berita & Artikel saat ini sedang dalam perbaikan. Silakan coba kembali beberapa saat lagi.
          </p>
        </div>
      </div>
    </section>
  );
};