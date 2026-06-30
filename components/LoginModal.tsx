import React, { useState } from 'react';
import { X, Wrench } from 'lucide-react';
import { User as UserType } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserType) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  if (!isOpen) return null;

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

        {/* Maintenance Message */}
        <div className="p-8">
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-2">
              <Wrench className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Under Maintenance</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Mohon maaf, sistem login peserta saat ini sedang dalam perbaikan. Silakan coba kembali beberapa saat lagi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};