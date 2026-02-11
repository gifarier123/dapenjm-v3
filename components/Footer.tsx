import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-900 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
             <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden p-1 flex-shrink-0">
                   <img 
                    src="https://img.playbook.com/O_-Jh_vvPIwvHo8zemEPMcHR5E9_ol-_B6lmVlgh6tw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2MGY1YjE5/LWMwYzgtNDhhNi1i/MTU1LWE2MzIyOGY0/NTFmNg" 
                    alt="Logo Dapen Jasa Marga" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/0e3d6b/ffffff?text=JM';
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center text-white">
                  <span className="font-bold text-lg tracking-tight leading-none">Dana Pensiun Jasa Marga</span>
                  <span className="text-xs font-medium text-accent-500 tracking-wide mt-0.5 uppercase">Sehat, Sejahtera, Bahagia</span>
                </div>
            </div>
            <p className="text-corporate-200 text-sm leading-relaxed">
              Mitra terpercaya dalam mengelola masa depan sejahtera. Berkomitmen pada profesionalisme dan pelayanan prima untuk seluruh karyawan Jasa Marga.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-600 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-600 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
               <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-600 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-accent-500/30 pb-2 inline-block">Tentang Kami</h4>
            <ul className="space-y-3 text-sm text-corporate-200">
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full"></div>Profil Perusahaan</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full"></div>Dewan Pengawas</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full"></div>Direksi</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full"></div>Laporan Tahunan</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-accent-500/30 pb-2 inline-block">Aplikasi Peserta</h4>
            <ul className="space-y-3 text-sm text-corporate-200">
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" />Portal Peserta (e-Dapen)</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" />Pengkinian Data Online</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" />Simulasi Manfaat</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" />Unduh Formulir</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="font-bold text-lg mb-6 text-white border-b border-accent-500/30 pb-2 inline-block">Tautan Terkait</h4>
             <ul className="space-y-3 text-sm text-corporate-200">
              <li><a href="https://www.jasamarga.com" target="_blank" rel="noreferrer" className="hover:text-accent-400 transition-colors">PT Jasa Marga (Persero) Tbk</a></li>
              <li><a href="https://ojk.go.id" target="_blank" rel="noreferrer" className="hover:text-accent-400 transition-colors">Otoritas Jasa Keuangan</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Asosiasi Dana Pensiun</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-corporate-400">
          <p>&copy; {new Date().getFullYear()} Dana Pensiun Jasa Marga. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};