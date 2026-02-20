"use client";

import Link from "next/link";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import { equipment } from "../../lib/mockData";
import { Search, Plus, Truck, Star, Heart, MoveRight, Tractor, Hammer } from "lucide-react";

export default function Dashboard() {
  const nearbyEquipment = equipment.filter(item => item.dist).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBFDFB] pb-32">
      <Header showLocationSelector showNotificationBell />

      <main className="max-w-6xl mx-auto px-6 pt-32">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-primary-dark tracking-tight">
            Good morning, Farmer John
          </h1>
          <p className="text-gray-400 font-bold text-sm mt-1 uppercase tracking-widest">
            Ready to grow your business today?
          </p>
        </div>

        {/* Primary Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Find Equipment Card */}
          <Link href="/search" className="block group">
            <div className="bg-[#4CAF50] p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl shadow-green-200 transition-all hover:scale-[1.02] hover:shadow-green-300">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-10 backdrop-blur-md border border-white/10">
                  <Search size={28} strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black mb-2">Find Equipment</h3>
                <p className="text-white/80 font-bold">
                  Browse tractors, harvesters, and more near you
                </p>
              </div>
              {/* Background Graphic */}
              <div className="absolute -right-10 -bottom-10 text-white/10 group-hover:text-white/20 transition-all duration-700 pointer-events-none">
                <Tractor size={240} strokeWidth={1} />
              </div>
            </div>
          </Link>

          {/* List Equipment Card */}
          <div className="bg-[#FFF4E0] p-10 rounded-[40px] text-[#866100] relative overflow-hidden border border-[#FFE0A3] transition-all hover:scale-[1.02] cursor-pointer group shadow-xl shadow-yellow-900/5">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#FFB800] rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-yellow-200">
                <Plus size={28} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-2">List Equipment</h3>
              <p className="text-[#866100]/70 font-bold">
                Earn extra income by renting out your tools
              </p>
            </div>
            {/* Background Graphic */}
            <div className="absolute -right-10 -bottom-10 text-[#FFB800]/10 group-hover:text-[#FFB800]/20 transition-all duration-700 pointer-events-none">
              <Hammer size={240} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Current Rental Tracker */}
        <div className="bg-white border border-neutral-soft rounded-[32px] p-8 mb-16 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-green-900/5 group hover:shadow-green-900/10 transition-all">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary relative">
              <div className="absolute inset-0 bg-primary/5 animate-ping rounded-3xl" />
              <Truck size={36} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(0,227,26,1)]" />
                <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">
                  Current Rental
                </p>
              </div>
              <p className="font-black text-primary-dark text-2xl mb-1">
                Tractor #402 - Arriving 10:00 AM
              </p>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                <User size={14} />
                <span>Segun Adebayo • +234 802 345 6789</span>
              </div>
            </div>
          </div>
          <button className="mt-6 md:mt-0 bg-primary-dark text-white px-10 py-5 rounded-3xl font-black text-lg shadow-xl hover:bg-black transition-all">
            Track Arrival
          </button>
        </div>

        {/* Nearby for You Section */}
        <div className="flex justify-between items-end mb-8 px-2">
          <div>
            <h3 className="text-3xl font-black text-primary-dark tracking-tight">Nearby for You</h3>
            <p className="text-gray-400 font-bold text-sm mt-1">Top rated equipment in Oyo Central</p>
          </div>
          <Link href="/search" className="text-primary font-black text-sm flex items-center gap-2 group">
            See all nearby <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {nearbyEquipment.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[40px] overflow-hidden border border-neutral-soft shadow-sm group hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500"
            >
              <div className="h-56 bg-neutral-soft relative flex items-center justify-center overflow-hidden">
                <div className="text-[100px] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 opacity-80">{item.image}</div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary text-[11px] font-black px-4 py-2 rounded-2xl uppercase tracking-widest shadow-sm">
                  Available
                </div>
                <button className="absolute top-6 right-6 w-11 h-11 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm text-gray-300 hover:text-red-500 transition-colors">
                  <Heart size={20} fill="currentColor" strokeWidth={2.5} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-primary-dark text-xl">{item.name}</h4>
                  <div className="flex items-center gap-1.5 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star size={14} className="text-[#FFB800]" fill="currentColor" />
                    <span className="text-[#FFB800] text-xs font-black">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 font-bold text-sm mb-6 flex items-center gap-1">
                  📍 {item.dist} away
                </p>
                <div className="flex justify-between items-end pt-6 border-t border-neutral-soft/50">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">
                      Daily Rate
                    </p>
                    <p className="text-primary-dark font-black text-2xl tracking-tight">₦{item.price}</p>
                  </div>
                  <Link href="/details">
                    <button className="bg-primary/10 text-primary px-6 py-3 rounded-2xl text-sm font-black hover:bg-primary hover:text-white transition-all">
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
