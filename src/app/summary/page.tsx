import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import StepIndicator from '../../components/StepIndicator';
import { useToast } from '@/components/Toast';

export default function OrderSummary() {
  const { showToast } = useToast();
  return (
    <div className="min-h-screen bg-neutral">
      <Header backHref="/transport" title="Confirm Booking" showLocationSelector />

      <main className="max-w-4xl mx-auto pt-24 px-6">
        <StepIndicator currentStep={4} totalSteps={4} statusLabel="Review & Confirm" />

        {/* Cost Summary Card */}
        <div className="bg-white rounded-[48px] shadow-2xl shadow-primary/5 border border-white overflow-hidden mb-12">
          <div className="p-10 md:p-14">
            <h2 className="text-3xl font-black text-primary-dark mb-10">Cost Summary</h2>

            {/* Pricing Details */}
            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-black text-primary-dark text-lg">Rental</p>
                  <p className="text-xs text-gray-400 font-bold">3 days x ₦15,000</p>
                </div>
                <p className="font-black text-primary-dark text-xl">₦45,000</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="font-bold text-gray-400 text-lg">Delivery Fee</p>
                <p className="font-black text-primary-dark text-xl">₦2,000</p>
              </div>

              <div className="flex justify-between items-center pb-8 border-b border-neutral-soft">
                <p className="font-bold text-gray-400 text-lg">Service Fee</p>
                <p className="font-black text-primary-dark text-xl">₦500</p>
              </div>

              <div className="flex justify-between items-center pt-8">
                <p className="text-3xl font-black text-primary-dark">Total</p>
                <p className="text-5xl font-black text-primary tracking-tight">₦47,500</p>
              </div>
            </div>

            {/* Information Alert */}
            <div className="bg-neutral-soft/30 rounded-3xl p-8 flex gap-5 border border-neutral-soft/50 font-bold">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white text-sm shrink-0 font-black shadow-lg shadow-primary/20">i</div>
              <div>
                <p className="font-black text-primary-dark text-base mb-1">You won&apos;t be charged yet</p>
                <p className="text-xs text-gray-400 leading-relaxed">
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
          <button
            onClick={() => showToast("Request sent to Marcus Omandi! Check your dashboard for updates.", "success")}
            className="w-full max-w-lg bg-primary text-white py-6 rounded-[32px] font-black text-2xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Confirm & Request ➔
          </button>
        </div>
      </main>

      <BottomNav activeItem="bookings" />
    </div>
  );
}
