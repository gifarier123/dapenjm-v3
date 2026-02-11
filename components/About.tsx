import React from 'react';
import { Target, Flag, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Tentang Dapen Jasa Marga</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-6">Integritas dalam Pengelolaan Dana</h3>
          <p className="text-gray-600 leading-relaxed">
            Dana Pensiun Jasa Marga didirikan oleh PT Jasa Marga (Persero) Tbk untuk menyelenggarakan Program Pensiun Manfaat Pasti bagi karyawan, guna memberikan kesinambungan penghasilan di hari tua.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-corporate-900/60 flex items-center justify-center p-8">
               <div className="text-white text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-accent-500" />
                  <h4 className="text-2xl font-bold mb-2">Terakreditasi & Diawasi</h4>
                  <p className="text-corporate-100">Diawasi oleh Otoritas Jasa Keuangan (OJK)</p>
               </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <div className="bg-corporate-50 p-8 rounded-2xl border border-corporate-100 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-accent-600">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-corporate-900">Visi Kami</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Menjadi Pengelola Dana Pensiun yang Profesional, Sehat, dan Terpercaya untuk memberikan pelayanan terbaik dan manfaat optimal bagi peserta."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                 <div className="bg-corporate-50 p-3 rounded-lg shadow-sm text-accent-600">
                  <Flag className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-corporate-900">Misi Kami</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Mengelola iuran dan aset bersih dengan prinsip Good Corporate Governance.",
                  "Membayar manfaat pensiun secara tepat waktu, tepat jumlah, dan tepat subjek.",
                  "Memberikan pelayanan prima kepada seluruh peserta pensiun.",
                  "Meningkatkan kinerja investasi secara berkelanjutan."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Management Values - JSMR MOVE */}
        <div className="bg-corporate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Tata Nilai Perusahaan</h4>
              <div className="inline-block bg-accent-600 px-8 py-2 rounded-full shadow-lg shadow-accent-600/30">
                <span className="text-xl md:text-2xl font-extrabold tracking-widest text-white">JSMR MOVE</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  letter: 'M', 
                  title: 'Modern', 
                  desc: 'Tetap terbuka terhadap perubahan dan menggunakan teknologi baru untuk bekerja lebih cerdas.' 
                },
                { 
                  letter: 'O', 
                  title: 'Optimistic', 
                  sub: '(Optimis)',
                  desc: 'Menghadapi tantangan dengan energi positif dan belajar dari setiap kemunduran/hambatan.' 
                },
                { 
                  letter: 'V', 
                  title: 'Valuable', 
                  sub: '(Bernilai)',
                  desc: 'Mengubah ide menjadi dampak nyata, bekerja sebagai satu kesatuan untuk memberikan pertumbuhan berkelanjutan, serta mendorong penciptaan nilai yang bermakna.' 
                },
                { 
                  letter: 'E', 
                  title: 'Excellent', 
                  sub: '(Unggul)',
                  desc: 'Bekerja dengan kepedulian dan integritas sambil memberikan yang terbaik dan melayani pelanggan dengan sepenuh hati.' 
                }
              ].map((val) => (
                <div key={val.letter} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all group flex gap-5 items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-200 text-corporate-900 rounded-xl flex items-center justify-center font-black text-3xl shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                    {val.letter}
                  </div>
                  <div>
                    <h5 className="font-bold text-xl mb-2 text-white group-hover:text-accent-400 transition-colors">
                      {val.title} <span className="text-sm font-normal text-corporate-200 opacity-80">{val.sub}</span>
                    </h5>
                    <p className="text-corporate-100 text-sm leading-relaxed opacity-90">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-10"></div>
        </div>
      </div>
    </section>
  );
};