import Link from 'next/link';
import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import { equipment, categories } from '../../lib/mockData';

export default function SearchMarketplace() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <Header showLocation />

      <main className="max-w-6xl mx-auto px-6 pt-28">
        {/* Search Input Section */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for tractors, harvesters..."
            className="w-full bg-[#F1F3F1] border-none rounded-2xl py-5 px-12 text-sm focus:ring-2 focus:ring-[#4CAF50] outline-none"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-40">🔍</span>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4CAF50] text-white p-2 rounded-xl">
            <span className="text-xs">⚙️</span>
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-[#1b3d1a] text-white' : 'bg-[#F1F3F1] text-gray-500 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Marketplace Grid */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black text-[#1b3d1a]">Available Equipment</h2>
          <p className="text-gray-400 text-xs font-bold">{equipment.length} items found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, i) => (
            <Link href="/details" key={i}>
              <div className="group border border-gray-100 rounded-[24px] overflow-hidden hover:shadow-xl hover:shadow-green-900/5 transition-all cursor-pointer h-full">
                <div className="h-44 bg-[#F5F7F5] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#1b3d1a] leading-tight">{item.name}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-[#FFB800] text-xs">★</span>
                      <span className="text-xs font-bold">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-4">📍 {item.location}</p>
                  <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Per Day</p>
                      <p className="text-lg font-black text-[#1b3d1a]">₦{item.price}</p>
                    </div>
                    <div className="bg-[#4CAF50] text-white px-6 py-2 rounded-xl text-xs font-bold">
                      Rent Now
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BottomNav activeItem="search" />
    </div>
  );
}
