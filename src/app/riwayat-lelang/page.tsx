'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

type ActivityStatus = 'all' | 'ongoing' | 'winning' | 'lost' | 'unpaid' | 'completed';

interface Activity {
  id: number;
  title: string;
  image: string;
  closingDate: string;
  status: 'Menang - Sudah Dibayar' | 'Kalah - Anda ditawar Lebih Tinggi' | 'Menang - Belum Bayar' | 'Transaksi - Selesai' | 'Sedang Berlangsung';
  statusClass: string;
}

export default function RiwayatLelangPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<ActivityStatus>('all');

  const activities: Activity[] = [
    {
      id: 1,
      title: 'Semen Padang - 10 Sak',
      image: '/images/semen.jpg',
      closingDate: 'Ditutup: 9 Apr 2025',
      status: 'Menang - Sudah Dibayar',
      statusClass: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      title: 'Semen Padang - 10 Sak',
      image: '/images/semen.jpg',
      closingDate: 'Ditutup: 9 Apr 2025',
      status: 'Kalah - Anda ditawar Lebih Tinggi',
      statusClass: 'bg-red-100 text-red-800'
    },
    {
      id: 3,
      title: 'Semen Padang - 10 Sak',
      image: '/images/semen.jpg',
      closingDate: 'Ditutup: 9 Apr 2025',
      status: 'Menang - Belum Bayar',
      statusClass: 'bg-orange-100 text-orange-800'
    },
    {
      id: 4,
      title: 'Semen Padang - 10 Sak',
      image: '/images/semen.jpg',
      closingDate: 'Ditutup: 9 Apr 2025',
      status: 'Transaksi - Selesai',
      statusClass: 'bg-gray-100 text-gray-800'
    },
    {
      id: 5,
      title: 'Perkakas Bor - 5 Set',
      image: '/images/tools.jpg',
      closingDate: 'Ditutup: 9 Apr 2025',
      status: 'Menang - Sudah Dibayar',
      statusClass: 'bg-green-100 text-green-800'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ongoing', label: 'Sedang Berlangsung' },
    { id: 'winning', label: 'Menang Lelang' },
    { id: 'lost', label: 'Kalah Lelang' },
    { id: 'unpaid', label: 'Belum Dibayar' },
    { id: 'completed', label: 'Selesai' }
  ];

  const filteredActivities = activities.filter(activity => {
    if (activeFilter === 'all') return true;
    switch (activeFilter) {
      case 'ongoing':
        return activity.status === 'Sedang Berlangsung';
      case 'winning':
        return activity.status === 'Menang - Sudah Dibayar';
      case 'lost':
        return activity.status === 'Kalah - Anda ditawar Lebih Tinggi';
      case 'unpaid':
        return activity.status === 'Menang - Belum Bayar';
      case 'completed':
        return activity.status === 'Transaksi - Selesai';
      default:
        return true;
    }
  });

  const handleViewInvoice = () => {
    router.push(`invoice/`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/riwayat-lelang" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Aktivitas</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as ActivityStatus)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-6">
                <div className="relative w-32 h-32">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{activity.closingDate}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm ${activity.statusClass}`}>
                    {activity.status}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {(activity.status === 'Menang - Sudah Dibayar' || activity.status === 'Transaksi - Selesai') && (
                    <button
                      onClick={() => handleViewInvoice()}
                      className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
                    >
                      Unduh Invoice
                    </button>
                  )}
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 