'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

export default function Home() {
  const categories = [
    {
      id: 1,
      name: 'Alat Konstruksi',
      icon: '/icons/tools.svg'
    },
    {
      id: 2, 
      name: 'Material Bangunan',
      icon: '/icons/bricks.svg'
    },
    {
      id: 3,
      name: 'Kayu & Olahan',
      icon: '/icons/wood.svg'
    },
    {
      id: 4,
      name: 'Instalasi & Finishing',
      icon: '/icons/paint.svg'
    },
    {
      id: 5,
      name: 'Komponen Bangunan',
      icon: '/icons/window.svg'
    }
  ]

  const auctionItems = [
    {
      id: 1,
      title: 'Kayu Balok Borneo',
      price: 40000,
      date: '17 April 2025',
      location: 'SURABAYA',
      image: '/images/kayu-balok.jpg',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Batu Bata Merah 100 Buah',
      price: 40000,
      date: '17 April 2025',
      location: 'SURABAYA',
      image: '/images/batu-bata.jpg',
      status: 'Timer'
    },
    {
      id: 3,
      title: 'Semen Portland 50kg',
      price: 75000,
      date: '18 April 2025',
      location: 'JAKARTA',
      image: '/images/semen.jpg',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Keramik Granite 60x60',
      price: 225000,
      image: '/images/keramik.jpg',
      status: 'Timer',
      date: '19 April 2025',
      location: 'BANDUNG'
    }
  ]

  return (
    <div className="bg-white">
      <Header currentPath="/home" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Ads Banner */}
        <div className="w-full h-64 rounded-xl mb-12 overflow-hidden">
          <Image
            src="/images/2.gif"
            alt="Advertisement Banner"
            width={1200}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-black font-semibold">Kategori</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-300 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Image src={category.icon} alt={category.name} width={24} height={24} />
                </div>
                <span className="text-sm text-center text-white">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Auction Items */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-black font-semibold">Objek Lelang</h2>
            <Link href="/objek-lelang" className="text-purple-600 hover:underline">
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {auctionItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl text-black overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm
                    ${item.status === 'Live' ? 'bg-red-500' : 
                      item.status === 'Timer' ? 'bg-blue-500' : 
                      item.status === 'Flash' ? 'bg-yellow-500' : 
                      'bg-gray-500'}`}>
                    {item.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-purple-600 font-semibold mb-2">Rp {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Image src="/icons/calendar.svg" alt="Date" width={16} height={16} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Image src="/icons/location-pin.svg" alt="Location" width={16} height={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
