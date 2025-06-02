'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

interface InvoiceData {
  title: string;
  category: string;
  auctionCode: string;
  winningPrice: number;
  totalBidders: number;
  endTime: string;
  status: string;
  paymentMethod: string;
  paymentDate: string;
  pickupMethod: string;
  address: string;
  pickupSchedule: string;
}

export default function InvoicePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [invoice, setInvoice] = useState<InvoiceData>({
    title: 'Semen Padang - 10 Sak',
    category: 'Bahan Bangunan : Semen',
    auctionCode: '#TDR1346',
    winningPrice: 850000,
    totalBidders: 10,
    endTime: '10 Apr 2025 - 15.30',
    status: 'Sudah Dibayar',
    paymentMethod: 'Transfer Bank',
    paymentDate: '10 Apr 2025 - 13.45',
    pickupMethod: 'Pengambilan Di Lokasi',
    address: 'Jl. Syiah Kuala - Banda Aceh',
    pickupSchedule: '10 Apr 2025 - 20.00'
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentPath="/invoice" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-semibold text-purple-600 mb-6 text-center">Invoice</h1>
            
            {/* Product Info */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src="/images/semen.jpg"
                  alt={invoice.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{invoice.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{invoice.category}</p>
                <p className="text-gray-600 text-sm mt-1">Kode lelang: {invoice.auctionCode}</p>
              </div>
            </div>
          </div>

          {/* Auction Results */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Hasil Lelang</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Harga Menang</p>
                <p className="font-semibold text-red-500">Rp. {invoice.winningPrice.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Jumlah Penawar</p>
                <p className="font-semibold text-black">{invoice.totalBidders}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Waktu Berakhir</p>
                <p className="font-semibold text-black">{invoice.endTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status Anda</p>
                <p className="font-semibold text-green-600">Menang</p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Pembayaran</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {invoice.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Metode Pembayaran</p>
                <p className="font-semibold text-black">{invoice.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tanggal Bayar</p>
                <p className="font-semibold text-black">{invoice.paymentDate}</p>
              </div>
            </div>
          </div>

          {/* Pickup/Delivery Info */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4 ">Pengambilan / Pengiriman</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Metode</p>
                <p className="font-semibold text-black">{invoice.pickupMethod}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Alamat</p>
                <p className="font-semibold text-black">{invoice.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Jadwal</p>
                <p className="font-semibold text-black">{invoice.pickupSchedule}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.back()}
          className="mt-6 w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2 rounded-lg hover:from-purple-500 hover:to-purple-700 transition-colors"
        >
          Selesai
        </button>
      </div>
    </main>
  );
} 