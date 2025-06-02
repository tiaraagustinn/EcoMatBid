'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';

interface FilterState {
  kategori: string[];
  jenisLelang: string[];
  lokasi: string[];
  hargaMin: string;
  hargaMax: string;
}

export default function ObjekLelangPage() {
  const router = useRouter();
  const [filters, setFilters] = useState<FilterState>({
    kategori: [],
    jenisLelang: [],
    lokasi: [],
    hargaMin: '',
    hargaMax: ''
  });

  const auctionItems = [
    {
      id: 1,
      title: 'Batu Bata Merah 100 pcs',
      price: 40000,
      date: '17 April 2025',
      location: 'SURABAYA',
      image: '/images/batu-bata.jpg',
      status: 'LIVE'
    },
    {
      id: 2,
      title: 'Cat Tembok 5 kg 2 kaleng',
      price: 120000,
      date: '25 April 2025',
      location: 'YOGYAKARTA',
      image: '/images/cat.jpg',
      status: 'FLASH'
    },
    {
      id: 3,
      title: 'Besi Beton Ulir 12mm - 6 batang',
      price: 90000,
      date: '22 April 2025',
      location: 'BANDUNG',
      image: '/images/besi.jpg',
      status: 'SOLD'
    },    
    {
      id: 4,
      title: 'Kayu stick 2 meter 6x4cm',
      price: 40000,
      date: '17 April 2025',
      location: 'SURABAYA',
      image: '/images/kayu-balok.jpg',
      status: 'TIMER'
    },
    {
      id: 5,
      title: 'Keramik 40x40 2 dus isi 10 pcs',
      price: 40000,
      date: '17 April 2025',
      location: 'SURABAYA',
      image: '/images/keramik.jpg',
      status: 'LIVE'
    },
    {
      id: 6,
      title: 'Semen Gresik 50kg 2 kantong',
      price: 40000,
      date: '17 April 2025',
      location: 'SURABAYA',
      image: '/images/semen.jpg',
      status: 'TIMER'
    },
    {
      id: 7,
      title: 'Paku Kayu 1000pcs bersih',
      price: 25000,
      date: '23 April 2025',
      location: 'SEMARANG',
      image: '/images/paku.jpg',
      status: 'FLASH'
    },
    {
      id: 8,
      title: 'Genteng Tanah Liat 100 pcs',
      price: 200000,
      date: '29 April 2025',
      location: 'PALEMBANG',
      image: '/images/genteng.jpg',
      status: 'LIVE'
    },
    {
      id: 9,
      title: 'Triplek 9mm 122x244 cm',
      price: 68000,
      date: '28 April 2025',
      location: 'MEDAN',
      image: '/images/triplek.jpg',
      status: 'TIMER'
    },
    {
      id: 10,
      title: 'PVC Pipa 3 Inch - 3batang',
      price: 72000,
      date: '3 Mei 2025',
      location: 'PEKANBARU',
      image: '/images/pipa.jpg',
      status: 'LIVE'
    },
    {
      id: 11,
      title: 'Plafon Gypsum 9mm - 6 lembar',
      price: 95000,
      date: '4 Mei 2025',
      location: 'MANADO',
      image: '/images/plafon.jpg',
      status: 'TIMER'
    },
    {
      id: 12,
      title: 'Siku Aluminium 3x3 cm - 5 batang',
      price: 60000,
      date: '30 April 2025',
      location: 'MALANG',
      image: '/images/siku-aluminium.jpg',
      status: 'TIMER'
    }
  ];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      if (category === 'hargaMin' || category === 'hargaMax') {
        return { ...prev, [category]: value };
      }
      const currentValues = prev[category] as string[];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [category]: currentValues.filter(v => v !== value)
        };
      }
      return {
        ...prev,
        [category]: [...currentValues, value]
      };
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/objek-lelang" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
                <Image src="/icons/filter.svg" alt="Filter" width={20} height={20} />
              </div>

              {/* Kategori */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-900">Kategori</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.kategori.includes('peralatan')}
                      onChange={() => handleFilterChange('kategori', 'peralatan')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Peralatan & Perlengkapan</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.kategori.includes('material')}
                      onChange={() => handleFilterChange('kategori', 'material')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Material Bangunan</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.kategori.includes('barang')}
                      onChange={() => handleFilterChange('kategori', 'barang')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Barang Bongkaran</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.kategori.includes('pintu')}
                      onChange={() => handleFilterChange('kategori', 'pintu')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Pintu, Jendela, & Kusen</span>
                  </label>
                </div>
              </div>

              {/* Jenis Lelang */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-900">Jenis Lelang</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.jenisLelang.includes('live')}
                      onChange={() => handleFilterChange('jenisLelang', 'live')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Live Auction</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.jenisLelang.includes('timer')}
                      onChange={() => handleFilterChange('jenisLelang', 'timer')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Timer Auction</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.jenisLelang.includes('flash')}
                      onChange={() => handleFilterChange('jenisLelang', 'flash')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Flash Auction</span>
                  </label>
                </div>
              </div>

              {/* Lokasi */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-900">Lokasi</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.lokasi.includes('semarang')}
                      onChange={() => handleFilterChange('lokasi', 'semarang')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Semarang</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.lokasi.includes('surabaya')}
                      onChange={() => handleFilterChange('lokasi', 'surabaya')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Surabaya</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.lokasi.includes('banda-aceh')}
                      onChange={() => handleFilterChange('lokasi', 'banda-aceh')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Banda Aceh</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.lokasi.includes('medan')}
                      onChange={() => handleFilterChange('lokasi', 'medan')}
                      className="rounded text-purple-600 cursor-pointer"
                    />
                    <span className="text-gray-900">Medan</span>
                  </label>
                </div>
              </div>

              {/* Harga */}
              <div>
                <h3 className="font-medium mb-3 text-gray-900">Harga</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-900">Minimal</label>
                    <input
                      type="number"
                      value={filters.hargaMin}
                      onChange={(e) => handleFilterChange('hargaMin', e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-500"
                      placeholder="Rp"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-900">Maksimal</label>
                    <input
                      type="number"
                      value={filters.hargaMax}
                      onChange={(e) => handleFilterChange('hargaMax', e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-500"
                      placeholder="Rp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-6">
              {auctionItems.map((item) => (
                <Link href={`/objek-lelang/${item.id}`} key={item.id}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm
                        ${item.status === 'LIVE' ? 'bg-red-500' : 
                          item.status === 'TIMER' ? 'bg-blue-500' : 
                          item.status === 'FLASH' ? 'bg-yellow-500' : 
                          'bg-gray-500'}`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-purple-600 font-semibold mb-2">Rp {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Image src="/icons/calendar.svg" alt="Date" width={16} height={16} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-900 mt-1">
                        <Image src="/icons/location-pin.svg" alt="Location" width={16} height={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 