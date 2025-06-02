'use client'

import Image from 'next/image'
import Link from 'next/link'
import { WavyBackground } from '@/components/ui/wavy-background'
import { ProductCard } from '@/components/ui/product-card'

export default function LandingPage() {
  const featuredProducts = [
    {
      title: 'Kayu Balok Borneo',
      price: 40000,
      imageUrl: '/images/kayu-balok.jpg',
      status: 'Live' as const,
      date: '17 April 2025',
      location: 'SURABAYA'
    },
    {
      title: 'Batu Bata 100 Buah',
      price: 40000,
      imageUrl: '/images/batu-bata.jpg',
      status: 'Timer' as const,
      date: '17 April 2025',
      location: 'SURABAYA'
    },
    {
      title: 'Semen Portland 50kg',
      price: 75000,
      imageUrl: '/images/semen.jpg',
      status: 'Live' as const,
      date: '18 April 2025',
      location: 'JAKARTA'
    },
    {
      title: 'Keramik Granite 60x60',
      price: 225000,
      imageUrl: '/images/keramik.jpg',
      status: 'Timer' as const,
      date: '19 April 2025',
      location: 'BANDUNG'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3e8ff] relative overflow-hidden">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-[#f3e8ff]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/logo2.png"
                alt="EMB Logo"
                width={500}
                height={250}
                className="w-auto h-12"
                placeholder="empty"
              />
              
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/login" 
                className="px-4 py-2 text-[#1a1060] hover:text-[#2d1f8f]"
              >
                Masuk
              </Link>
              <Link 
                href="/register" 
                className="px-6 py-2 bg-[#1a1060] text-white rounded-full hover:bg-[#2d1f8f] transition-all"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Wavy Background */}
      <WavyBackground 
        className="max-w-4xl mx-auto px-4 text-center"
        containerClassName="pt-32 pb-20"
        colors={['#c084fc', '#818cf8', '#38bdf8', '#22d3ee']}
        waveWidth={50}
        backgroundFill="#f3e8ff"
        blur={10}
        waveOpacity={0.5}
        speed="slow"
      >
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1060] leading-tight tracking-tight mb-8">
            <span className="relative inline-block px-4 py-2">
              LELANG CEPAT,
              <div className="absolute inset-0 bg-[#e9d5ff] -skew-y-2 -z-10 transform rounded-xl"></div>
            </span>
            <br/>
            <span className="relative inline-block px-4 py-2">
              KURANGI LIMBAH
              <div className="absolute inset-0 bg-[#fef08a] skew-y-2 -z-10 transform rounded-xl"></div>
            </span>
            <br/>
            <span className="relative inline-block px-4 py-2">
              ECOMATBID
              <div className="absolute inset-0 bg-white -skew-y-2 -z-10 transform rounded-xl"></div>
            </span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#e9d5ff] p-6 rounded-3xl relative overflow-hidden flex items-center justify-center h-64">
              <div className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
                #1
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-[#1a1060] text-lg">
                    Revolusi Lelang Material
                  </p>
                  <p className="text-[#1a1060] font-bold text-xl">
                    ECOMATBID!
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Main CTA */}
            <div className="bg-[#fef08a] p-6 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center min-h-h-64 ">
              {/* Background Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/landing-page.gif"
                  alt="Background illustration"
                  fill
                  className="object-cover opacity-20"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fef08a] via-transparent to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <Link 
                  href="/register" 
                  className="bg-white text-[#1a1060] font-bold text-sm px-8 py-3 rounded-full hover:bg-[#f8f8f8] transition-all flex items-center gap-2 shadow-lg whitespace-nowrap"
                >
                  DAFTAR SEKARANG
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl relative overflow-hidden flex items-center justify-center h-64">
              <div className="absolute top-4 right-4 text-[#ffd700] text-2xl">
                ★
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold text-[#1a1060] mb-2">
                  4.9
                </p>
                <p className="text-[#1a1060]">
                  #pengguna puas
                </p>
                <p className="text-[#1a1060] font-bold">
                  di seluruh Indonesia
                </p>
              </div>
            </div>

          </div>
        </div>
      </WavyBackground>


      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#fef08a]/40 to-[#fef08a]/20 relative">
        <div className="absolute inset-0 bg-[#fef08a]/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center text-[#1a1060] mb-12">
            Keunggulan Platform Kami
          </h2>
          <div className="flex justify-center mb-12">
          <div className="relative w-[600px] h-[400px] rounded-xl overflow-hidden shadow-xl">
  <Image
    src="/images/4.gif"
    alt="Platform Features Animation"
    unoptimized
    fill
    className="object-cover filter hue-rotate-[45deg] saturate-40 brightness-125"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-100 opacity-30 mix-blend-overlay" />
</div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Terpercaya',
                description: 'Sistem lelang yang transparan dan aman dengan verifikasi penjual dan pembeli.',
                icon: '🛡️'
              },
              {
                title: 'Cepat',
                description: 'Proses lelang yang efisien dengan sistem penawaran real-time.',
                icon: '⚡'
              },
              {
                title: 'Menguntungkan',
                description: 'Harga yang kompetitif dan biaya transaksi yang transparan.',
                icon: '💰'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl text-[#1a1060] font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1060] mb-4">Produk Unggulan</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Temukan berbagai material bangunan berkualitas dengan harga terbaik melalui sistem lelang kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1060] text-white rounded-full hover:bg-[#2d1f8f] transition-all"
            >
              Lihat Semua Produk
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#554653] text-[#F8F0E7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Tentang EMB</h3>
              <p className="text-sm opacity-80">
                Platform lelang material bangunan terpercaya yang menghubungkan penjual 
                dan pembeli dalam transaksi yang aman dan menguntungkan.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:text-white">Lelang Material</Link></li>
                <li><Link href="#" className="hover:text-white">Open Lelang</Link></li>
                <li><Link href="#" className="hover:text-white">Beli NPL</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Bantuan</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:text-white">Cara Kerja</Link></li>
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white">Hubungi Kami</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <Link 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-[#F8F0E7]/10 rounded-full flex items-center justify-center hover:bg-[#F8F0E7]/20"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 text-white"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F8F0E7]/20 text-sm text-center opacity-60">
            <p>&copy; 2025 EcoMatBid. Tiara Agustin.</p>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#e9d5ff]/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fef08a]/50 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}
