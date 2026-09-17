import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Scale, 
  FileText, 
  Lock, 
  CheckCircle2, 
  Users, 
  Server, 
  Clock, 
  UserCheck, 
  Cookie, 
  RefreshCw, 
  Headphones, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  AlertTriangle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sectionsList = [
    { id: 'pendahuluan', title: '1. Pendahuluan & Komitmen' },
    { id: 'landasan-hukum', title: '2. Landasan Hukum' },
    { id: 'kategori-data', title: '3. Kategori Data Pribadi' },
    { id: 'tujuan-pemrosesan', title: '4. Tujuan Pemrosesan Data' },
    { id: 'prinsip-perlindungan', title: '5. Prinsip Perlindungan' },
    { id: 'pihak-ketiga', title: '6. Pembagian Pihak Ketiga' },
    { id: 'keamanan-siber', title: '7. Keamanan & Ketahanan Siber' },
    { id: 'retensi-data', title: '8. Retensi & Penghapusan' },
    { id: 'hak-subjek-data', title: '9. Hak-Hak Subjek Data' },
    { id: 'kebijakan-cookies', title: '10. Kebijakan Cookies' },
    { id: 'perubahan-kebijakan', title: '11. Perubahan Kebijakan' },
    { id: 'layanan-pengaduan', title: '12. Kontak & Pengaduan' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Top Banner Hero */}
      <div className="relative bg-gradient-to-r from-corporate-900 via-[#123E7A] to-[#0054A6] text-white py-16 md:py-24 overflow-hidden border-b border-white/10">
        {/* Background decorative circles & pattern */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4FAF6D]/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Navigation Back & Breadcrumb */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold transition-all border border-white/15 cursor-pointer hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </button>
            <span className="text-white/40">/</span>
            <span className="text-corporate-200 text-sm font-medium">Kebijakan Privasi</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 border border-accent-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              Pelindungan Data Pribadi
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              KEBIJAKAN PRIVASI DAN PELINDUNGAN DATA PRIBADI
            </h1>
            
            <p className="text-xl md:text-2xl text-corporate-100 font-semibold mb-3">
              DANA PENSIUN JASA MARGA (DPJM)
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/80 pt-2">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 font-medium">
                Terakhir Diperbarui: September 2026
              </span>
              <span className="bg-[#4FAF6D]/20 text-emerald-200 px-3 py-1.5 rounded-lg border border-[#4FAF6D]/30 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4FAF6D]" /> UU PDP No. 27/2022
              </span>
              <span className="bg-[#F28C2B]/20 text-amber-200 px-3 py-1.5 rounded-lg border border-[#F28C2B]/30 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C2B]" /> POJK No. 22/2023
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Quick Index Sidebar (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
                <FileText className="w-5 h-5 text-corporate-700" />
                <h3 className="font-bold text-corporate-900 text-base">Daftar Isi Kebijakan</h3>
              </div>
              <nav className="space-y-1 text-sm">
                {sectionsList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-slate-600 hover:text-corporate-900 hover:bg-corporate-50 transition-colors flex items-center justify-between group font-medium cursor-pointer"
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-corporate-700 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 rounded-xl bg-corporate-50 border border-corporate-100">
                <div className="flex items-center gap-2 text-corporate-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <Headphones className="w-4 h-4 text-accent-600" />
                  Butuh Bantuan?
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Pertanyaan terkait data pribadi Anda dapat dikirimkan langsung ke Unit Perlindungan Konsumen DPJM.
                </p>
                <a 
                  href="mailto:support@dapenjasamarga.com"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" /> support@dapenjasamarga.com
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Articles Body */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1 */}
            <section id="pendahuluan" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  PENDAHULUAN DAN KOMITMEN
                </h2>
              </div>
              <div className="text-slate-700 text-base leading-relaxed space-y-4">
                <p>
                  Dana Pensiun Jasa Marga (selanjutnya disebut <strong className="text-corporate-900 font-semibold">"DPJM"</strong> atau <strong className="text-corporate-900 font-semibold">"Kami"</strong>), sebagai Pelaku Usaha Jasa Keuangan (PUJK) berbentuk Dana Pensiun Pemberi Kerja yang menyelenggarakan Program Pensiun Manfaat Pasti (PPMP), berkomitmen penuh untuk melindungi privasi, kerahasiaan, dan keamanan Data Pribadi seluruh Peserta, Penerima Manfaat Pensiun, Ahli Waris, Pihak yang Ditunjuk, serta pengunjung situs web resmi DPJM.
                </p>
                <p>
                  Kebijakan Privasi ini disusun sebagai wujud keterbukaan dan transparansi informasi serta pemenuhan kepatuhan terhadap prinsip pelindungan aset, privasi, dan data Konsumen di sektor jasa keuangan. Kebijakan ini menjelaskan tata kelola perolehan, pengumpulan, pengolahan, analisis, penyimpanan, perbaikan, pembaruan, penampilan, pengumuman, pengalihan, pengungkapan, penghapusan, dan pemusnahan Data Pribadi Anda oleh DPJM.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="landasan-hukum" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  LANDASAN HUKUM
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Penyelenggaraan pemrosesan Data Pribadi pada situs web dan sistem operasional DPJM berlandaskan pada peraturan perundang-undangan berikut:
              </p>
              <div className="grid grid-cols-1 gap-3.5">
                {[
                  {
                    title: 'Undang-Undang Nomor 27 Tahun 2022',
                    desc: 'tentang Pelindungan Data Pribadi (UU PDP).'
                  },
                  {
                    title: 'Undang-Undang Nomor 4 Tahun 2023',
                    desc: 'tentang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK).'
                  },
                  {
                    title: 'Peraturan Otoritas Jasa Keuangan (POJK) Nomor 22 Tahun 2023',
                    desc: 'tentang Pelindungan Konsumen dan Masyarakat di Sektor Jasa Keuangan (khususnya Bab II Bagian Ketiga Pasal 19 sampai dengan Pasal 24).'
                  },
                  {
                    title: 'POJK Nomor 27 Tahun 2023',
                    desc: 'tentang Penyelenggaraan Usaha Dana Pensiun.'
                  },
                  {
                    title: 'Peraturan Pemerintah Nomor 71 Tahun 2019',
                    desc: 'tentang Penyelenggaraan Sistem dan Transaksi Elektronik.'
                  },
                  {
                    title: 'Pedoman Tata Kelola dan Manajemen Risiko TI',
                    desc: 'Pedoman Tata Kelola dan Manajemen Risiko Penggunaan Teknologi Informasi DPJM.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <Scale className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-corporate-900 block text-sm">{item.title}</span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="kategori-data" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  KATEGORI DATA PRIBADI YANG DIKUMPULKAN
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Data Pribadi yang Kami kumpulkan dan kelola mencakup data yang diserahkan secara langsung oleh Anda, oleh Pemberi Kerja (Pendiri/Mitra Pendiri), atau dikumpulkan secara otomatis melalui interaksi pada situs web/portal layanan DPJM:
              </p>

              <div className="space-y-6">
                {/* a. Data Pribadi Umum */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-corporate-900 text-base mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">a</div>
                    Data Pribadi Umum:
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 pl-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Identitas Diri & Kependudukan:</strong> Nama lengkap, Nomor Induk Kependudukan (NIK), Nomor Pokok Wajib Pajak (NPWP 16 digit), tempat dan tanggal lahir, umur, jenis kelamin, status perkawinan, serta nama ibu kandung.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Kontak Personal:</strong> Alamat tempat tinggal/domisili, alamat surat elektronik (email), nomor telepon seluler, dan nomor kontak WhatsApp.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Kepegawaian & Kepesertaan:</strong> Nomor Pokok Peserta (NPP), riwayat masa kerja, tanggal mulai bekerja, tanggal kepesertaan, unit kerja/cabang, dan status kepesertaan (peserta aktif, ditunda, pensiunan, janda/duda, atau anak).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Keluarga & Ahli Waris:</strong> Nama pasangan sah, nama anak kandung/anak yang sah, tanggal lahir anak, status perkawinan/pendidikan anak, serta identitas pihak yang ditunjuk/ahli waris yang sah.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* b. Data Pribadi Spesifik / Sensitif */}
                <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200">
                  <h3 className="font-bold text-amber-950 text-base mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs font-bold">b</div>
                    Data Pribadi Spesifik / Sensitif:
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-800 pl-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Data Keuangan Pribadi:</strong> Penghasilan Dasar Pensiun (PhDP), riwayat iuran peserta, besaran Manfaat Pensiun (berkala atau sekaligus), nomor rekening bank mitra, dan data administrasi perpajakan (PPh Pasal 21).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Data Kesehatan:</strong> Surat keterangan medis, dokumen riwayat kesehatan, atau penetapan disabilitas (khusus untuk pengajuan Manfaat Pensiun Disabilitas).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-corporate-900">Data Biometrik & Otentikasi:</strong> Foto diri/identitas digital dan rekaman presensi verifikasi fisik/biometrik dalam rangka pelaksanaan otentikasi berkala penerima manfaat.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* c. Data Teknis */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-corporate-900 text-base mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-bold">c</div>
                    Data Teknis Situs Web & Navigasi:
                  </h3>
                  <p className="text-sm text-slate-700 pl-2">
                    Alamat Internet Protocol (IP Address), tipe peramban (browser), sistem operasi, data cookies, log waktu akses laman, serta jejak aktivitas penelusuran pada portal resmi DPJM.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="tujuan-pemrosesan" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  DASAR HUKUM DAN TUJUAN PEMROSESAN DATA
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Pemrosesan Data Pribadi oleh DPJM hanya dilakukan berdasarkan dasar pemrosesan yang sah (<em className="italic">lawful basis</em>) sesuai UU PDP dan POJK No. 22 Tahun 2023, yaitu: persetujuan eksplisit, pelaksanaan kewajiban perjanjian Program Pensiun, kepatuhan atas kewajiban hukum, dan pemenuhan kepentingan yang sah (<em className="italic">legitimate interest</em>).
              </p>
              
              <h3 className="font-bold text-corporate-900 text-sm uppercase tracking-wider mb-4">
                Tujuan Pemrosesan Data Meliputi:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Penyelenggaraan Program Pensiun',
                    desc: 'Mengelola pendaftaran kepesertaan, perhitungan liabilitas aktuaria, pembukuan mutasi hak, dan administrasi kepesertaan PPMP secara akurat.'
                  },
                  {
                    title: 'Penyaluran Manfaat Pensiun',
                    desc: 'Melakukan transfer dan pemindahbukuan pembayaran Manfaat Pensiun bulanan, manfaat sekaligus, maupun bantuan tambahan hari raya keagamaan melalui rekening bank mitra penyalur.'
                  },
                  {
                    title: 'Verifikasi & Mitigasi Kecurangan',
                    desc: 'Melaksanakan validasi keabsahan penerima manfaat dan otentikasi berkala guna mencegah keterlanjuran bayar (over-payment).'
                  },
                  {
                    title: 'Layanan Komunikasi & Informasi',
                    desc: 'Mengirimkan notifikasi berkala, ringkasan informasi kepesertaan, konfirmasi hak, dan informasi edukasi pensiun melalui media surat, email, atau sarana komunikasi elektronik.'
                  },
                  {
                    title: 'Penanganan Pengaduan',
                    desc: 'Memproses dan menyelesaikan pertanyaan, permohonan informasi, dan Pengaduan Konsumen yang disampaikan ke DPJM.'
                  },
                  {
                    title: 'Kepatuhan Regulasi',
                    desc: 'Memenuhi kewajiban pelaporan berkala kepada Otoritas Jasa Keuangan (OJK), Direktorat Jenderal Pajak, auditor negara, dan lembaga pengawas berwenang.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A651] flex-shrink-0" />
                      <h4 className="font-bold text-corporate-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section id="prinsip-perlindungan" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  5
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  PRINSIP PERLINDUNGAN DAN KEWAJIBAN DPJM
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Sesuai Pasal 19 dan Pasal 22 POJK No. 22 Tahun 2023 serta UU PDP, DPJM mematuhi prinsip-prinsip operasional berikut:
              </p>
              
              <div className="space-y-3.5">
                {[
                  {
                    title: 'Kerahasiaan dan Integritas',
                    desc: 'DPJM menjamin kerahasiaan dan integritas data pribadi Anda serta memastikan pembatasan akses hanya kepada pejabat/petugas yang berwenang (need-to-know basis dan least privilege).'
                  },
                  {
                    title: 'Larangan Pengalihan Tanpa Hak',
                    desc: 'DPJM dilarang dan tidak akan menjual, memperdagangkan, atau memberikan Data Pribadi Anda kepada pihak ketiga untuk kepentingan komersial atau tujuan di luar mandat pengelolaan dana pensiun.'
                  },
                  {
                    title: 'Larangan Pemaksaan Persetujuan',
                    desc: 'DPJM tidak mengharuskan calon peserta atau peserta menyetujui pembagian data pribadi ke pihak eksternal sebagai syarat wajib untuk memperoleh hak layanan pensiun, kecuali jika pemrosesan tersebut diwajibkan oleh ketentuan perundang-undangan.'
                  },
                  {
                    title: 'Pemberitahuan Sumber Data',
                    desc: 'Apabila DPJM memperoleh data pribadi Anda dari pihak ketiga (misalnya dari instansi Pemberi Kerja/Mitra Pendiri), DPJM memastikan pihak tersebut telah memperoleh dasar pemrosesan yang sah dan DPJM akan memberitahukan sumber data dimaksud sesuai ketentuan yang berlaku.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-3.5 items-start">
                    <Lock className="w-5 h-5 text-corporate-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-corporate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="pihak-ketiga" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  6
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  PEMBAGIAN DAN PENGUNGKAPAN DATA KEPADA PIHAK KETIGA
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Dalam rangka menyelenggarakan layanan secara efektif, DPJM dapat membagikan sebagian Data Pribadi yang relevan kepada pihak ketiga dengan komitmen kerahasiaan yang ketat:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-corporate-900 text-sm mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-accent-600" />
                    Bank Mitra Penyalur
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    (seperti PT Bank Tabungan Negara (Persero) Tbk, dll.): Data nama, NIK, nomor rekening, dan nominal hak disalurkan menggunakan jalur transmisi terenkripsi untuk kepentingan eksekusi pembayaran bulanan dan rekonsiliasi.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-corporate-900 text-sm mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4 text-accent-600" />
                    Bank Kustodian & Lembaga Penunjang
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Untuk keperluan penyimpanan dan administrasi aset investasi portofolio dana pensiun.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-corporate-900 text-sm mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent-600" />
                    Konsultan Aktuaria & Auditor Independen
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Guna keperluan valuasi aktuaria tahunan dan audit kepatuhan/keuangan yang diwajibkan undang-undang.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-corporate-900 text-sm mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-accent-600" />
                    Regulator dan Penegak Hukum
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Otoritas Jasa Keuangan (OJK), otoritas perpajakan, atau aparat penegak hukum berdasarkan perintah dinas atau ketentuan perundang-undangan yang sah.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-relaxed">
                  <strong>Perlindungan Pihak Ketiga:</strong> Seluruh mitra penyedia jasa dan pihak ketiga yang bekerja sama dengan DPJM diwajibkan menandatangani Perjanjian Kerahasiaan (<em>Non-Disclosure Agreement</em>) serta menerapkan standar keamanan teknis dan organisasi yang setara dengan kebijakan privasi ini.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="keamanan-siber" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  7
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  KEAMANAN SISTEM INFORMASI DAN KETAHANAN SIBER
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Mengacu pada Pasal 24 POJK No. 22 Tahun 2023 dan Pedoman Teknologi Informasi DPJM, Kami menerapkan langkah perlindungan berlapis:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-corporate-900 text-sm mb-1.5">Keamanan Teknis:</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Penerapan enkripsi data dalam transmisi (<em>in-transit</em>) dan penyimpanan (<em>at-rest</em>), perlindungan firewall, sistem manajemen identitas dan otentikasi multi-faktor (MFA), serta pengujian kerentanan berkala.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-corporate-900 text-sm mb-1.5">Keandalan & Ketahanan Siber:</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pemeliharaan pencadangan (backup) data secara terjadwal, pengujian kemampuan pemulihan (<em>recoverability</em>), serta kesiapan fasilitas Disaster Recovery Center (DRC) dan Business Continuity Plan (BCP).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <h4 className="font-bold text-amber-950 text-sm mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Penanganan Insiden Kebocoran Data (Data Breach):
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Dalam hal terjadi kegagalan pelindungan data pribadi atau insiden siber yang memengaruhi kerahasiaan data Anda, DPJM akan menyampaikan pemberitahuan tertulis resmi kepada Subjek Data yang terdampak dan kepada Otoritas Pengawas selambat-lambatnya <strong>3×24 jam</strong> (dan secara internal dalam kerangka mitra kerja maksimal <strong>1×24 jam</strong>), yang memuat rincian insiden, dampak, dan upaya penanggulangannya.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="retensi-data" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  8
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  MASA RETENSI DAN PENGHAPUSAN DATA
                </h2>
              </div>
              <ul className="space-y-3.5 text-slate-700 text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" />
                  <span>
                    DPJM menyimpan Data Pribadi Anda selama Anda tercatat sebagai Peserta aktif, Penerima Manfaat Pensiun, atau Ahli Waris yang berhak.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" />
                  <span>
                    Setelah hak Manfaat Pensiun berakhir secara penuh, Data Pribadi akan disimpan untuk jangka waktu retensi tertentu (minimal 5 sampai 10 tahun) sesuai dengan regulasi arsip sektor jasa keuangan dan peraturan perundang-undangan yang berlaku.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" />
                  <span>
                    Apabila masa retensi telah berakhir, atau atas permohonan penghapusan yang memenuhi syarat legalitas, DPJM akan menghapus, memusnahkan, atau mengaburkan (<em>anonymize</em>) data tersebut secara aman dari pangkalan data sistem.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="hak-subjek-data" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  9
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  HAK-HAK ANDA SEBAGAI SUBJEK DATA
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Berdasarkan UU No. 27 Tahun 2022 dan POJK No. 22 Tahun 2023, Anda berhak untuk:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Hak Memperoleh Informasi',
                    desc: 'Mengetahui kejelasan identitas DPJM, dasar pemrosesan, dan tujuan permintaan data.'
                  },
                  {
                    title: 'Hak Mengakses & Salinan',
                    desc: 'Meminta akses dan memperoleh salinan Data Pribadi Anda yang tersimpan di sistem DPJM.'
                  },
                  {
                    title: 'Hak Melengkapi & Memperbarui',
                    desc: 'Memperbaiki atau memutakhirkan Data Pribadi Anda yang tidak akurat, tidak lengkap, atau berubah (misalnya perubahan alamat, nomor rekening, atau penambahan tanggungan keluarga).'
                  },
                  {
                    title: 'Hak Mengakhiri & Menghapus',
                    desc: 'Menuntut penundaan, pembatasan, atau penghapusan Data Pribadi Anda, sepanjang tidak bertentangan dengan kewajiban statutory DPJM dalam mengelola hak pensiun Anda berdasarkan undang-undang.'
                  },
                  {
                    title: 'Hak Menarik Persetujuan',
                    desc: 'Menarik atau mengubah persetujuan pemrosesan data yang sebelumnya telah Anda berikan secara tertulis atau melalui kanal elektronik resmi.'
                  },
                  {
                    title: 'Hak Pengaduan',
                    desc: 'Mengajukan keberatan atau pengaduan atas dugaan ketidaksesuaian tata kelola data pribadi Anda ke unit layanan pengaduan DPJM atau kepada OJK.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-3">
                    <UserCheck className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-corporate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10 */}
            <section id="kebijakan-cookies" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  10
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  KEBIJAKAN COOKIES PADA SITUS WEB RESMI
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Situs web resmi DPJM menggunakan teknologi cookies dan teknologi pelacak standar untuk:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 mb-5 pl-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Memastikan fungsionalitas inti situs web dan portal kepesertaan dapat berjalan dengan lancar dan aman.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mengingat preferensi sesi Anda saat menggunakan layanan mandiri peserta (<em>self-service portal</em>).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Menganalisis statistik lalu lintas kunjungan web secara agregat guna meningkatkan mutu tampilan dan kemudahan navigasi informasi.</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed p-4 bg-slate-50 rounded-xl border border-slate-100">
                Anda dapat mengatur preferensi penerimaan cookies melalui pengaturan peramban (<em>browser</em>) Anda, namun penonaktifan cookies tertentu dapat memengaruhi fungsionalitas beberapa fitur interaktif pada situs.
              </p>
            </section>

            {/* Section 11 */}
            <section id="perubahan-kebijakan" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-100 text-corporate-800 flex items-center justify-center font-bold">
                  11
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  PERUBAHAN KEBIJAKAN PRIVASI
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                DPJM berhak meninjau dan memperbarui Kebijakan Privasi ini secara berkala guna menyesuaikan dengan dinamika hukum, arahan Otoritas Jasa Keuangan, atau pemutakhiran infrastruktur teknologi informasi. Setiap pembaruan material akan dipublikasikan secara terbuka pada laman ini dengan mencantumkan tanggal pembaruan terakhir. Kami mengimbau Anda untuk meninjau halaman ini secara berkala.
              </p>
            </section>

            {/* Section 12 */}
            <section id="layanan-pengaduan" className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 md:p-8 shadow-sm border border-corporate-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-corporate-900 text-white flex items-center justify-center font-bold">
                  12
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-corporate-900">
                  KONTAK DAN LAYANAN PENGADUAN KONSUMEN
                </h2>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Apabila Anda memiliki pertanyaan, permohonan pelaksanaan hak subjek data, atau ingin menyampaikan pengaduan terkait pelindungan data pribadi di DPJM, Anda dapat menghubungi Unit Pelindungan Konsumen / Pejabat Pelindungan Data Pribadi (<em>Data Protection Officer - DPO</em>) DPJM melalui saluran resmi berikut:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-corporate-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Nama Lembaga</span>
                    <p className="font-bold text-corporate-900 text-sm">Dana Pensiun Jasa Marga (DPJM)</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Email Pengaduan & Privasi</span>
                    <p className="font-bold text-corporate-900 text-sm">
                      <a href="mailto:support@dapenjasamarga.com" className="hover:text-accent-600 hover:underline">
                        support@dapenjasamarga.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-corporate-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Alamat Kantor</span>
                    <p className="text-slate-700 text-xs leading-relaxed font-medium">
                      Kantor Dana Pensiun Jasa Marga, Kompleks Kantor PT Jasa Marga (Persero) Tbk, Plaza Tol Taman Mini, Jakarta 13550
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Phone className="w-5 h-5 text-corporate-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Telepon & Jam Layanan</span>
                    <p className="text-slate-700 text-xs leading-relaxed font-medium">
                      (021) [Nomor Telepon Kantor DPJM]<br />
                      Hari Kerja (Senin – Jumat, pukul 08.00 – 16.00 WIB)
                    </p>
                  </div>
                </div>
              </div>

              {/* OJK Channel */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-amber-950 text-sm mb-1">Kanal Regulasi Otoritas Jasa Keuangan:</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Konsumen juga dapat menyampaikan pengaduan melalui Kontak Otoritas Jasa Keuangan (Kontak OJK 157 / Aplikasi Portal Perlindungan Konsumen OJK).
                  </p>
                </div>
                <a 
                  href="https://kontak157.ojk.go.id" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors flex-shrink-0 shadow-sm"
                >
                  kontak157.ojk.go.id
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* Bottom Return Button */}
            <div className="pt-6 text-center">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 bg-corporate-900 hover:bg-corporate-800 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Halaman Beranda
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
