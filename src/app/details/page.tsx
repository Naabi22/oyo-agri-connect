import Header from '../../components/Header';
import Link from 'next/link';

export default function EquipmentDetails() {
  return (
    <div className="min-h-screen bg-[#F8F9F8] pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-28">
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-400 mb-6 flex gap-2">
          <span>Home</span> &gt; <span>Tractors</span> &gt; <span className="text-[#1b3d1a] font-bold">John Deere 5050D</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT COLUMN: Media & Info */}
          <div className="lg:w-[65%] space-y-8">
            {/* Image Gallery Grid */}
            <div className="grid grid-cols-4 gap-4 h-[500px]">
              <div className="col-span-3 bg-gray-200 rounded-[32px] overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[120px]">🚜</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-1/3 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
                <div className="h-1/3 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">💺</div>
                <div className="h-1/3 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">🌅</div>
              </div>
            </div>

            {/* Title & Owner Info */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-black text-[#1b3d1a]">John Deere 5050D Tractor</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[#FFB800] font-bold">★ 4.8 <span className="text-gray-300 font-normal">(124 reviews)</span></span>
                    <span className="bg-[#E8F5E9] text-[#4CAF50] text-[10px] font-black px-3 py-1 rounded-full uppercase">Verified Owner</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50">🔗</button>
                  <button className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50">❤️</button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-50">
                <div className="w-12 h-12 bg-[#1b3d1a] rounded-full"></div>
                <div>
                  <p className="font-bold text-[#1b3d1a]">Marcus Omandi</p>
                  <p className="text-xs text-gray-400">Member since Mar 2021 • Responds in 20 mins</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Horsepower", val: "50 HP", icon: "📟" },
                { label: "Fuel Type", val: "Diesel", icon: "⛽" },
                { label: "Year", val: "2022", icon: "📅" },
                { label: "Usage", val: "450 hrs", icon: "🕒" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">{item.label}</p>
                  <p className="font-bold text-[#1b3d1a]">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Booking Sidebar */}
          <div className="lg:w-[35%]">
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl sticky top-28">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-3xl font-black text-[#1b3d1a]">₦25,000</span>
                  <span className="text-gray-400 font-bold text-sm"> / day</span>
                </div>
                <span className="text-[#4CAF50] text-xs font-bold underline">Insurance Included</span>
              </div>

              {/* Simplified Calendar Placeholder */}
              <div className="mb-8">
                <p className="text-xs font-bold text-[#1b3d1a] mb-4 uppercase tracking-widest">Select Dates</p>
                <div className="bg-[#F8F9F8] rounded-2xl p-4 border border-gray-100">
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-gray-400 mb-2">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center font-bold text-xs">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} className={`py-2 rounded-lg ${i === 5 || i === 6 ? 'bg-[#4CAF50] text-white' : 'text-gray-600'}`}>
                        {i + 10}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-8 text-sm border-t border-gray-50 pt-6">
                <div className="flex justify-between text-gray-500">
                  <span>₦25,000 x 4 days</span>
                  <span className="font-bold text-[#1b3d1a]">₦100,000</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Service Fee</span>
                  <span className="font-bold text-[#1b3d1a]">₦2,500</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <span className="font-black text-[#1b3d1a]">Total</span>
                  <span className="font-black text-[#4CAF50] text-xl">₦102,500</span>
                </div>
              </div>

              <Link href="/duration">
                <button className="w-full bg-[#4CAF50] text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-green-100 hover:scale-[1.02] transition-transform">
                  Book Now →
                </button>
              </Link>

              <p className="text-center text-[10px] text-gray-400 mt-4 font-medium">
                You won't be charged yet. The owner has 24 hours to confirm your request.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
