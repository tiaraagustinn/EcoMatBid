'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function BeliNPLPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi logika pembayaran di sini
    router.push('/riwayat-lelang'); // Redirect ke riwayat lelang setelah pembayaran
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/objek-lelang" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-purple-600 p-6">
            <h1 className="text-2xl font-bold text-white">Beli NPL (Negotiating Price Limit)</h1>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Product Info */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/batu-bata.jpg"
                  alt="Product"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Batu Tanah Liat Merah</h2>
                <p className="text-sm text-gray-500 mb-1">ID Lelang: #1</p>
                <p className="text-lg font-semibold text-green-600">NPL Price: Rp 50.000</p>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Metode Pembayaran
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="bank_transfer"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-purple-600"
                      />
                      <div>
                        <div className="font-medium text-gray-900">Transfer Bank</div>
                        <div className="text-sm text-gray-500">BCA, Mandiri, BNI, BRI</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="e_wallet"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-purple-600"
                      />
                      <div>
                        <div className="font-medium text-gray-900">E-Wallet</div>
                        <div className="text-sm text-gray-500">GoPay, OVO, DANA, LinkAja</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="border-t pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAgreed}
                      onChange={(e) => setIsAgreed(e.target.checked)}
                      className="mt-1 text-purple-600 rounded"
                    />
                    <span className="text-sm text-gray-500">
                      Saya setuju dengan syarat dan ketentuan pembelian NPL. NPL memberikan hak untuk
                      menawar dengan harga yang telah ditentukan. Biaya NPL tidak dapat dikembalikan
                      setelah transaksi berhasil.
                    </span>
                  </label>
                </div>

                {/* Total and Submit */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-900">Total Pembayaran</span>
                    <span className="text-xl font-bold text-gray-900">Rp 50.000</span>
                  </div>
                  <button
                    type="submit"
                    disabled={!paymentMethod || !isAgreed}
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Bayar Sekarang
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 