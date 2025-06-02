'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function DetailLelangPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const images = [
    '/images/batu-bata.jpg',
    '/images/batu-bata-2.jpg',
    '/images/batu-bata-3.jpg',
    '/images/batu-bata-4.jpg'
  ];

  const similarAuctions = [
    {
      id: 1,
      title: 'White Ceramics Tiles (200 sq)',
      price: 3200000,
      bids: 3,
      endsIn: '5h',
      image: '/images/keramik.jpg'
    },
    {
      id: 2,
      title: 'Paku Kayu 1000pcs bersih',
      price: 15000,
      bids: 5,
      endsIn: '1d',
      image: '/images/paku.jpg'
    },
    {
      id: 3,
      title: 'Plafon Gypsum 9mm - 6 lembar',
      price: 4800000,
      bids: 15,
      endsIn: '3h',
      image: '/images/plafon.jpg'
    },
    {
      id: 4,
      title: 'Siku Aluminium 3x3 cm - 5 batang',
      price: 2700000,
      bids: 3,
      endsIn: '2d',
      image: '/images/siku-aluminium.jpg'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/objek-lelang" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={images[currentImageIndex]}
                alt="Product"
                fill
                className="object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
              >
                <Image src="/icons/chevron-left.svg" alt="Previous" width={24} height={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
              >
                <Image src="/icons/chevron-right.svg" alt="Next" width={24} height={24} />
              </button>
            </div>
            <div className="flex gap-2 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-purple-600' : ''
                  }`}
                >
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Batu Tanah Liat Merah</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                <Image src="/icons/verified.svg" alt="Verified" width={16} height={16} />
                Verified Seller
              </span>
              <span className="flex items-center gap-2 text-gray-900 bg-gray-100 px-3 py-1 rounded-full text-sm">
                <Image src="/icons/auction.svg" alt="Live" width={16} height={16} />
                Live Action
              </span>
              <span className="flex items-center gap-2 text-gray-900 bg-gray-100 px-3 py-1 rounded-full text-sm">
                <Image src="/icons/bricks.svg" alt="Category" width={16} height={16} />
                Bricks
              </span>
            </div>

            <div className="mb-6">
              <div className="text-sm text-gray-900 mb-1">Current Bid</div>
              <div className="text-2xl font-bold text-red-600">Rp 2.500.000</div>
              <div className="text-sm text-gray-500">12 bids</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-500">Starting Price</div>
                <div className="font-semibold text-gray-900">Rp 1.800.000</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">NPL Price</div>
                <div className="font-semibold text-gray-900">Rp 50.000</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Minimum Bid</div>
                <div className="font-semibold text-gray-900">Rp 1.800.000</div>
              </div>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg mb-6">
              <div className="text-sm font-medium text-gray-900 mb-2">Auction Ends in</div>
              <div className="flex gap-2">
                <div className="bg-purple-400 text-white px-3 py-2 rounded-lg">02</div>
                <div className="text-purple-400 flex items-center">:</div>
                <div className="bg-purple-400 text-white px-3 py-2 rounded-lg">14</div>
                <div className="text-purple-400 flex items-center">:</div>
                <div className="bg-purple-400 text-white px-3 py-2 rounded-lg">36</div>
                <div className="text-purple-400 flex items-center">:</div>
                <div className="bg-purple-400 text-white px-3 py-2 rounded-lg">48</div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => router.push(`/live`)}
                className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors"
              >
                Join Auction
              </button>
              <button 
                onClick={() => router.push(`/beli-npl/${params.id}`)}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Buy NPL
              </button>
              <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Image src="/icons/heart.svg" alt="Favorite" width={24} height={24} />
              </button>
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <Image src="/icons/company.svg" alt="Company" width={48} height={48} className="rounded-full" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">PT Konstruksi Maju</h3>
                  <div className="flex items-center">
                    <Image src="/icons/star-filled.svg" alt="Star" width={16} height={16} />
                    <Image src="/icons/star-filled.svg" alt="Star" width={16} height={16} />
                    <Image src="/icons/star-filled.svg" alt="Star" width={16} height={16} />
                    <Image src="/icons/star-half.svg" alt="Star" width={16} height={16} />
                    <Image src="/icons/star-empty.svg" alt="Star" width={16} height={16} />
                    <span className="ml-1 text-sm text-gray-500">(4.8)</span>
                  </div>
                  <button
                  onClick={() => setShowMessage(!showMessage)}
                  className="ml-4 text-sm border border-gray-300 text-gray-500 rounded-full px-4 py-1 hover:text-gray-600"
                >
                  Message
                </button>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Description</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <div className="font-medium text-gray-900 mb-2">Deskripsi Barang :</div>
              <p className="text-gray-900 mb-4">
                Bata tanah liat merah ini diperoleh dari proyek pembongkaran terbaru kami di Jakarta Pusat. Bata-bata ini
                berada dalam kondisi sangat baik dengan keausan minimal, sehingga sangat cocok untuk digunakan
                kembali dalam proyek konstruksi baru atau renovasi.
              </p>
              <p className="text-gray-900 mb-4">
                Bata-bata ini diproduksi oleh produsen lokal yang terpercaya dan memenuhi standar industri untuk
                kekuatan dan daya tahan. Mereka telah dibersihkan dan disortir dengan hati-hati untuk memastikan
                kualitasnya.
              </p>
              <p className="text-gray-900 mb-4">
                Satu paket ini mencakup sekitar 500 buah bata tanah liat merah berukuran standar (22 cm x 10 cm x 6 cm).
                Perkiraan total beratnya sekitar 1.500 kg.
              </p>
            </div>

            <div>
              <div className="font-medium text-gray-900 mb-2">Manfaat dari bata daur ulang ini:</div>
              <ul className="list-disc list-inside space-y-1 text-gray-900">
                <li>Alternatif yang hemat biaya dibandingkan bata baru</li>
                <li>Pilihan ramah lingkungan yang mengurangi limbah konstruksi</li>
                <li>Tampilan tua yang memberi karakter unik pada bangunan baru</li>
                <li>Sudah mengalami pelapukan, sehingga lebih tahan lama dan tidak mudah rusak</li>
              </ul>
              <p className="mt-4 text-gray-900">
                Sangat cocok untuk dinding taman, dinding interior dekoratif, perapian, lantai, atau proyek konstruksi apa
                pun yang membutuhkan bata berkualitas dengan biaya yang lebih rendah dibandingkan bahan baru.
              </p>
              <p className="mt-4 text-gray-900">
                Pengambilan dapat dilakukan di gudang kami di Jakarta Timur, atau pengiriman dapat diatur dengan biaya
                tambahan.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Auctions */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-6">Similar Auction</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {similarAuctions.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-red-600 font-semibold mb-2">Rp {item.price.toLocaleString()}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{item.bids} bids</span>
                    <span>Ends in {item.endsIn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 