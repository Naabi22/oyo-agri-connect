"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Header from '../../components/Header';
import StepIndicator from '../../components/StepIndicator';
import { useToast } from '@/components/Toast';
import { Suspense, useMemo } from 'react';
import { Calendar, MapPin, Truck, ShieldCheck, ChevronRight } from 'lucide-react';

function SummaryContent() {
  const { showToast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const startDate = searchParams.get('startDate') || "Not set";
  const endDate = searchParams.get('endDate') || "Not set";
  const days = parseInt(searchParams.get('days') || "0");
  const location = searchParams.get('location') || "N/A";
  const transport = searchParams.get('transport') || "pickup";
  const transportFee = parseInt(searchParams.get('transportFee') || "0");
  const pricePerDay = 15000;
  const serviceFee = 500;

  const totalCost = useMemo(() => {
    return (pricePerDay * days) + transportFee + serviceFee;
  }, [days, transportFee]);

  const handleConfirm = () => {
    showToast("Booking Successful! The owner has been notified.", "success");
    setTimeout(() => router.push("/dashboard"), 2000);
  };

  const backUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    return `/transport?${params.toString()}`;
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#FBFDFB]">
      <Header backHref={backUrl} title="Confirm Booking" showLocation />

      <main className="max-w-4xl mx-auto pt-24 px-6 pb-24">
        <StepIndicator currentStep={3} totalSteps={3} statusLabel="Review & Confirm" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column: Details Summary */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-primary-dark/5 border border-neutral-soft/50 overflow-hidden">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <img src="/images/Tractor 2.jpeg" alt="Tractor Preview" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-primary-dark">Massey Ferguson 375</h3>
                  <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase mt-2 w-fit">
                    Verified Owner
                  </div>
                </div>
              </div>

              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 px-1">Booking Breakdown</h4>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</p>
                    <p className="font-black text-primary-dark">{startDate} — {endDate} ({days} days)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</p>
                    <p className="font-black text-primary-dark">{location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Transport</p>
                    <p className="font-black text-primary-dark uppercase text-sm">
                      {transport === 'pickup' ? 'Self Pickup' : 'Door Delivery'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-[32px] p-8 flex gap-6 border border-primary/10">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20 font-black">!</div>
              <div>
                <p className="font-black text-primary-dark text-lg mb-1">Owner Acceptance Required</p>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Farmer Samuel will review your request. You will only be charged once the request is accepted.
                  Cancellation is free within 2 hours of acceptance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cost Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[40px] p-8 shadow-2xl shadow-primary/10 border-2 border-primary/5 sticky top-28">
              <h3 className="text-2xl font-black text-primary-dark mb-8">Summary</h3>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-400">Rental Cost</span>
                  <span className="text-primary-dark">₦{(pricePerDay * days).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-400">Transport Fee</span>
                  <span className="text-primary-dark">₦{transportFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pb-5 border-b border-neutral-soft">
                  <span className="text-gray-400">Service Fee</span>
                  <span className="text-primary-dark">₦{serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="text-primary-dark font-black text-lg">Total</span>
                  <span className="text-3xl font-black text-primary leading-none">₦{totalCost.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 hover:bg-primary-dark transition-all flex items-center justify-center gap-3"
              >
                Confirm Request
              </button>

              <p className="text-center text-[10px] font-bold text-gray-400 mt-6 uppercase tracking-widest group cursor-pointer flex items-center justify-center gap-2">
                <ShieldCheck size={12} className="text-primary" /> Verified Secure Booking
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function OrderSummary() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center font-black">Loading...</div>}>
      <SummaryContent />
    </Suspense>
  );
}
