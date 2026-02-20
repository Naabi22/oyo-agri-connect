import Header from '../../components/Header';
import Link from 'next/link';
import BottomNav from '../../components/BottomNav';
import StepIndicator from '../../components/StepIndicator';

export default function BookingDuration() {
  return (
    <div className="min-h-screen bg-[#F8F9F8]">
      <Header backHref="/details" title="Select Duration" showLocation />

      <main className="max-w-4xl mx-auto pt-24 px-6">
        <StepIndicator currentStep={1} totalSteps={4} statusLabel="25% Complete" />

        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-[#1b3d1a] mt-8">When do you need the equipment?</h1>
          <p className="text-gray-400 text-sm mt-2">Select your rental start and end dates on the calendar below.</p>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-[40px] shadow-xl shadow-green-900/5 overflow-hidden">
          <div className="p-10">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-10">
              <button className="text-[#4CAF50] text-xl font-bold">‹</button>
              <h2 className="text-xl font-black text-[#1b3d1a]">October 2024</h2>
              <button className="text-[#4CAF50] text-xl font-bold">›</button>
              <div className="flex gap-4 text-[10px] font-bold uppercase">
                <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div> Selected</span>
                <span className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-200 rounded-full"></div> Booked</span>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-4 text-center mb-12">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                <div key={day} className="text-[10px] font-bold text-gray-300 mb-4">{day}</div>
              ))}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const isSelected = day >= 15 && day <= 17;
                const isEdge = day === 15 || day === 17;
                
                return (
                  <div key={i} className={`py-4 font-bold relative cursor-pointer
                    ${isSelected ? 'bg-[#E8F5E9] text-[#1b3d1a]' : 'text-gray-400'}
                    ${isEdge ? 'bg-[#4CAF50] text-white rounded-xl' : ''}
                    ${day === 16 ? 'bg-[#E8F5E9]' : ''}
                  `}>
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Duration Summary Bar */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-50">
              <div>
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Duration</p>
                <p className="font-black text-[#1b3d1a]">3 days selected</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Period</p>
                <p className="font-black text-[#1b3d1a]">Oct 15 — Oct 17, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-12 mb-20">
          <Link href="/location">
            <button className="bg-[#4CAF50] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-200 hover:scale-105 transition-transform flex items-center gap-4">
              Next: Usage Location →
            </button>
          </Link>
        </div>
      </main>

      <BottomNav activeItem="bookings" />
    </div>
  );
}
