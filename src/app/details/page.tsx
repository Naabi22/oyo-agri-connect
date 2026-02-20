"use client";

import Header from '../../components/Header';
import Link from 'next/link';
import { Star, Link as LinkIcon, Heart, Cpu, Fuel, Calendar, Clock, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/Toast';

export default function EquipmentDetails() {
  const { showToast } = useToast();
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />

      <main className="max-w-7xl mx-auto pt-32 px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Visualization Column */}
          <div className="lg:w-[65%] space-y-8">
            {/* Breadcrumbs */}
            <nav className="text-xs text-gray-400 mb-6 flex gap-2">
              <span>Home</span> &gt; <span>Tractors</span> &gt; <span className="text-primary font-bold">John Deere 5050D</span>
            </nav>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-4 gap-4 h-[500px]">
              <div className="col-span-3 bg-neutral-soft rounded-[32px] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1594913785162-e678563c4583?auto=format&fit=crop&q=80&w=1200"
                  alt="John Deere 5050D"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-1/3 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
                <div className="h-1/3 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">💺</div>
                <div className="h-1/3 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">🌅</div>
              </div>
            </div>

            {/* Title & Owner Info */}
            <div className="bg-white p-8 rounded-[32px] border border-neutral-soft/50 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-black text-primary-dark">John Deere 5050D Tractor</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-secondary font-bold flex items-center gap-1">
                      <Star size={16} fill="currentColor" /> 4.8
                      <span className="text-gray-300 font-normal">(124 reviews)</span>
                    </span>
                    <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase">Verified Owner</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 border border-neutral-soft rounded-2xl flex items-center justify-center hover:bg-neutral transition-all"><LinkIcon size={18} className="text-gray-400" /></button>
                  <button className="w-10 h-10 border border-neutral-soft rounded-2xl flex items-center justify-center hover:bg-neutral transition-all"><Heart size={18} className="text-gray-400" /></button>
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
                { label: "Horsepower", val: "50 HP", Icon: Cpu },
                { label: "Fuel Type", val: "Diesel", Icon: Fuel },
                { label: "Year", val: "2022", Icon: Calendar },
                { label: "Usage", val: "450 hrs", Icon: Clock }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-neutral-soft/50 text-center group hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 bg-neutral-soft/50 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary group-hover:scale-110 transition-transform">
                    <item.Icon size={20} />
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{item.label}</p>
                  <p className="font-black text-primary-dark">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Booking Sidebar */}
          <div className="lg:w-[35%]">
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl sticky top-28">
              {/* Price & Primary Action */}
              <div className="bg-primary text-white p-10 rounded-[48px] shadow-2xl shadow-primary/30 relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-[12px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Renting for OCTOBER 2026</p>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-4xl font-black tracking-tight">₦25,000</span>
                    <span className="text-lg font-bold opacity-60">/ day</span>
                  </div>
                  <Link href="/duration">
                    <button className="w-full bg-white text-primary py-6 rounded-3xl font-black text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                      Rent Now ➔
                    </button>
                  </Link>
                </div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              </div>

              {/* Simplified Calendar Placeholder */}
              <div className="mb-8">
                <p className="text-[10px] font-black text-primary-dark mb-4 uppercase tracking-[0.2em]">Select Dates</p>
                <div className="bg-neutral-soft/30 rounded-3xl p-6 border border-neutral-soft/50">
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-black text-gray-300 mb-4 tracking-widest">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center font-black text-xs">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} className={`py-3 rounded-xl transition-all cursor-pointer ${i === 5 || i === 6 ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'text-gray-400 hover:bg-neutral-soft'}`}>
                        {i + 10}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-10 text-sm border-t border-neutral-soft pt-8">
                <div className="flex justify-between text-gray-400 font-bold">
                  <span>₦25,000 x 4 days</span>
                  <span className="font-black text-primary-dark">₦100,000</span>
                </div>
                <div className="flex justify-between text-gray-400 font-bold">
                  <span>Service Fee</span>
                  <span className="font-black text-primary-dark">₦2,500</span>
                </div>
                <div className="flex justify-between pt-6 border-t border-neutral-soft">
                  <span className="font-black text-primary-dark text-lg">Total</span>
                  <span className="font-black text-primary text-2xl tracking-tight">₦102,500</span>
                </div>
              </div>

              <button
                onClick={() => showToast("Booking request initiated successfully!", "success")}
                className="w-full bg-primary text-white py-6 rounded-[24px] font-black text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Book Now
                <ChevronRight size={24} />
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-4 font-medium">
                You won&apos;t be charged yet. The owner has 24 hours to confirm your request.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
