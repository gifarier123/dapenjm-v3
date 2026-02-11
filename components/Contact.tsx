import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
                <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Hubungi Kami</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-6">Siap Melayani Anda</h3>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan mengenai manfaat pensiun, prosedur klaim, atau informasi lainnya.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-corporate-50 rounded-full flex items-center justify-center text-corporate-900 flex-shrink-0">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-corporate-900 text-lg mb-1">Kantor Pusat</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Gedung Jasa Marga Lantai 1<br/>
                                Jl. Dukuh No. 1, Kramat Jati<br/>
                                Jakarta Timur, DKI Jakarta 13550
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-corporate-50 rounded-full flex items-center justify-center text-corporate-900 flex-shrink-0">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-corporate-900 text-lg mb-1">Telepon & Fax</h4>
                            <p className="text-gray-600 text-sm">
                                Telp: (021) 8088 1234 (Hunting)<br/>
                                Fax: (021) 8088 5678
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-corporate-50 rounded-full flex items-center justify-center text-corporate-900 flex-shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-corporate-900 text-lg mb-1">Jam Operasional</h4>
                            <p className="text-gray-600 text-sm">
                                Senin - Jumat: 08:00 - 16:30 WIB<br/>
                                Sabtu - Minggu: Libur
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h4 className="text-2xl font-bold text-corporate-900 mb-6">Kirim Pesan</h4>
                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all" placeholder="Nama Anda" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all" placeholder="email@contoh.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all">
                            <option>Informasi Umum</option>
                            <option>Pengajuan Klaim</option>
                            <option>Update Data</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                        <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none" placeholder="Tulis pesan Anda disini..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-corporate-900 text-white font-bold py-4 rounded-lg hover:bg-corporate-800 transition-all flex items-center justify-center gap-2">
                        <span>Kirim Pesan</span>
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};