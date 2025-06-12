'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

interface Bid {
  id: number;
  bidder: string;
  amount: number;
  timestamp: Date;
}

export default function LiveAuctionPage() {
  const router = useRouter();
  const [currentBid, setCurrentBid] = useState(500000);
  const [bidIncrement, setBidIncrement] = useState(50000);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [bids, setBids] = useState<Bid[]>([
    {
      id: 1,
      bidder: "Iwan Setyo",
      amount: 500000,
      timestamp: new Date()
    },
    {
      id: 2,
      bidder: "Rino Pratiwa",
      amount: 360000,
      timestamp: new Date(Date.now() - 60000)
    },
    {
      id: 3,
      bidder: "Jaya Septi",
      amount: 100000,
      timestamp: new Date(Date.now() - 120000)
    }
  ]);

  const handleBid = () => {
    const newBid = currentBid + bidIncrement;
    const newBidEntry: Bid = {
      id: bids.length + 1,
      bidder: "Anda", // In real app, this would be the logged-in user's name
      amount: newBid,
      timestamp: new Date()
    };
    
    setBids([newBidEntry, ...bids]);
    setCurrentBid(newBid);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/objek-lelang" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Product Info */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-[400px]">
                <Image
                  src="/images/batu-bata.jpg"
                  alt="Product"
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setShowWinnerModal(true)}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-white text-sm bg-red-500">
                    LIVE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Batu Tanah Liat Merah</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Image src="/icons/location-pin.svg" alt="Location" width={16} height={16} />
                  <span>Jakarta Pusat</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Bata tanah liat merah berkualitas tinggi, cocok untuk berbagai proyek konstruksi.
                  Kondisi sangat baik dan telah melalui quality control.
                </p>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Harga Awal</div>
                    <div className="text-lg font-semibold text-gray-900">Rp 100.000</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Kelipatan Bid</div>
                    <div className="text-lg font-semibold text-gray-900">Rp 50.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bidding Area */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-purple-600 p-6">
              <h2 className="text-xl font-bold text-white">Live Auction</h2>
            </div>
            
            {/* Current Bid */}
            <div className="p-6 border-b">
              <div className="text-sm text-gray-600 mb-1">Penawaran Tertinggi Saat Ini</div>
              <div className="text-3xl font-bold text-purple-600">
                Rp {currentBid.toLocaleString()}
              </div>
            </div>

            {/* Bid Button */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => setBidIncrement(50000)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                    bidIncrement === 50000
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  +50.000
                </button>
                <button
                  onClick={() => setBidIncrement(100000)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                    bidIncrement === 100000
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  +100.000
                </button>
                <button
                  onClick={() => setBidIncrement(500000)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                    bidIncrement === 500000
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  +500.000
                </button>
              </div>
              <button
                onClick={handleBid}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                Tawar Rp {(currentBid + bidIncrement).toLocaleString()}
              </button>
            </div>

            {/* Bid History */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Riwayat Penawaran</h3>
              <div className="space-y-4">
                {bids.map((bid) => (
                  <div
                    key={bid.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      bid.id === 1 ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className={`font-medium ${bid.id === 1 ? 'text-green-600' : 'text-gray-900'}`}>
                        {bid.bidder}
                      </div>
                      <div className="text-sm text-gray-500">
                        {bid.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    <div className={`font-semibold ${bid.id === 1 ? 'text-green-600' : 'text-gray-900'}`}>
                      Rp {bid.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winner Modal */}
      {showWinnerModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-xl transform transition-all">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lelang telah berakhir</h3>
              <div className="mb-6">
                <Image
                  src="/images/win1.gif"
                  alt="Winner"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 mb-2">Selamat, anda memenangkan lelang</p>
              <p className="text-gray-600 mb-6">Anda menawar paling tinggi</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => router.push('/home')}
                  className="w-full bg-gray-500 text-white py-3 px-4 rounded-full hover:bg-gray-600 transition-all font-medium"
                >
                  Kembali ke Beranda
                </button>
                <button
                  onClick={() => router.push('/payment')}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-full hover:bg-green-700 transition-all font-medium"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 