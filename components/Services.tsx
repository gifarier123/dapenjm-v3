import React from 'react';
import { Wallet, Shield, HeartPulse, Clock, FileCheck, PhoneCall } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Pensiun Normal",
    description: "Manfaat pensiun yang diberikan kepada peserta yang telah mencapai usia pensiun normal.",
    icon: <Clock className="w-6 h-6 text-white" />,
    details: ["Usia 58 Tahun", "1886 Peserta"]
  },
  {
    id: 2,
    title: "Pensiun Disabilitas",
    description: "Jaminan manfaat bagi peserta yang mengalami cacat total tetap sehingga tidak dapat bekerja kembali.",
    icon: <HeartPulse className="w-6 h-6 text-white" />,
    details: ["Kejadian Kecelakaan/Sakit", "78 Peserta"]
  },
  {
    id: 3,
    title: "Pensiun Dipercepat",
    description: "Peserta dapat mengajukan pensiun lebih awal sekurang-kurangnya 10 tahun sebelum usia pensiun normal.",
    icon: <Wallet className="w-6 h-6 text-white" />,
    details: ["Min. Usia 46 Tahun", "243 Peserta"]
  },
  {
    id: 4,
    title: "Pensiun Meninggal",
    description: "Manfaat pensiun yang dibayarkan kepada janda/duda atau anak dari peserta yang meninggal dunia.",
    icon: <Shield className="w-6 h-6 text-white" />,
    details: ["Janda/Duda 630 Peserta", "Anak 49 Peserta"]
  },
  {
    id: 5,
    title: "Pensiun Ditunda",
    description: "Hak manfaat pensiun bagi peserta yang berhenti bekerja sebelum mencapai usia pensiun dipercepat.",
    icon: <FileCheck className="w-6 h-6 text-white" />,
    details: ["Berhenti < 56 Tahun", "42 Peserta"]
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#0e3d6b 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Layanan</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-4">Program Pensiun Manfaat Pasti (PPMP)</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menjamin kepastian jumlah manfaat yang akan diterima peserta berdasarkan rumus perhitungan yang telah ditetapkan dalam peraturan dana pensiun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-accent-500 group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-corporate-900 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-corporate-900/10 group-hover:bg-accent-500 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-corporate-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {service.details?.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-xs font-medium text-gray-500 bg-gray-50 p-2 rounded">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Digital Service Banner */}
        <div className="bg-gradient-to-r from-corporate-800 to-corporate-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
           <div className="flex-1 pr-0 md:pr-12 mb-8 md:mb-0">
             <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="w-8 h-8 text-accent-400" />
                <h4 className="text-2xl font-bold">Ada Pertanyaan?</h4>
             </div>
             <p className="text-corporate-100 leading-relaxed">
                Jika Anda memiliki pertanyaan mengenai manfaat pensiun, prosedur klaim, atau informasi lainnya, tim Customer Service kami siap membantu Anda.
             </p>
           </div>
           <div className="flex-shrink-0 flex gap-4">
              <a href="#contact" className="bg-accent-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-accent-700 transition-colors shadow-lg flex items-center gap-2">
                 <PhoneCall className="w-4 h-4" />
                 Hubungi CS
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};