"use client";

import Link from "next/link";
import { User, Phone, MapPin, Mail, ChevronRight, Leaf, ShieldCheck, Tractor } from "lucide-react";
import { useToast } from "@/components/Toast";

export default function SignupPage() {
    const { showToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        showToast("Welcome! Check your phone for a verification code.", "success");
    };
    return (
        <div className="min-h-screen bg-[#F8FAF8] relative flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* Soft Gradient Background with illustrations */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,227,26,0.05)_0%,transparent_50%)]" />
            <div className="absolute top-20 right-20 text-primary/5 -rotate-12 transition-transform hover:rotate-0 duration-700">
                <Tractor size={200} strokeWidth={1} />
            </div>
            <div className="absolute bottom-20 left-20 text-primary/5 rotate-12 transition-transform hover:rotate-0 duration-700">
                <div className="flex gap-4 items-end">
                    <User size={80} strokeWidth={1} />
                    <User size={120} strokeWidth={1} />
                    <User size={60} strokeWidth={1} />
                </div>
            </div>

            {/* Top Logo - Leaf Icon style from design */}
            <div className="mb-10 text-center relative z-10 transition-all hover:scale-110">
                <div className="w-16 h-16 bg-primary rounded-[24px] flex items-center justify-center text-white shadow-xl shadow-primary/20 mb-6 mx-auto transform rotate-12">
                    <Leaf size={32} fill="white" />
                </div>
                <h1 className="text-4xl font-black text-primary-dark tracking-tight mb-2">
                    Create Your Account
                </h1>
                <p className="text-gray-400 font-bold text-sm">
                    Join your community of farmers
                </p>
            </div>

            {/* Signup Card */}
            <div className="w-full max-w-lg bg-white rounded-[56px] p-12 shadow-2xl shadow-green-900/5 border border-white relative z-10">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="space-y-3">
                        <label className="text-[12px] font-black text-primary-dark uppercase tracking-widest ml-1">
                            Full Name
                        </label>
                        <div className="relative group">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                <User size={20} />
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full bg-neutral-soft border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-3xl py-5 px-16 text-sm outline-none transition-all font-bold placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-3">
                        <label className="text-[12px] font-black text-primary-dark uppercase tracking-widest ml-1">
                            Phone Number
                        </label>
                        <div className="relative group">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                <Phone size={20} />
                            </span>
                            <input
                                type="tel"
                                placeholder="+234 800 000 0000"
                                className="w-full bg-neutral-soft border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-3xl py-5 px-16 text-sm outline-none transition-all font-bold placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Village / Community */}
                    <div className="space-y-3">
                        <label className="text-[12px] font-black text-primary-dark uppercase tracking-widest ml-1">
                            Village / Community
                        </label>
                        <div className="relative group">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                <MapPin size={20} />
                            </span>
                            <input
                                type="text"
                                placeholder="Name of your community"
                                className="w-full bg-neutral-soft border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-3xl py-5 px-16 text-sm outline-none transition-all font-bold placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Primary Action */}
                    <button className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-green-200 hover:scale-[1.02] active:scale-95 hover:bg-[#00D018] transition-all flex items-center justify-center gap-3">
                        Verify Phone
                        <ChevronRight size={24} />
                    </button>
                </form>

                {/* Separator */}
                <div className="relative my-12 text-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-neutral-soft"></div>
                    </div>
                    <span className="relative px-6 bg-white text-[10px] font-black text-gray-300 uppercase tracking-widest">
                        or continue with
                    </span>
                </div>

                {/* Social Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 bg-neutral-soft py-5 rounded-2xl font-black text-primary-dark hover:bg-neutral transition-all border border-transparent hover:border-neutral-soft">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-3 bg-neutral-soft py-5 rounded-2xl font-black text-primary-dark hover:bg-neutral transition-all border border-transparent hover:border-neutral-soft">
                        <Mail size={20} className="text-gray-400" />
                        Email Address
                    </button>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-12 text-center text-sm font-bold text-gray-500 relative z-10">
                Already have an account?{" "}
                <Link href="/login">
                    <span className="text-primary font-black hover:underline underline-offset-4">Log in</span>
                </Link>
            </div>

            <div className="absolute bottom-10 flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-widest opacity-60">
                <ShieldCheck size={14} className="text-primary" />
                Secure Agricultural Network
            </div>
        </div>
    );
}
