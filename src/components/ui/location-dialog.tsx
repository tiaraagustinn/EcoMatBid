'use client';

import { useState } from 'react';
import { WorldMap } from './world-map';

interface LocationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LocationDialog({ isOpen, onClose }: LocationDialogProps) {
  const [selectedCity, setSelectedCity] = useState('');

  // Data koneksi kota-kota di Indonesia
  const connections = [
    {
      start: { lat: -6.2088, lng: 106.8456, label: 'Jakarta' }, // Jakarta
      end: { lat: -7.2575, lng: 112.7521, label: 'Surabaya' }, // Surabaya
    },
    {
      start: { lat: -6.2088, lng: 106.8456, label: 'Jakarta' }, // Jakarta
      end: { lat: -2.9901, lng: 104.7561, label: 'Palembang' }, // Palembang
    },
    {
      start: { lat: -7.2575, lng: 112.7521, label: 'Surabaya' }, // Surabaya
      end: { lat: -8.6500, lng: 115.2167, label: 'Denpasar' }, // Denpasar
    },
    {
      start: { lat: -6.2088, lng: 106.8456, label: 'Jakarta' }, // Jakarta
      end: { lat: -6.9175, lng: 107.6191, label: 'Bandung' }, // Bandung
    },
    {
      start: { lat: -7.2575, lng: 112.7521, label: 'Surabaya' }, // Surabaya
      end: { lat: -7.9797, lng: 112.6304, label: 'Malang' }, // Malang
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full mx-4 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Konektivitas EMB</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600">
            EMB hadir di berbagai kota besar di Indonesia, memudahkan Anda dalam bertransaksi material bangunan secara efisien dan terpercaya.
          </p>
        </div>

        <div className="p-6">
          <WorldMap dots={connections} />
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kota-kota Terhubung</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from(new Set([
                ...connections.map(c => c.start.label),
                ...connections.map(c => c.end.label)
              ])).map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedCity(city as string)}
                >
                  <div className="w-3 h-3 rounded-full bg-purple-600" />
                  <span className="text-gray-900">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Mengapa EMB?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-purple-900 mb-2">Jangkauan Luas</h4>
                <p className="text-purple-700 text-sm">
                  Terhubung dengan berbagai kota besar di Indonesia untuk kemudahan akses material bangunan.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-purple-900 mb-2">Pengiriman Cepat</h4>
                <p className="text-purple-700 text-sm">
                  Jaringan logistik yang terintegrasi memastikan pengiriman tepat waktu ke lokasi Anda.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-purple-900 mb-2">Partner Terpercaya</h4>
                <p className="text-purple-700 text-sm">
                  Bekerjasama dengan supplier dan transporter terpercaya di setiap kota.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 