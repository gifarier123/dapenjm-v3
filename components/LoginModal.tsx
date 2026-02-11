import React, { useState } from 'react';
import { X, Eye, EyeOff, LogIn, User, Lock, AlertCircle } from 'lucide-react';
import { User as UserType } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserType) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    pensionId: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call authentication
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock User Data
      const mockUser: UserType = {
        name: "Budi Santoso",
        pensionId: formData.pensionId || "19830025",
        status: "Pensiunan",
        joinDate: "12 Januari 1995",
        totalBenefits: "Rp 1.245.000.000",
        lastUpdate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      onLoginSuccess(mockUser);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-corporate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header Decoration */}
        <div className="h-32 bg-corporate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-800 to-corporate-900"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -left-10 bottom-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-8 text-white">
            <h3 className="text-2xl font-bold mb-1">Selamat Datang</h3>
            <p className="text-corporate-200 text-sm">Silakan masuk ke akun e-Dapen Anda</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* ID Pensiunan Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">ID Pensiunan</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 12345678"
                  value={formData.pensionId}
                  onChange={(e) => setFormData({...formData, pensionId: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Masukkan kata sandi"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a href="#" className="text-sm font-semibold text-corporate-600 hover:text-corporate-800 transition-colors">
                Lupa Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-corporate-900 text-white font-bold py-3.5 rounded-xl hover:bg-corporate-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-corporate-900/20 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Masuk Sekarang</span>
                </>
              )}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 p-4 rounded-xl flex gap-3 border border-blue-100">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800 leading-relaxed">
              Pastikan Anda menggunakan ID Pensiunan yang terdaftar. Jika mengalami kendala login, silakan hubungi layanan peserta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};