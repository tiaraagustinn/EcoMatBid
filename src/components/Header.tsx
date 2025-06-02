'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LocationDialog } from './ui/location-dialog';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    setUserName(name || '');

    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    router.push('/profile');
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/home" className="flex items-center gap-2">
                <Image
                    src="/images/logo2.png"
                    alt="EMB Logo"
                    width={500}
                    height={250}
                    className="w-auto h-10"
                    placeholder="empty"
                />
              </Link>
              <div className="relative w-70">
                <input
                  type="text"
                  placeholder="Cari Objek Lelang"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-500 "
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

            <nav className="flex items-center gap-6 text-black mx-auto">
              <Link 
                href="/objek-lelang" 
                className={currentPath === '/objek-lelang' ? 'text-purple-600 font-medium' : 'hover:text-purple-600'}
              >
                Objek Lelang
              </Link>
              <Link 
                href="/open-lelang" 
                className={currentPath === '/open-lelang' ? 'text-purple-600 font-medium' : 'hover:text-purple-600'}
              >
                Open Lelang
              </Link>
              <Link 
                href="/riwayat-lelang" 
                className={currentPath === '/riwayat-lelang' ? 'text-purple-600 font-medium' : 'hover:text-purple-600'}
              >
                Riwayat Lelang
              </Link>
              <Link 
                href="/beli-npl" 
                className={currentPath === '/beli-npl' ? 'text-purple-600 font-medium' : 'hover:text-purple-600'}
              >
                Beli NPL
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button 
                className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsLocationDialogOpen(true)}
              >
                <Image src="/icons/location.svg" alt="Location" width={24} height={24} />
              </button>
              <button className="p-1 hover:bg-gray-50 rounded-lg transition-colors">
                <Image src="/icons/notification.svg" alt="Notifications" width={24} height={24} />
              </button>
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors text-black"
                >
                  <Image src="/icons/avatar.svg" alt="Profile" width={32} height={32} className="rounded-full" />
                  <span className="text-sm font-medium">{userName}</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Profile
                    </Link>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-600">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17L21 12L16 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <LocationDialog 
        isOpen={isLocationDialogOpen}
        onClose={() => setIsLocationDialogOpen(false)}
      />

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Konfirmasi Keluar</h3>
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin keluar dari akun ini?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 