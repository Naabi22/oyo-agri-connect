import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      <main className="max-w-7xl mx-auto px-12 pt-40 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Illustration Box */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-[#F5F7F5] rounded-[40px] w-[350px] h-[350px] lg:w-[480px] lg:h-[400px] flex items-center justify-center border border-gray-50 shadow-sm">
              <span className="text-[150px]">🚜</span>
            </div>
            {/* Active Farmers Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#4CAF50]">
                👥
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  Active Farmers
                </p>
                <p className="text-lg font-black text-[#2D5A27]">10,000+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="lg:w-1/2 text-left space-y-6">
          <p className="text-[#4CAF50] font-bold text-sm tracking-widest uppercase">
            Bridging the gap in agriculture
          </p>

          <h1 className="text-6xl font-black text-[#1b3d1a] leading-tight">
            Join Oyo <br /> Agri-Connect
          </h1>

          <p className="text-gray-500 text-lg max-w-md">
            Rent the equipment you need or share yours with fellow farmers
            across Oyo State. Let's grow together.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link href="/dashboard">
              <button className="bg-[#4CAF50] text-white px-10 py-4 rounded-xl font-bold shadow-lg">
                Get Started
              </button>
            </Link>
            <button className="text-[#1b3d1a] px-8 py-4 rounded-xl font-bold hover:bg-gray-50">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <span className="text-[#4CAF50] font-bold">Login here</span>
          </p>
        </div>
      </main>

      {/* Footer Badges */}
      <footer className="absolute bottom-10 w-full px-12 flex items-center gap-12 text-gray-300 font-bold text-xs">
        <span>OyoAgric</span>
        <span>SecurePay</span>
        <span>RuralDev</span>
      </footer>
    </div>
  );
}
