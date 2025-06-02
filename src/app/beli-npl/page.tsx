'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

type AccountType = 'personal' | 'business';

export default function BeliNPLPage() {
  const [accountType, setAccountType] = useState<AccountType>('personal');
  const [formData, setFormData] = useState({
    phone: '+62',
    payment: '',
    fullName: '',
    companyName: '',
    companyType: '',
    province: '',
    city: '',
    companyAddress: '',
    ktpFile: null as File | null
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, ktpFile: file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/beli-npl" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">Lengkapi Data Anda</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            {/* Account Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mendaftar lelang sebagai: <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAccountType('personal')}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors
                    ${accountType === 'personal'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="w-12 h-12 mb-2">
                    <Image src="/icons/personal.svg" alt="Personal" width={48} height={48} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Personal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('business')}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors
                    ${accountType === 'business'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="w-12 h-12 mb-2">
                    <Image src="/icons/business.svg" alt="Business" width={48} height={48} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Bisnis</span>
                </button>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                No. telp
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-400"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-1">
                Pembayaran
              </label>
              <select
                id="payment"
                value={formData.payment}
                onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white text-gray-400"
              >
                <option value="">Pilih Pembayaran</option>
                <option value="transfer">Transfer Bank</option>
                <option value="virtual">Virtual Account</option>
                <option value="ewallet">E-Wallet</option>
              </select>
            </div>

            {accountType === 'personal' ? (
              <>
                {/* Personal Form */}
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ketikan Nama"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Scan KTP
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <input
                      type="file"
                      id="ktpFile"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {formData.ktpFile ? formData.ktpFile.name : 'No file selected'}
                      </span>
                      <button
                        type="button"
                        onClick={() => document.getElementById('ktpFile')?.click()}
                        className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm hover:bg-purple-700 transition-colors text-gray-400"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Business Form */}
                <div className="mb-4">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Pilih Pembayaran"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Perusahaan
                  </label>
                  <input
                    type="text"
                    id="companyType"
                    value={formData.companyType}
                    onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                    placeholder="Ketik Jenis Perusahaan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    id="province"
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    placeholder="Ketikkan Provinsi"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Kota
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="ketikkan Kota"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-400"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Perusahaan
                  </label>
                  <textarea
                    id="companyAddress"
                    value={formData.companyAddress}
                    onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-400"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2 rounded-lg hover:from-purple-500 hover:to-purple-700 transition-colors"
            >
              Lanjutkan
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 