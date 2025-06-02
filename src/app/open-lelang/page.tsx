'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function OpenLelangPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    startingPrice: '',
    category: '',
    itemType: '',
    description: '',
    location: '',
    auctionDate: '',
    nplPrice: '',
    auctionType: 'live' // Default to live auction
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles?.length > 0) {
      setFiles(droppedFiles);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles?.length > 0) {
      setFiles(selectedFiles);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data:', formData);
    console.log('Files:', files);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header currentPath="/open-lelang" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Item</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/open-lelang" className="text-purple-600 hover:text-purple-700">
            Open Lelang
          </Link>
          <span>/</span>
          <span>Create Item</span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload File</h2>
              
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center
                  ${dragActive ? 'border-purple-600 bg-purple-50' : 'border-gray-300'}
                  ${files.length > 0 ? 'bg-gray-50' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="mb-4">
                  <Image src="/images/upload.jpg" alt="Upload" width={32} height={32} className="mx-auto" />
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Drag and drop files here, or click to select files
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Max. 120 MB, PNG, JPG, JPEG
                </p>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                  onChange={handleFileInput}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('fileInput')?.click()}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
                >
                  Browse File
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Item Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    value={formData.itemName}
                    onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                    placeholder="Enter item name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="startingPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    Starting Price (Rp)
                  </label>
                  <input
                    type="number"
                    id="startingPrice"
                    value={formData.startingPrice}
                    onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                    placeholder="Enter starting price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  >
                    <option value="">Select category</option>
                    <option value="tools">Alat Konstruksi</option>
                    <option value="materials">Material Bangunan</option>
                    <option value="wood">Kayu & Olahan</option>
                    <option value="finishing">Instalasi & Finishing</option>
                    <option value="components">Komponen Bangunan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="itemType" className="block text-sm font-medium text-gray-700 mb-1">
                    Item Type
                  </label>
                  <input
                    type="text"
                    id="itemType"
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    placeholder="Enter item type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Item Details</h2>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Item Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the condition, quality, and other details of your item"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Auction Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Item Location
                  </label>
                  <select
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  >
                    <option value="">Select location</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="bandung">Bandung</option>
                    <option value="medan">Medan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="auctionDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Auction Date
                  </label>
                  <input
                    type="date"
                    id="auctionDate"
                    value={formData.auctionDate}
                    onChange={(e) => setFormData({ ...formData, auctionDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="nplPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    NPL Price
                  </label>
                  <input
                    type="number"
                    id="nplPrice"
                    value={formData.nplPrice}
                    onChange={(e) => setFormData({ ...formData, nplPrice: e.target.value })}
                    placeholder="Enter NPL price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Auction Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-black">
                      <input
                        type="radio"
                        name="auctionType"
                        value="live"
                        checked={formData.auctionType === 'live'}
                        onChange={(e) => setFormData({ ...formData, auctionType: e.target.value })}
                        className="text-purple-600 focus:ring-purple-500 "
                      />
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>Live Auction</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-black">
                      <input
                        type="radio"
                        name="auctionType"
                        value="flash"
                        checked={formData.auctionType === 'flash'}
                        onChange={(e) => setFormData({ ...formData, auctionType: e.target.value })}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 "></span>
                        <span>Flash Auction</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-black">
                      <input
                        type="radio"
                        name="auctionType"
                        value="timer"
                        checked={formData.auctionType === 'timer'}
                        onChange={(e) => setFormData({ ...formData, auctionType: e.target.value })}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                        <span>Timer Auction</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Open Auction
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
