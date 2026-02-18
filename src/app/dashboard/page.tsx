import Link from "next/link";
import Header from "../../components/Header";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9F8] pb-32">
      {/* Updated Header with Location Picker */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center text-white text-xs font-bold">
            🚜
          </div>
          <span className="font-bold text-[#1b3d1a]">Oyo Agri-Connect</span>
        </div>

        {/* Location Picker from your design */}
        <div className="bg-[#F1F3F1] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-[#1b3d1a]">
          <span className="text-[#4CAF50]">📍</span> Oyo Central
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#E8F5E9] rounded-full p-1 text-[10px] font-bold">
            <span className="bg-[#4CAF50] text-white px-3 py-1 rounded-full">
              EN
            </span>
            <span className="text-gray-400 px-3 py-1">YO</span>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
            🔔
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-28">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-[#1b3d1a]">
            Good morning, Farmer John
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Ready to grow your business today?
          </p>
        </div>

        {/* Primary Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link href="/search" className="block">
            <div className="bg-[#4CAF50] p-8 rounded-[32px] text-white relative overflow-hidden group cursor-pointer shadow-lg shadow-green-100">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-12">
                  🔍
                </div>
                <h3 className="text-2xl font-bold">Find Equipment</h3>
                <p className="text-white/80 text-sm mt-1">
                  Browse tractors, harvesters, and more near you
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 text-white/10 text-[120px] font-black group-hover:scale-110 transition-transform">
                🚜
              </div>
            </div>
          </Link>
          <div className="bg-[#FFF4E0] p-8 rounded-[32px] text-[#A67C00] relative overflow-hidden group cursor-pointer border border-[#FFE0A3]">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#FFD580] rounded-2xl flex items-center justify-center text-2xl mb-12 text-white">
                ➕
              </div>
              <h3 className="text-2xl font-bold">List Equipment</h3>
              <p className="text-[#A67C00]/70 text-sm mt-1">
                Earn extra income by renting out your tools
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 text-[#FFD580]/20 text-[120px] font-black group-hover:scale-110 transition-transform">
              🛠️
            </div>
          </div>
        </div>

        {/* Current Rental Tracker from Design */}
        <div className="bg-white border border-gray-100 rounded-[24px] p-6 mb-12 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#F1F8F1] rounded-2xl flex items-center justify-center text-2xl">
              🚛
            </div>
            <div>
              <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></span>{" "}
                Current Rental
              </p>
              <p className="font-bold text-[#1b3d1a] text-lg">
                Tractor #402 - Arriving 10:00 AM
              </p>
              <p className="text-gray-400 text-xs">
                Driver: Segun Adebayo • +234 802 345 6789
              </p>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-[#1b3d1a] text-white px-8 py-3 rounded-full font-bold text-sm shadow-md">
            Track Arrival
          </button>
        </div>

        {/* Nearby for You Section */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black text-[#1b3d1a]">Nearby for You</h3>
          <button className="text-[#4CAF50] text-sm font-bold">
            See all nearby →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Massey Ferguson 375",
              price: "25,000",
              rating: "4.9",
              dist: "2.4 km",
            },
            {
              name: "John Deere W150",
              price: "45,000",
              rating: "4.7",
              dist: "4.1 km",
            },
            {
              name: "Honda Pump GX160",
              price: "5,500",
              rating: "4.8",
              dist: "1.2 km",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm"
            >
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#4CAF50] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Available
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-xs">
                  ❤️
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-[#1b3d1a]">{item.name}</h4>
                  <span className="text-[#FFB800] text-xs font-bold">
                    ★ {item.rating}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mb-4">
                  📍 {item.dist} away
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">
                      Daily Rate
                    </p>
                    <p className="text-[#1b3d1a] font-black">₦{item.price}</p>
                  </div>
                  <button className="bg-[#F1F8F1] text-[#4CAF50] px-4 py-2 rounded-xl text-xs font-bold">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Bottom Nav from Design */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-100 px-8 py-4 rounded-full shadow-2xl flex items-center gap-12 z-50">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl text-[#4CAF50]">🏠</span>
          <span className="text-[10px] font-bold text-[#4CAF50]">HOME</span>
        </div>
        <span className="text-xl text-gray-300">🔍</span>
        <span className="text-xl text-gray-300">📄</span>
        <span className="text-xl text-gray-300">🚜</span>
        <span className="text-xl text-gray-300">👤</span>
      </div>
    </div>
  );
}
