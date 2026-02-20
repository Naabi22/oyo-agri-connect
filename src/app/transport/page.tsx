import Header from '../../components/Header';
import Link from 'next/link';
import BottomNav from '../../components/BottomNav';
import StepIndicator from '../../components/StepIndicator';

export default function TransportOption() {
  return (
    <div className="min-h-screen bg-white">
      <Header backHref="/location" title="Transport" showLocation />

      <main className="max-w-5xl mx-auto pt-24 px-6">
        <StepIndicator currentStep={2} totalSteps={3} statusLabel="Transport Method" />

        <div className="mb-12">
          <h1 className="text-3xl font-black text-primary-dark mb-2">How will you get your equipment?</h1>
          <p className="text-gray-400 text-sm">Choose the most convenient way to receive the tractor for your farm operations.</p>
        </div>

        {/* Transport Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* I will pick it up */}
          <div className="bg-white border-2 border-primary rounded-[32px] p-8 shadow-sm relative transition-all cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-xl mb-6">🏪</div>
            <h3 className="text-xl font-black text-primary-dark mb-3">I will pick it up</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Collect directly from the owner&apos;s location in Ibadan North. Address will be shared after booking confirmation.
            </p>
            <p className="text-primary font-black text-sm uppercase tracking-wider mt-auto">Free of charge</p>
          </div>

          {/* Deliver to my location */}
          <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-neutral-soft/50 rounded-2xl flex items-center justify-center text-xl mb-6 text-gray-400">🚚</div>
            <h3 className="text-xl font-black text-primary-dark mb-3">Deliver to my location</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Professional transport to your specified farm coordinates. Includes loading and unloading assistance.
            </p>
            <div className="mt-auto">
              <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1">Calculated Fee</p>
              <p className="text-xl font-black text-primary-dark">₦15,000</p>
            </div>
          </div>
        </div>

        {/* Delivery Destination Summary Card */}
        <div className="bg-primary/5 border border-primary/10 rounded-[24px] p-6 flex items-center gap-6">
          <div className="w-16 h-16 bg-white border border-neutral-soft rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-2xl">📍</div>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black text-primary-dark uppercase tracking-widest mb-1">Delivery Destination</p>
            <p className="text-xs font-bold text-gray-600 mb-1">Green Valley Farm, Plot 42, Oyo-Ibadan Expressway</p>
            <button className="text-[10px] font-black text-primary uppercase underline">Edit Delivery Address</button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-12 mb-20 border-t border-gray-100 pt-8">
          <Link href="/location" className="text-gray-400 font-bold text-sm flex items-center gap-2">
            ← Back
          </Link>
          <Link href="/summary">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Next: Cost Summary →
            </button>
          </Link>
        </div>
      </main>

      <BottomNav activeItem="bookings" />
    </div>
  );
}
