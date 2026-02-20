"use client";

import Link from "next/link";
import { Tractor, Phone, Mail, HelpCircle, Globe } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white relative flex flex-col items-center justify-center p-6 bg-grid-pattern overflow-hidden">
            {/* Spotlight Effect */}
            <div className="absolute inset-0 bg-spotlight pointer-events-none" />

            {/* Background Dots Pattern (Custom) */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#00E31A 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

            {/* Top Logo */}
            <div className="flex flex-col items-center mb-12 relative z-10">
                <div className="w-16 h-16 bg-[#00E31A] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-200 mb-4 animate-bounce-slow">
                    <Tractor size={36} strokeWidth={2.5} />
                </div>
                <h1 className="text-3xl font-black text-[#1b3d1a] tracking-tight">
                    Oyo Agri-Connect
                </h1>
                <p className="text-gray-400 font-bold text-sm mt-1 uppercase tracking-widest">
                    Empowering rural farmers together
                </p>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white rounded-[48px] p-10 shadow-2xl shadow-green-900/10 border border-neutral-soft relative z-10 transition-all hover:shadow-green-900/20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-primary-dark mb-2">Welcome Back!</h2>
                    <p className="text-gray-400 text-sm font-medium px-4">
                        Log in to access tools and equipment near you.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[12px] font-black text-primary-dark uppercase tracking-widest ml-1">
                            Phone Number
                        </label>
                        <div className="relative group">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                <Phone size={20} />
                            </span>
                            <input
                                type="tel"
                                placeholder="e.g. 0812 345 6789"
                                className="w-full bg-neutral-soft border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-5 px-14 text-sm outline-none transition-all font-bold placeholder:text-gray-300 shadow-inner"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                        Send Verification Code
                        <span className="text-xl">→</span>
                    </button>
                </form>

                <div className="relative my-10 text-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-neutral-soft"></div>
                    </div>
                    <span className="relative px-4 bg-white text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
                        or continue with
                    </span>
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-white border-2 border-neutral-soft py-4 rounded-2xl font-black text-primary-dark flex items-center justify-center gap-4 hover:bg-neutral-soft transition-all">
                        <Mail size={20} className="text-gray-400" />
                        Login with Email
                    </button>
                    <button className="w-full bg-white border-2 border-neutral-soft py-4 rounded-2xl font-black text-primary-dark flex items-center justify-center gap-4 hover:bg-neutral-soft transition-all">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center text-gray-500 font-bold text-sm tracking-tight relative z-10">
                <div className="flex items-center gap-2 justify-center">
                    <HelpCircle size={18} className="text-primary animate-pulse" />
                    Need help? <span className="text-primary font-black cursor-pointer hover:underline">Contact our support team.</span>
                </div>
            </div>

            {/* Language Change at bottom left like design */}
            <div className="absolute bottom-10 left-10 z-10">
                <button className="bg-white/80 backdrop-blur-md border border-neutral-soft px-4 py-2 rounded-full flex items-center gap-2 text-xs font-black text-gray-400 group hover:border-primary transition-all">
                    <Globe size={14} className="group-hover:text-primary transition-colors" /> English
                </button>
            </div>

            {/* Bottom Center Illustration Placeholder */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-neutral-soft/50 rounded-full blur-3xl opacity-50 z-0"></div>
        </div>
    );
}
