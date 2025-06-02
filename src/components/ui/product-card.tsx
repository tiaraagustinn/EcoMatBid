'use client';

import Image from 'next/image';
import { BackgroundGradient } from './background-gradient';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  status: 'Live' | 'Timer' | 'Closed' | 'Flash';
  date: string;
  location: string;
}

export const ProductCard = ({
  title,
  price,
  imageUrl,
  status,
  date,
  location
}: ProductCardProps) => {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-100">
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm
            ${status === 'Live' ? 'bg-red-500' : 
              status === 'Timer' ? 'bg-blue-500' : 
              status === 'Flash' ? 'bg-yellow-500' : 
              'bg-gray-500'}`}>
            {status}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-900">
            {title}
          </h3>
          <p className="text-purple-600 dark:text-purple-700 text-lg font-semibold mt-1">
            Rp {price.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-700">
          <div className="flex items-center gap-2">
            <Image src="/icons/calendar.svg" alt="Date" width={16} height={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/location-pin.svg" alt="Location" width={16} height={16} />
            <span>{location}</span>
          </div>
        </div>
        <button className="mt-2 w-full bg-purple-400 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold transition-colors text-stroke-purple-500">
          Lihat Detail
        </button>
      </div>
    </BackgroundGradient>
  );
}; 