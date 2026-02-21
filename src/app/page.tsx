import Link from "next/link";
import Header from "../components/Header";
import { Users, Leaf, ShieldCheck, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative bg-grid-pattern selection:bg-primary/30">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />

      <Header />

      <main className="max-w-7xl mx-auto px-12 pt-40 pb-24 flex flex-col lg:flex-row items-center gap-20 relative z-10">
        {/* Left Side: Mock Illustration Box */}
        <div className="lg:w-1/2 flex justify-center perspective-1000">
          <div className="relative group transition-transform duration-500 hover:rotate-y-2">
            {/* Main Illustration Placeholder */}
            <div className="bg-neutral-soft rounded-[48px] w-[350px] h-[350px] lg:w-[500px] lg:h-[450px] flex items-center justify-center border border-white shadow-2xl relative overflow-hidden group">
              <img
                src="/images/Tractor 2.jpeg"
                alt="Farmer with modern tractor"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl absolute -bottom-20 -right-20 animate-pulse" />
            </div>

            {/* Active Farmers Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[32px] shadow-2xl flex items-center gap-4 border border-neutral-soft transform transition-transform group-hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Users size={28} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-black uppercase tracking-widest">
                  Active Farmers
                </p>
                <p className="text-2xl font-black text-primary-dark">10,000+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="lg:w-1/2 text-left space-y-8">
          <div className="inline-block">
            <p className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-2">
              Bridging the gap in agriculture
            </p>
            <div className="h-1 w-1/3 bg-primary rounded-full" />
          </div>

          <h1 className="text-7xl font-black text-primary-dark leading-[1.1] tracking-tight">
            Join Oyo <br />
            <span className="text-secondary">Agri-Connect</span>
          </h1>

          <p className="text-gray-500 text-xl leading-relaxed max-w-lg font-medium">
            Rent the equipment you need or share yours with fellow farmers
            across Oyo State. Let&apos;s grow together using technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <Link href="/signup" className="w-full sm:w-auto">
              <button className="w-full bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                Get Started
              </button>
            </Link>
            <button className="w-full sm:w-auto bg-white text-primary-dark px-12 py-5 rounded-2xl font-black text-xl border-2 border-neutral-soft hover:bg-neutral transition-all flex items-center justify-center gap-3">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-400 font-bold">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-primary font-black cursor-pointer hover:underline underline-offset-4">
                Login here
              </span>
            </Link>
          </p>
        </div>
      </main>

      {/* Footer / Partner Section */}
      <footer className="w-full max-w-7xl mx-auto px-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-neutral-soft pt-16 mt-20">
        <div className="flex flex-wrap items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-2 font-black text-[#1b3d1a]">
            <Leaf size={20} className="text-primary" /> OyoAgric
          </div>
          <div className="flex items-center gap-2 font-black text-[#1b3d1a]">
            <ShieldCheck size={20} className="text-primary" /> Paystack
          </div>
          <div className="flex items-center gap-2 font-black text-[#1b3d1a]">
            <Globe size={20} className="text-primary" /> BuildWithOyo
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-8 text-[13px] font-bold text-gray-400 uppercase tracking-widest">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link>
        </div>
      </footer>

      <div className="text-center pb-12 text-[11px] font-bold text-gray-300 uppercase tracking-widest">
        © 2026 Oyo Agri-Connect.
      </div>
    </div>
  );
}
