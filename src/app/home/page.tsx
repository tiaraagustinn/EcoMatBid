'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

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
    }
  ]

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Cari Objek Lelang"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/objek-lelang" className="hover:text-purple-600">Objek Lelang</Link>
            <Link href="/open-lelang" className="hover:text-purple-600">Open Lelang</Link>
            <Link href="/riwayat-lelang" className="hover:text-purple-600">Riwayat Lelang</Link>
            <Link href="/beli-npl" className="hover:text-purple-600">Beli NPL</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="p-2">
              <Image src="/icons/location.svg" alt="Location" width={24} height={24} />
            </button>
            <button className="p-2">
              <Image src="/icons/notification.svg" alt="Notifications" width={24} height={24} />
            </button>
            <div className="flex items-center gap-2">
              <Image src="/icons/avatar.svg" alt="Profile" width={32} height={32} className="rounded-full" />
              <span>Tiara Agustin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Ads Banner */}
      <div className="w-full h-64 bg-gray-200 rounded-xl mb-12 flex items-center justify-center">
        <h2 className="text-2xl text-gray-500">Adds</h2>
      </div>

      {/* Categories */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Kategori</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
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
          <h2 className="text-xl font-semibold">Objek Lelang</h2>
          <Link href="/objek-lelang" className="text-purple-600 hover:underline">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {auctionItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm
                  ${item.status === 'Live' ? 'bg-red-500' : 'bg-blue-500'}`}>
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
    </main>
  )
}
