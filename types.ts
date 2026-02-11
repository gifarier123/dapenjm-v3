import React from 'react';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  summary: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
}

export interface StatItem {
  id: number;
  label: string;
  value: string;
  suffix?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
  category: 'Kegiatan' | 'Fasilitas' | 'Sosialisasi';
}

export interface User {
  name: string;
  pensionId: string;
  status: 'Aktif' | 'Pensiunan';
  joinDate: string;
  totalBenefits: string;
  lastUpdate: string;
}