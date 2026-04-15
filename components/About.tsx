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
              src="https://img.playbook.com/x-1oYRbnwLKtBmI1eZdjDH_gCx90ufjHzbDMCiNFddY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBhYjMzZjA1/LWU4NzMtNDM3NC05/YTgxLTc2M2VlMjg2/ZWZlZA" 
              alt="Gedung Kantor Operasional Jasa Marga" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-corporate-900/60 flex items-center justify-center p-8">
               <div className="text-white text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-accent-500" />
                  <h4 className="text-2xl font-bold mb-2">Terakreditasi & Diawasi</h4>
                  <p className="text-corporate-100">Terdaftar dan Diawasi oleh Otoritas Jasa Keuangan dan LAPS SJK</p>
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

        {/* Struktur Organisasi */}
        <div className="mt-24 relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Gradient & Wave Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A651] to-[#0054A6]"></div>
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128'/%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192'/%3E%3C/svg%3E")`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="relative z-10 p-8 md:p-16 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-16">Struktur Organisasi</h3>
            
            {/* Dewan Pengawas */}
            <div className="mb-20">
              <h4 className="text-2xl font-semibold mb-10 border-b border-white/30 pb-4 inline-block">Dewan Pengawas Dana Pensiun Jasa Marga</h4>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {[
                  { name: "Ricky Ricardo S.B.", role: "Ketua Dewan Pengawas", image: "https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/RICKY%20RICARDO.png" },
                  { name: "Windharti Amelia", role: "Anggota Dewan Pengawas", image: "https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/WINDHARTI%20AMELIA.png" },
                  { name: "Ari Wibowo", role: "Anggota Dewan Pengawas", image: "https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/ARI%20WIBOWO.png" },
                  { name: "Sari Purnawarman", role: "Anggota Dewan Pengawas", image: "https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/SARI%20PURNAWARMAN.png" }
                ].map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center w-48 group relative z-0 hover:z-50">
                    <div className="w-32 h-40 rounded-2xl border-4 border-[#00A651] bg-white mb-5 overflow-hidden shadow-xl transform group-hover:scale-150 transition-transform duration-300 origin-bottom">
                      <img 
                        src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f0f7ff&color=0e3d6b&size=200`} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h5 className="font-bold text-lg leading-tight mb-1">{member.name}</h5>
                    <p className="text-sm text-white/80">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pengurus */}
            <div>
              <h4 className="text-2xl font-semibold mb-10 border-b border-white/30 pb-4 inline-block">Pengurus Dana Pensiun Jasa Marga</h4>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {[
                  { name: "Abdul Hamid", role: "Direktur", image: "https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/ABDUL%20HAMID.png" }
                ].map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center w-48 group relative z-0 hover:z-50">
                    <div className="w-32 h-40 rounded-2xl border-4 border-[#00A651] bg-white mb-5 overflow-hidden shadow-xl transform group-hover:scale-150 transition-transform duration-300 origin-bottom">
                      <img 
                        src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f0f7ff&color=0e3d6b&size=200`} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h5 className="font-bold text-lg leading-tight mb-1">{member.name}</h5>
                    <p className="text-sm text-white/80">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};