import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Calculator, 
  LogOut, 
  Bell, 
  ChevronRight, 
  Wallet, 
  Download,
  Menu,
  X,
  TrendingUp,
  Clock,
  CreditCard,
  Users,
  Building,
  Calendar,
  FileDown,
  RefreshCw,
  Search
} from 'lucide-react';
import { User as UserType } from '../types';

interface DashboardProps {
  user: UserType;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Simulation State
  const [simData, setSimData] = useState({ salary: 15000000, age: 56, years: 28 });
  const [simResult, setSimResult] = useState<number | null>(null);

  const calculateSimulation = () => {
    // Simple mock calculation logic
    const factor = 2.5; 
    const result = simData.salary * simData.years * factor;
    setSimResult(result);
  };

  const handleDownload = (fileName: string) => {
    alert(`Mengunduh file: ${fileName}...`);
  };

  const menuItems = [
    { id: 'overview', label: 'Ringkasan', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'profile', label: 'Data Peserta', icon: <User className="w-5 h-5" /> },
    { id: 'simulation', label: 'Simulasi Manfaat', icon: <Calculator className="w-5 h-5" /> },
    { id: 'documents', label: 'Dokumen & Slip', icon: <FileText className="w-5 h-5" /> },
  ];

  // --- RENDER CONTENT SECTIONS ---

