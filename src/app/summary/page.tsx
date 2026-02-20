import Header from '../../components/Header';
import Link from 'next/link';
import BottomNav from '../../components/BottomNav';
import StepIndicator from '../../components/StepIndicator';

export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-[#F8F9F8]">
      <Header backHref="/transport" title="Confirm Booking" showLocation />

      <main className="max-w-4xl mx-auto pt-24 px-6">
        <StepIndicator currentStep={4} totalSteps={4} statusLabel="Review & Confirm" />

        {/* Cost Summary Card */}
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-50 overflow-hidden mb-12">
          <div className="p-10">
            <h2 className="text-2xl font-black text-[#1b3d1a] mb-10">Cost Summary</h2>

            {/* Pricing Details */}
            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-black text-[#1b3d1a] text-lg">Rental</p>
                  <p className="text-xs text-gray-400 italic">3 days x ₦15,000</p>
                </div>
                <p className="font-black text-[#1b3d1a] text-lg">₦45,000</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="font-black text-gray-400 text-lg">Delivery Fee</p>
                <p className="font-black text-[#1b3d1a] text-lg">₦2,000</p>
              </div>

              <div className="flex justify-between items-center pb-8 border-b border-gray-50">
                <p className="font-black text-gray-400 text-lg">Service Fee</p>
                <p className="font-black text-[#1b3d1a] text-lg">₦500</p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <p className="text-2xl font-black text-[#1b3d1a]">Total</p>
                <p className="text-4xl font-black text-[#4CAF50]">₦47,500</p>
              </div>
            </div>

            {/* Information Alert */}
            <div className="bg-[#F1F9F1] rounded-3xl p-6 flex gap-4">
              <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-xs shrink-0 font-bold">i</div>
              <div>
                <p className="font-black text-[#1b3d1a] text-sm mb-1">You won&apos;t be charged yet</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  The owner needs to accept your request before any payment is processed.
                  You can still cancel without penalty within 2 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Illustration (Optional Image) */}
          <div className="h-32 bg-gradient-to-t from-gray-50 to-white flex items-end justify-center">
            <div className="text-6xl opacity-20 grayscale mb-[-10px]">🚜</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-24">
          <Link href="/dashboard" className="w-full max-w-lg">
            <button className="w-full bg-[#4CAF50] text-white py-6 rounded-full font-black text-xl shadow-xl shadow-green-200 hover:scale-[1.02] active:scale-95 transition-all">
              Confirm & Request ➔
            </button>
          </Link>
        </div>
      </main>

      <BottomNav activeItem="bookings" />
    </div>
  );
}
