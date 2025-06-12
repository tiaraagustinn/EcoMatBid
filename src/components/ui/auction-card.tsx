'use client';

import Image from 'next/image';
import Link from 'next/link';

interface AuctionCardProps {
  id: number;
  title: string;
  price: number;
  date: string;
  location: string;
  image: string;
  status: 'Live' | 'Timer';
}

export function AuctionCard({
  title,
  price,
  date,
  location,
  image,
  status
}: AuctionCardProps) {
  return (
    <div className="bg-[#18181B] rounded-xl overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm
          ${status === 'Live' ? 'bg-red-500' : 'bg-blue-500'}`}>
          {status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <p className="text-purple-400 font-semibold mb-4">Rp {price.toLocaleString()}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Image src="/icons/calendar.svg" alt="Date" width={16} height={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Image src="/icons/location-pin.svg" alt="Location" width={16} height={16} />
            <span>{location}</span>
          </div>
        </div>
        <Link 
          href="#"
          className="mt-4 block w-full py-2 text-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
} 