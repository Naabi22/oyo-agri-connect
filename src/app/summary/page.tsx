import Link from 'next/link';

export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-[#F8F9F8]">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#1b3d1a] font-bold text-sm">
          <Link href="/transport" className="flex items-center gap-2">
            ← Confirm Booking
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-xs">🚜</div>
          <span className="font-black text-[#1b3d1a]">Oyo Central</span>
        </div>
        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest border border-gray-100 rounded-full px-3 py-1">
          <span className="text-gray-300">EN | </span>
          <span className="text-gray-300">YO</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto pt-10 px-6">
        {/* Step Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-2">
            <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-widest">Step 4 of 4</p>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Review & Confirm</p>
          </div>
          <div className="w-full h-1.5 bg-[#4CAF50] rounded-full shadow-sm shadow-green-100"></div>
        </div>

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
                <p className="font-black text-[#1b3d1a] text-sm mb-1">You won't be charged yet</p>
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

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-100 px-8 py-4 rounded-full shadow-2xl flex items-center gap-12 z-50">
          <span className="text-xl text-gray-300">🏠</span>
          <span className="text-xl text-gray-300">🔍</span>
          <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-green-200">+</div>
          <span className="text-xl text-[#4CAF50] font-bold">📅</span>
          <span className="text-xl text-gray-300">👤</span>
      </div>
    </div>
  );
}