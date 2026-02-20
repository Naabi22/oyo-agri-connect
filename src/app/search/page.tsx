"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import { equipment } from "../../lib/mockData";
import { Search as SearchIcon, MapPin, Star, Navigation } from "lucide-react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["Near Me", "Tractors", "Plows", "Pumps", "Harvesters"];

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" ||
      activeCategory === "Near Me" ||
      item.name.toLowerCase().includes(activeCategory.toLowerCase().slice(0, -1)); // Simple match
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white pb-32">
      <Header showLocationSelector showNotificationBell />

      <main className="max-w-7xl mx-auto pt-32 px-12">
        {/* Search Input Section */}
        <div className="relative mb-10">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-300">
            <SearchIcon size={24} strokeWidth={2.5} />
          </div>
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-20 bg-white border-2 border-neutral-soft/50 rounded-[32px] pl-20 pr-8 text-lg font-black text-primary-dark shadow-2xl shadow-green-900/5 focus:border-primary/20 focus:shadow-green-900/10 transition-all outline-none placeholder:text-gray-300"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all whitespace-nowrap
                ${activeCategory === cat
                  ? "bg-primary text-white shadow-xl shadow-green-200 scale-105"
                  : "bg-neutral-soft text-primary-dark hover:bg-neutral"}
              `}
            >
              {cat === "Near Me" && <Navigation size={18} fill={activeCategory === cat ? "white" : "currentColor"} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[40px] overflow-hidden border border-neutral-soft/50 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 group"
              >
                <div className="h-64 bg-neutral-soft relative overflow-hidden flex items-center justify-center">
                  {/* Equipment Image Placeholder */}
                  <div className="text-[120px] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 opacity-90 grayscale-[0.2] group-hover:grayscale-0">
                    {item.image}
                  </div>
                  <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-2xl uppercase tracking-widest shadow-lg">
                    Available
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-black text-primary-dark tracking-tight">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star size={14} className="text-[#FFB800]" fill="currentColor" />
                      <span className="text-[#FFB800] text-xs font-black">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 font-bold text-sm mb-8 flex items-center gap-2">
                    <MapPin size={16} className="text-gray-300" />
                    {item.location || "Oyo Central"}
                  </p>

                  <div className="flex justify-between items-end pt-8 border-t border-neutral-soft/50">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">
                        Rate
                      </p>
                      <div className="flex items-baseline gap-1">
                        <p className="text-primary-dark font-black text-3xl tracking-tight">
                          ₦{item.price}
                        </p>
                        <span className="text-gray-400 font-black text-sm">/ day</span>
                      </div>
                    </div>
                    <Link href="/details">
                      <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-green-100 hover:scale-[1.05] active:scale-95 transition-all">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-neutral-soft rounded-full flex items-center justify-center mx-auto text-gray-300 mb-6">
                <SearchIcon size={40} />
              </div>
              <h3 className="text-2xl font-black text-primary-dark mb-2">No results found</h3>
              <p className="text-gray-400 font-bold">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav activeItem="search" />
    </div>
  );
}
