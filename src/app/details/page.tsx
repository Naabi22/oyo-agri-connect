"use client";

import Header from '../../components/Header';
import { Star, MapPin, Phone, ShieldCheck, Calendar as CalendarIcon } from 'lucide-react';
import { useToast } from '@/components/Toast';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function EquipmentDetails() {
  const { showToast } = useToast();
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const pricePerDay = 15000;

  const handleDateClick = (day: number, isGray: boolean) => {
    if (isGray) return;

    if (selectedDates.length === 0 || selectedDates.length === 2) {
      setSelectedDates([day]);
    } else {
      const start = selectedDates[0];
      const end = day;
      if (end < start) {
        setSelectedDates([end]);
      } else {
        setSelectedDates([start, end]);
      }
    }
  };

  const selectedDaysCount = useMemo(() => {
    if (selectedDates.length === 2) {
      return (selectedDates[1] - selectedDates[0]) + 1;
    }
    return selectedDates.length === 1 ? 1 : 0;
  }, [selectedDates]);

  const bookingUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedDates.length > 0) {
      // For demo purposes using November 2024 as shown in UI
      const startDay = selectedDates[0];
      const endDay = selectedDates.length === 2 ? selectedDates[1] : selectedDates[0];
      params.set('startDate', `2024-11-${startDay}`);
      params.set('endDate', `2024-11-${endDay}`);
      params.set('days', selectedDaysCount.toString());
    }
    return `/location?${params.toString()}`;
  }, [selectedDates, selectedDaysCount]);

  return (
    <div className="min-h-screen bg-white">
      <Header backHref="/search" title="Equipment Details" showLocation />

      <main className="max-w-4xl mx-auto pt-28 pb-40 px-6">
        {/* Hero Image Section */}
        <div className="w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden mb-8 shadow-2xl shadow-primary-dark/5">
          <img
            src="/images/Tractor 2.jpeg"
            alt="Massey Ferguson 375"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Info */}
          <div className="lg:w-[60%]">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-4 border border-primary/20">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Available Now
              </div>
              <h1 className="text-4xl font-black text-primary-dark mb-2">Massey Ferguson 375</h1>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-black text-primary">₦15,000 <span className="text-gray-400 text-sm font-bold">/ day</span></p>
                <div className="flex items-center gap-1 text-gray-400 font-bold text-sm bg-neutral-soft/30 px-3 py-1 rounded-full">
                  <MapPin size={14} className="text-primary" />
                  Awe Village, Oyo State
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-black text-primary-dark mb-4">Description</h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Well-maintained, 2021 model. This reliable machine is ideal for both small-scale tillage and heavy lifting. Equipped with power steering and a high-torque engine, it ensures efficiency for your farm operations across Oyo Central.
              </p>
            </div>

            {/* Calendar Selection Inline */}
            <div className="bg-white rounded-[32px] border border-neutral-soft p-8 mb-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-primary-dark">November 2024</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-neutral-soft rounded-xl text-gray-400 hover:text-primary transition-colors">‹</button>
                  <button className="p-2 bg-neutral-soft rounded-xl text-gray-400 hover:text-primary transition-colors">›</button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-y-4 text-center">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-gray-300 mb-2">{day}</div>
                ))}

                {Array.from({ length: 14 }).map((_, i) => {
                  const day = i + 28 > 30 ? i + 28 - 30 : i + 28;
                  const isGray = i < 3; // First 3 days are Oct

                  let isSelected = false;
                  let isRange = false;

                  if (!isGray) {
                    if (selectedDates.length === 1 && selectedDates[0] === day) {
                      isSelected = true;
                    } else if (selectedDates.length === 2) {
                      if (day === selectedDates[0] || day === selectedDates[1]) {
                        isSelected = true;
                      } else if (day > selectedDates[0] && day < selectedDates[1]) {
                        isRange = true;
                      }
                    }
                  }

                  return (
                    <div
                      key={i}
                      onClick={() => handleDateClick(day, isGray)}
                      className={`py-3 font-black text-sm relative cursor-pointer rounded-2xl transition-all
                        ${isSelected ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105 z-10' : ''}
                        ${isRange ? 'bg-primary/10 text-primary-dark rounded-none' : ''}
                        ${isGray ? 'text-gray-200 cursor-not-allowed' : isSelected ? '' : 'text-primary-dark hover:bg-neutral-soft'}
                      `}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest">
                {selectedDates.length === 0 ? "Select rental start date" :
                  selectedDates.length === 1 ? "Select rental end date" :
                    `Selected ${selectedDaysCount} days`}
              </p>
            </div>
          </div>

          {/* Right Column: Owner Card */}
          <div className="lg:w-[40%]">
            <div className="bg-white border border-neutral-soft rounded-[40px] p-10 text-center sticky top-32 shadow-xl shadow-primary-dark/5">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-8">Meet the Owner</p>

              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-xl shadow-primary/10">
                  <img
                    src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=200"
                    alt="Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck size={16} fill="white" />
                </div>
              </div>

              <h3 className="text-xl font-black text-primary-dark mb-1">Farmer Samuel</h3>
              <div className="flex items-center justify-center gap-1 text-secondary mb-8">
                <Star size={16} fill="currentColor" />
                <span className="font-black">4.9</span>
                <span className="text-gray-300 font-bold ml-1">/ 5.0</span>
              </div>

              <button
                onClick={() => showToast("Calling Farmer Samuel...", "info")}
                className="w-full bg-primary/10 text-primary py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-primary/20 transition-all border border-primary/20"
              >
                <Phone size={20} />
                Call Owner
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-neutral-soft/50 px-6 py-8 z-50 animate-slide-up">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-8">
          <div className="shrink-0">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total ({selectedDaysCount} days)</p>
            <p className="text-3xl font-black text-primary-dark tracking-tight leading-none">
              ₦{(pricePerDay * selectedDaysCount).toLocaleString()}
            </p>
          </div>

          <Link href={selectedDates.length === 2 ? bookingUrl : "#"} className="flex-1">
            <button
              disabled={selectedDates.length < 2}
              className={`w-full py-6 rounded-3xl font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-3
                ${selectedDates.length === 2
                  ? 'bg-primary text-white shadow-primary/20 hover:scale-[1.02] active:scale-95 hover:bg-primary-dark'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'}
              `}
            >
              Request Booking
              <CalendarIcon size={24} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