  const renderOverview = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-corporate-900 to-corporate-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Selamat Datang, Bapak {user.name}</h2>
          <p className="text-corporate-100 max-w-2xl">
            Semoga hari Anda menyenangkan. Berikut adalah ringkasan informasi kepesertaan dana pensiun Anda per hari ini.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-50 text-corporate-600 rounded-xl">
              <Wallet className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-lg">
              {user.status}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-1">Total Akumulasi Manfaat</p>
          <h3 className="text-2xl font-bold text-gray-900">{user.totalBenefits}</h3>
          <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
            <TrendingUp className="w-3 h-3 mr-1" />
            +5.2% dari tahun lalu
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Masa Kepesertaan</p>
          <h3 className="text-2xl font-bold text-gray-900">28 Tahun 4 Bulan</h3>
          <p className="text-xs text-gray-400 mt-2">Sejak {user.joinDate}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Dokumen Terbaru</p>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">SPT Tahunan 2023</h3>
          <button 
            onClick={() => setActiveTab('documents')}
            className="text-xs font-bold text-accent-600 mt-3 hover:underline flex items-center"
          >
            Unduh Dokumen <ChevronRight className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg text-gray-800">Aktivitas Terkini</h3>
        </div>
        <div className="space-y-6">
          {[
            { title: 'Pembayaran Manfaat Pensiun Bulan Oktober', date: '01 Okt 2024', type: 'payment' },
            { title: 'Pembaruan Data Keluarga Berhasil', date: '28 Sep 2024', type: 'update' },
            { title: 'Unduhan Laporan Saldo Tahunan', date: '15 Sep 2024', type: 'download' }
          ].map((act, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                ${act.type === 'payment' ? 'bg-green-100 text-green-600' : 
                  act.type === 'update' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}
              `}>
                  {act.type === 'payment' ? <Wallet className="w-4 h-4"/> : 
                  act.type === 'update' ? <User className="w-4 h-4"/> : <Download className="w-4 h-4"/>}
              </div>
              <div className="flex-1 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                <h4 className="font-semibold text-gray-800 group-hover:text-corporate-900 transition-colors">{act.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{act.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Peserta</h2>
          <p className="text-gray-500 text-sm">Informasi pribadi dan kepesertaan Anda</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
          <RefreshCw className="w-4 h-4" />
          Pengkinian Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              <h3 className="font-bold text-gray-800">Informasi Pribadi</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Nama Lengkap</label>
                <p className="font-medium text-gray-900 mt-1">{user.name}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Nomor Pensiun (NIP)</label>
                <p className="font-medium text-gray-900 mt-1">{user.pensionId}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Tempat, Tanggal Lahir</label>
                <p className="font-medium text-gray-900 mt-1">Jakarta, 12 Agustus 1968</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Jenis Kelamin</label>
                <p className="font-medium text-gray-900 mt-1">Laki-laki</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Alamat Domisili</label>
                <p className="font-medium text-gray-900 mt-1">Jl. Raya Jatiwaringin No. 45, Pondok Gede, Bekasi, Jawa Barat</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Nomor Telepon</label>
                <p className="font-medium text-gray-900 mt-1">0812-3456-7890</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</label>
                <p className="font-medium text-gray-900 mt-1">budi.santoso@email.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <h3 className="font-bold text-gray-800">Data Keluarga (Ahli Waris)</h3>
            </div>
            <div className="p-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="px-4 py-3 rounded-l-lg">Nama</th>
                    <th className="px-4 py-3">Hubungan</th>
                    <th className="px-4 py-3 rounded-r-lg">Tanggal Lahir</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Siti Aminah</td>
                    <td className="px-4 py-3">Istri</td>
                    <td className="px-4 py-3">15 Mei 1970</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Andi Pratama</td>
                    <td className="px-4 py-3">Anak</td>
                    <td className="px-4 py-3">22 Juni 1998</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Card (Bank Info) */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-corporate-900 to-corporate-800 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-6 opacity-90">
              <CreditCard className="w-5 h-5" />
              <h3 className="font-bold">Rekening Pembayaran</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-corporate-200 uppercase tracking-wider">Nama Bank</p>
                <p className="font-bold text-lg">Bank Mandiri</p>
              </div>
              <div>
                <p className="text-xs text-corporate-200 uppercase tracking-wider">Nomor Rekening</p>
                <p className="font-mono text-xl tracking-widest">123-00-9876543-2</p>
              </div>
              <div>
                <p className="text-xs text-corporate-200 uppercase tracking-wider">Atas Nama</p>
                <p className="font-medium">{user.name}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                Ajukan Perubahan
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
             <div className="flex items-center gap-2 mb-4">
                <Building className="w-5 h-5 text-gray-500" />
                <h3 className="font-bold text-gray-800">Status Kepegawaian</h3>
             </div>
             <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-500">Tanggal Masuk</span>
                  <span className="font-medium text-gray-900">{user.joinDate}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Unit Kerja Terakhir</span>
                  <span className="font-medium text-gray-900">Kantor Pusat</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Golongan Pensiun</span>
                  <span className="font-medium text-gray-900">4C</span>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSimulation = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Simulasi Manfaat Pensiun</h2>
        <p className="text-gray-500 text-sm">Hitung estimasi manfaat pensiun yang akan Anda terima</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Gaji Dasar Pensiun (PhDP) Saat Ini</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-400 font-medium">Rp</span>
                <input 
                  type="number" 
                  value={simData.salary}
                  onChange={(e) => setSimData({...simData, salary: Number(e.target.value)})}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Usia Pensiun (Tahun)</label>
                <input 
                  type="number" 
                  value={simData.age}
                  onChange={(e) => setSimData({...simData, age: Number(e.target.value)})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Masa Kerja (Tahun)</label>
                <input 
                  type="number" 
                  value={simData.years}
                  onChange={(e) => setSimData({...simData, years: Number(e.target.value)})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-500 font-medium"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={calculateSimulation}
                className="w-full bg-corporate-900 hover:bg-corporate-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-corporate-900/20 transition-all transform hover:scale-[1.01]"
              >
                Hitung Simulasi
              </button>
            </div>
            
            <p className="text-xs text-gray-400 bg-gray-50 p-4 rounded-lg border border-gray-100">
              *Perhitungan ini hanya merupakan estimasi (simulasi) dan bukan merupakan angka pasti. Nilai sebenarnya akan dihitung berdasarkan ketentuan yang berlaku pada saat Anda pensiun.
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-accent-600 p-6 text-white text-center">
            <Calculator className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl font-bold">Hasil Estimasi</h3>
            <p className="text-accent-100 text-sm">Manfaat Pensiun Sekaligus</p>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center items-center text-center">
            {simResult ? (
              <div className="animate-in zoom-in duration-300">
                <span className="text-gray-400 font-medium text-sm">Estimasi Total</span>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-900 my-2">
                  Rp {simResult.toLocaleString('id-ID')}
                </h2>
                <div className="w-full h-px bg-gray-100 my-6"></div>
                <div className="grid grid-cols-2 gap-4 w-full">
                   <div>
                      <p className="text-xs text-gray-500 mb-1">Manfaat Bulanan</p>
                      <p className="font-bold text-gray-800">Rp {(simResult * 0.005).toLocaleString('id-ID')}</p>
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 mb-1">Manfaat 20%</p>
                      <p className="font-bold text-gray-800">Rp {(simResult * 0.2).toLocaleString('id-ID')}</p>
                   </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-400">
                <p>Silakan lengkapi form dan klik tombol hitung untuk melihat hasil estimasi.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dokumen & Slip</h2>
          <p className="text-gray-500 text-sm">Unduh slip manfaat pensiun, bukti potong pajak, dan dokumen lainnya</p>
        </div>
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="Cari dokumen..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-corporate-500"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slip Manfaat Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
             <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-corporate-600" />
                Slip Manfaat Pensiun
             </h3>
             <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1 outline-none">
                <option>2024</option>
                <option>2023</option>
             </select>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { month: 'Oktober 2024', date: '01 Okt 2024' },
              { month: 'September 2024', date: '01 Sep 2024' },
              { month: 'Agustus 2024', date: '01 Agu 2024' },
              { month: 'Juli 2024', date: '01 Jul 2024' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                      <FileDown className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="font-semibold text-gray-800 text-sm">Slip {item.month}</p>
                      <p className="text-xs text-gray-500">Diterbitkan: {item.date}</p>
                   </div>
                </div>
                <button 
                  onClick={() => handleDownload(`Slip Gaji ${item.month}`)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:text-corporate-900 hover:border-corporate-500 transition-all shadow-sm"
                >
                  Unduh PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pajak & Lainnya */}
        <div className="space-y-6">
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                 <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Building className="w-5 h-5 text-orange-600" />
                    Dokumen Pajak (SPT)
                 </h3>
              </div>
              <div className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                      <FileText className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="font-semibold text-gray-800 text-sm">Bukti Potong 1721-A1 Tahun 2023</p>
                      <p className="text-xs text-gray-500">Untuk pelaporan SPT Tahunan</p>
                   </div>
                </div>
                <button 
                  onClick={() => handleDownload('Bukti Potong 1721-A1 2023')}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:text-corporate-900 hover:border-corporate-500 transition-all shadow-sm"
                >
                  Unduh
                </button>
              </div>
           </div>

           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                 <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Formulir Kepesertaan
                 </h3>
              </div>
              <div className="divide-y divide-gray-50">
                 {[
                   "Formulir Pemutakhiran Data (F-01)",
                   "Formulir Pendaftaran Ahli Waris (F-05)",
                   "Surat Keterangan Masih Hidup (SKMH)"
                 ].map((form, idx) => (
                    <div key={idx} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700 pl-2 border-l-2 border-blue-500">{form}</p>
                      <button 
                        onClick={() => handleDownload(form)}
                        className="p-2 text-gray-400 hover:text-corporate-900 transition-colors"
                      >
                         <Download className="w-4 h-4" />
                      </button>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-corporate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                 <img 
                    src="https://img.playbook.com/O_-Jh_vvPIwvHo8zemEPMcHR5E9_ol-_B6lmVlgh6tw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2MGY1YjE5/LWMwYzgtNDhhNi1i/MTU1LWE2MzIyOGY0/NTFmNg" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
              </div>
              <span className="font-bold text-lg tracking-tight">e-DAPEN</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* User Info Mini */}
          <div className="p-6 bg-corporate-800/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center text-white font-bold text-lg">
                {user.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-sm truncate">{user.name}</h4>
                <p className="text-xs text-corporate-200">ID: {user.pensionId}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20 font-medium' 
                    : 'text-corporate-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
                {activeTab === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-200 hover:bg-red-500/10 hover:text-red-100 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Keluar Aplikasi</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 h-20 flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-xs text-gray-400">Terakhir Update</span>
              <span className="text-xs font-semibold text-corporate-900">{user.lastUpdate}</span>
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-6xl mx-auto">
             {activeTab === 'overview' && renderOverview()}
             {activeTab === 'profile' && renderProfile()}
             {activeTab === 'simulation' && renderSimulation()}
             {activeTab === 'documents' && renderDocuments()}
          </div>
        </div>
      </main>
    </div>
  );
};