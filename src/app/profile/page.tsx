'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  aboutMe: string;
  profilePicture: string | null;
}

export default function ProfilePage() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('personal');
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    email: '',
    phone: '082211111000005',
    company: 'Construction Professional Inc.',
    jobTitle: 'Construction Manager',
    aboutMe: 'Construction professional with 10+ years of experience. Passionate about sustainable building practices and reducing construction waste through material reuse.',
    profilePicture: null
  });

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    
    setProfileData(prev => ({
      ...prev,
      fullName: name || '',
      email: email || ''
    }));
  }, []);

  const menuItems = [
    { id: 'personal', label: 'Personal Information', icon: '/icons/user.svg' },
    { id: 'security', label: 'Account Security', icon: '/icons/security.svg' },
    { id: 'notifications', label: 'Notifications', icon: '/icons/bell.svg' },
    { id: 'payment', label: 'Payment Methods', icon: '/icons/payment.svg' },
    { id: 'shipping', label: 'Shipping Information', icon: '/icons/shipping.svg' },
    { id: 'privacy', label: 'Privacy Settings', icon: '/icons/privacy.svg' }
  ];

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement save functionality
    console.log('Saving profile data:', profileData);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentPath="/profile" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Edit Profil</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-1/4 bg-white rounded-lg shadow-sm p-6 h-fit">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
                {profileData.profilePicture ? (
                  <Image
                    src={profileData.profilePicture}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/icons/user-large.svg"
                      alt="Default Profile"
                      width={64}
                      height={64}
                    />
                  </div>
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{profileData.fullName}</h2>
              <button
                onClick={() => document.getElementById('pictureInput')?.click()}
                className="text-purple-600 text-sm font-medium hover:text-purple-700"
              >
                Change Picture
              </button>
              <input
                type="file"
                id="pictureInput"
                accept="image/*"
                className="hidden"
                onChange={handlePictureChange}
              />
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors
                    ${activeMenu === item.id
                      ? 'bg-purple-50 text-purple-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSave}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={profileData.company}
                    onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title (Optional)
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    value={profileData.jobTitle}
                    onChange={(e) => setProfileData({ ...profileData, jobTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700 mb-1">
                    About Me (Optional)
                  </label>
                  <textarea
                    id="aboutMe"
                    rows={4}
                    value={profileData.aboutMe}
                    onChange={(e) => setProfileData({ ...profileData, aboutMe: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-300"
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg hover:from-purple-500 hover:to-purple-700 transition-colors"
                  >
                    Save Changes
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