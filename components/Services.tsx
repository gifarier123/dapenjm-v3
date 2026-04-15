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
                <PhoneCall className="w-8 h-8 text-[#25D366]" />
                <h4 className="text-2xl font-bold">Hubungi WhatsApp Dana Pensiun Jasa Marga</h4>
             </div>
             <p className="text-corporate-100 leading-relaxed">
                Jika Anda memiliki pertanyaan mengenai manfaat pensiun, prosedur klaim, atau informasi lainnya, tim Customer Service kami siap membantu Anda.
             </p>
           </div>
           <div className="flex-shrink-0 flex gap-4">
              <a href="https://wa.me/081295946517" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-colors shadow-lg flex items-center gap-2">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 WhatsApp
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};