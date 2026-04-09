import React from 'react';
import { FileText, Download } from 'lucide-react';

export const Files: React.FC = () => {
  const files = [
    { id: 1, name: 'Laporan Pendiri 2025', date: 'Desember 2025', size: '2.4 MB' },
    { id: 2, name: 'Laporan Tahunan 2025', date: 'Desember 2025', size: '5.1 MB' },
    { id: 3, name: 'Laporan bulanan Januari 2026', date: 'Januari 2026', size: '1.2 MB' },
    { id: 4, name: 'Laporan bulanan Februari 2026', date: 'Februari 2026', size: '1.1 MB' },
  ];

  return (
    <section id="files" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Unduhan</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-4">Dokumen & Laporan</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {files.map((file) => (
              <li key={file.id} className="p-6 hover:bg-corporate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-corporate-100 text-corporate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-corporate-900 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-corporate-900 text-lg mb-1">{file.name}</h4>
                    <p className="text-sm text-gray-500">{file.date} &bull; PDF &bull; {file.size}</p>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-corporate-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all shadow-sm">
                  <Download className="w-4 h-4" />
                  <span>Unduh</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
