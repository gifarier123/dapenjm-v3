import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

export const Files: React.FC = () => {
  const files = [
    { 
      id: 1, 
      name: 'Annual Report 2025', 
      date: '2025', 
      size: 'PDF',
      imageUrl: 'https://github.com/danapensiunjm-glitch/assets/blob/main/Gemini_Generated_Image_1bhlk31bhlk31bhl.png?raw=true',
      downloadUrl: 'https://drive.google.com/file/d/1yyOF5XH-zo1PC31oOB5WrzhnWYONL0Oi/view?usp=drive_link',
      allowDownload: false
    },
    { 
      id: 2, 
      name: 'Annual Report 2024', 
      date: '2024', 
      size: 'PDF',
      imageUrl: 'https://github.com/danapensiunjm-glitch/assets/blob/main/Gemini_Generated_Image_yduvjryduvjryduv.png?raw=true',
      downloadUrl: 'https://drive.google.com/file/d/18EygC__9pSoZrHGbqvmOwncTTjf3Ekz5/view?usp=drive_link',
      allowDownload: false
    },
    { 
      id: 3, 
      name: 'Annual Report 2023', 
      date: '2023', 
      size: 'PDF',
      imageUrl: 'https://github.com/danapensiunjm-glitch/assets/blob/main/Gemini_Generated_Image_b27ib2b27ib2b27i.png?raw=true',
      downloadUrl: 'https://drive.google.com/file/d/1PoRMZcOXnGaZLxmeOK89tXh6y7YxipFL/view?usp=drive_link',
      allowDownload: false
    },
    { 
      id: 4, 
      name: 'Laporan Publikasi 2025', 
      date: '2025', 
      size: 'PDF',
      imageUrl: 'https://github.com/danapensiunjm-glitch/assets/blob/main/LAPORAN%20PUBLIKASI.png?raw=true',
      downloadUrl: 'https://drive.google.com/file/d/1t-KmFCeS7K-xywBIKYiqfC5lb0uVoCJx/view?usp=drive_link',
      allowDownload: true
    },
    { 
      id: 5, 
      name: 'Laporan Keberlanjutan 2025', 
      date: '2025', 
      size: 'PDF',
      imageUrl: 'https://github.com/danapensiunjm-glitch/assets/blob/main/LAPORAN%20KEBERLANJUTAN%20.png?raw=true',
      downloadUrl: 'https://drive.google.com/file/d/14mcruZhDb94IWhjscmOuQpWIzwratgTK/view?usp=drive_link',
      allowDownload: false
    }
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
                <div className="mt-auto flex flex-col gap-3">
                  <a 
                    href={file.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-corporate-900 px-6 py-3 rounded-lg font-semibold hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all shadow-sm w-full"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Lihat</span>
                  </a>
                  {file.allowDownload && (
                    <a 
                      href={file.downloadUrl}
                      download={`${file.name}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-corporate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-800 transition-all shadow-sm w-full"
                    >
                      <Download className="w-5 h-5" />
                      <span>Unduh</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
