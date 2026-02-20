import Header from '../../components/Header';
import Link from 'next/link';

export default function BookingLocation() {
  return (
    <div className="min-h-screen bg-[#F8F9F8]">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
          <Link href="/duration">← Usage Location</Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-xs">🚜</div>
          <span className="font-black text-[#1b3d1a]">Oyo Central</span>
        </div>
        <div className="flex gap-2 text-xs font-bold uppercase tracking-widest">
          <span className="text-[#4CAF50]">EN</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-300">YO</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto pt-10 px-6">
        {/* Step Indicator */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-widest">Step 2 of 4</p>
            <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-widest">50% Complete</p>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#4CAF50]"></div>
          </div>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 mb-6">
          <h2 className="text-lg font-black text-[#1b3d1a] mb-6">Where will the equipment be used?</h2>
          
          <div className="relative group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Enter farm address or village name..." 
              className="w-full bg-[#F1F3F1] border-none rounded-2xl py-5 px-14 text-sm focus:ring-2 focus:ring-[#4CAF50] outline-none font-medium"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#E8F5E9] text-[#4CAF50] px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2">
              <span>📍</span> Use My Current Location
            </button>
          </div>
          
          <p className="text-[10px] text-gray-400 mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            This helps us calculate transport logistics and ensure compatibility with local terrain.
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-[32px] overflow-hidden border border-gray-50 shadow-sm relative h-[400px]">
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-[#E3EAE3] flex items-center justify-center">
             <div className="w-full h-full opacity-30 grayscale" style={{backgroundImage: 'radial-gradient(#1b3d1a 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>
             
             {/* Map Marker */}
             <div className="relative z-10">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full border-4 border-white shadow-2xl flex items-center justify-center animate-bounce">
                  <span className="text-2xl">🚜</span>
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-1 rounded-full text-[10px] font-black shadow-sm">
                  IBADAN NORTH-WEST
                </div>
             </div>
          </div>

          {/* Map Controls */}
          <div className="absolute right-6 bottom-20 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-xl shadow-md font-bold text-gray-400">+</button>
            <button className="w-10 h-10 bg-white rounded-xl shadow-md font-bold text-gray-400">-</button>
          </div>
        </div>

        {/* Bottom Confirmation Bar */}
        <div className="flex justify-between items-center mt-10 mb-20 bg-white p-6 rounded-[24px] border border-gray-50 shadow-sm">
           <div>
              <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Location Confirmed</p>
              <p className="font-black text-[#1b3d1a] text-sm">Ibadan North-West Rural Zone</p>
           </div>
           <Link href="/transport"> {/* Next Step: Transport Option */}
             <button className="bg-[#4CAF50] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-lg shadow-green-100 flex items-center gap-3">
               Next: Transport Option →
             </button>
           </Link>
        </div>
      </main>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-100 px-8 py-4 rounded-full shadow-2xl flex items-center gap-12 z-50">
          <span className="text-xl text-gray-300">🏠</span>
          <span className="text-xl text-gray-300">🔍</span>
          <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-green-200">+</div>
          <span className="text-xl text-[#4CAF50] font-bold underline decoration-2 underline-offset-8">📄</span>
          <span className="text-xl text-gray-300">👤</span>
      </div>
    </div>
  );
}