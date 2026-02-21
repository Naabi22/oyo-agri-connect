"use client";

import Header from '../../components/Header';
import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import StepIndicator from '../../components/StepIndicator';
import { Truck, Store, MapPin } from 'lucide-react';

function TransportContent() {
  const searchParams = useSearchParams();
  const [transport, setTransport] = useState("delivery");

  const location = searchParams.get('location') || "Selected Farm Location";

  const nextUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('transport', transport);
    params.set('transportFee', transport === 'delivery' ? '15000' : '0');
    return `/summary?${params.toString()}`;
  }, [searchParams, transport]);

  const backUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    return `/location?${params.toString()}`;
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <Header backHref={backUrl} title="Transport" showLocation />

      <main className="max-w-4xl mx-auto pt-24 px-6 pb-20">
        <StepIndicator currentStep={2} totalSteps={3} statusLabel="Transport Method" />

        <div className="mb-12">
          <h1 className="text-3xl font-black text-primary-dark mb-2">How will you get your equipment?</h1>
          <p className="text-gray-400 text-sm">Choose the most convenient way to receive the tractor for your farm operations.</p>
        </div>

        {/* Transport Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* I will pick it up */}
          <div
            onClick={() => setTransport("pickup")}
            className={`rounded-[32px] p-8 border-2 transition-all cursor-pointer relative overflow-hidden
              ${transport === "pickup"
                ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                : "border-neutral-soft bg-white hover:border-gray-200 shadow-sm"}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-6 transition-colors
              ${transport === "pickup" ? "bg-primary text-white" : "bg-neutral-soft text-gray-400"}`}>
              <Store size={28} />
            </div>
            <h3 className="text-xl font-black text-primary-dark mb-3">Self Pickup</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-8">
              Collect directly from the owner&apos;s village. Address shared after confirmation.
            </p>
            <p className="text-primary font-black text-sm uppercase tracking-widest mt-auto">Free of charge</p>

            {transport === "pickup" && (
              <div className="absolute top-6 right-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </div>

          {/* Deliver to my location */}
          <div
            onClick={() => setTransport("delivery")}
            className={`rounded-[32px] p-8 border-2 transition-all cursor-pointer relative overflow-hidden group
              ${transport === "delivery"
                ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                : "border-neutral-soft bg-white hover:border-gray-200 shadow-sm"}`}
          >
            {/* Background Image Preview */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                src="/images/Truck.jpeg"
                alt="Delivery Truck"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-6 transition-colors
                ${transport === "delivery" ? "bg-primary text-white" : "bg-neutral-soft text-gray-400"}`}>
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-black text-primary-dark mb-3">Door Delivery</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-8">
                Professional transport to your farm. Includes loading/unloading assistance.
              </p>
              <div className="mt-auto">
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1">Standard Fee</p>
                <p className="text-2xl font-black text-primary-dark">₦15,000</p>
              </div>
            </div>

            {transport === "delivery" && (
              <div className="absolute top-6 right-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-20">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </div>
        </div>

        {/* Delivery Destination Summary Card */}
        <div className="bg-white border border-neutral-soft rounded-[32px] p-8 flex items-center gap-6 shadow-xl shadow-primary-dark/5">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
            <MapPin size={32} />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Destination</p>
            <p className="text-lg font-black text-primary-dark mb-2">{location}</p>
            <Link href={backUrl} className="text-[10px] font-black text-primary uppercase underline hover:text-primary-dark transition-colors">
              Change Location
            </Link>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-12 mb-20">
          <Link href={backUrl} className="text-gray-400 font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors">
            ← Back
          </Link>
          <Link href={nextUrl}>
            <button className="bg-primary text-white px-12 py-6 rounded-[24px] font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Summarize Costs →
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function TransportOption() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center font-black">Loading...</div>}>
      <TransportContent />
    </Suspense>
  );
}
