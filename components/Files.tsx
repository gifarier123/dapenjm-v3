import React from 'react';
import { FileText, Download } from 'lucide-react';

export const Files: React.FC = () => {
  const files = [
    { 
      id: 1, 
      name: 'Annual Report 2024', 
      date: '2024', 
      size: 'PDF',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=300&auto=format&fit=crop',
      downloadUrl: '#'
    },
    { 
      id: 2, 
      name: 'Annual Report 2023', 
      date: '2023', 
      size: 'PDF',
      imageUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=300&auto=format&fit=crop',
      downloadUrl: 'https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/Annual%20Report%202023.pdf'
    },
    { 
      id: 3, 
      name: 'Laporan Keuangan 2025', 
      date: '2025', 
      size: 'PDF',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&auto=format&fit=crop',
      downloadUrl: 'https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/LK%20DPJM%20Audited%202025%20(SAK).pdf'
    },
    { 
      id: 4, 
      name: 'Laporan Keuangan 2024', 
      date: '2024', 
      size: 'PDF',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop',
      downloadUrl: 'https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/LK%20DPJM%20Audited%202023%20(SAK).pdf'
    },
    { 
      id: 5, 
      name: 'Laporan Keuangan 2023', 
      date: '2023', 
      size: 'PDF',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop',
      downloadUrl: 'https://pub-4310e93c45c1439a9ecb5bd9133f74ea.r2.dev/LK%20DPJM%20Audited%202023%20(SAK).pdf'
    },
  ];

  return (
    <section id="files" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Unduhan</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-4">Dokumen & Laporan</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {files.map((file) => (
            <div key={file.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6 shadow-sm z-0 hover:z-50 transform hover:scale-150 transition-transform duration-500 origin-center cursor-pointer">
                <img 
                  src={file.imageUrl} 
                  alt={file.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="font-bold text-corporate-900 text-xl mb-2">{file.name}</h4>
                <p className="text-sm text-gray-500 mb-6">{file.date} &bull; {file.size}</p>
                <a 
                  href={file.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 bg-white border border-gray-200 text-corporate-900 px-6 py-3 rounded-lg font-semibold hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all shadow-sm w-full"
                >
                  <Download className="w-5 h-5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
