"use client";

import Header from '../../components/Header';
import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import StepIndicator from '../../components/StepIndicator';
import { MapPin, Plane, Navigation } from 'lucide-react';

function LocationContent() {
  const searchParams = useSearchParams();
  const [location, setLocation] = useState("");

  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const days = searchParams.get('days');

  const nextUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (location) params.set('location', location);
    return `/transport?${params.toString()}`;
  }, [searchParams, location]);

  return (
    <div className="min-h-screen bg-white">
      <Header backHref="/details" title="Usage Location" showLocation />

      <main className="max-w-4xl mx-auto pt-24 px-6 pb-20">
        <StepIndicator currentStep={1} totalSteps={3} statusLabel="Location & Details" />

        {/* Search Card */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 mb-6">
          <h2 className="text-lg font-black text-primary-dark mb-6">Where will the equipment be used?</h2>

          <div className="relative group">
            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Enter farm address or village name..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-neutral-soft border-none rounded-2xl py-5 px-14 text-sm focus:ring-2 focus:ring-primary outline-none font-medium"
            />
            <button
              onClick={() => setLocation("Awe Village, Oyo State")}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2"
            >
              <Navigation size={12} /> Use My Location
            </button>
          </div>

          <p className="text-[10px] text-gray-400 mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            This helps us calculate transport logistics and ensure compatibility with local terrain.
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 rounded-[32px] overflow-hidden border border-gray-100 shadow-sm relative h-[400px]">
          {/* Map Image Placeholder */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
            alt="Map View"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-primary-dark/10" />

          {/* Map Pointer Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-full border-4 border-white shadow-2xl flex items-center justify-center animate-bounce mx-auto">
                <MapPin className="text-white" size={32} />
              </div>
              <div className="mt-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl border border-white">
                <p className="text-[10px] font-black text-primary-dark uppercase tracking-widest leading-none mb-1">Current Target</p>
                <p className="font-black text-primary text-sm whitespace-nowrap">{location || "Searching..."}</p>
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute right-6 bottom-6 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white rounded-2xl shadow-xl font-black text-xl text-primary-dark hover:bg-neutral transition-colors flex items-center justify-center">+</button>
            <button className="w-12 h-12 bg-white rounded-2xl shadow-xl font-black text-xl text-primary-dark hover:bg-neutral transition-colors flex items-center justify-center">-</button>
          </div>
        </div>

        {/* Bottom Confirmation Bar */}
        <div className="flex justify-between items-center mt-10 bg-white p-6 rounded-[32px] border border-neutral-soft shadow-xl shadow-primary-dark/5">
          <div>
            <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1">Confirmed Area</p>
            <p className="font-black text-primary-dark text-lg">{location || "Choose a location"}</p>
          </div>
          <Link href={location ? nextUrl : "#"}>
            <button
              disabled={!location}
              className={`px-10 py-5 rounded-2xl font-black text-sm shadow-xl transition-all flex items-center gap-3
                ${location
                  ? 'bg-primary text-white shadow-primary/20 hover:scale-[1.02]'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
              `}
            >
              Continue to Transport
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function BookingLocation() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center font-black">Loading...</div>}>
      <LocationContent />
    </Suspense>
  );
}
