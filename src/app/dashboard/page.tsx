import Link from "next/link";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import { equipment } from "../../lib/mockData";

export default function Dashboard() {
  const nearbyEquipment = equipment.filter(item => item.dist).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F9F8] pb-32">
      <Header showLocation />

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
          <Link href="/search" className="text-[#4CAF50] text-sm font-bold">
            See all nearby →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nearbyEquipment.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm"
            >
              <div className="h-40 bg-gray-200 relative flex items-center justify-center text-6xl">
                {item.image}
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
                  <Link href="/details">
                    <button className="bg-[#F1F8F1] text-[#4CAF50] px-4 py-2 rounded-xl text-xs font-bold">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav activeItem="home" />
    </div>
  );
}
