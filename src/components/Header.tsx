import Link from "next/link";
import { Tractor } from "lucide-react";

interface HeaderProps {
  showLanguageToggle?: boolean;
}

export default function Header({ showLanguageToggle = true }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-6 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-[#00E31A] rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
          <Tractor size={24} strokeWidth={2.5} />
        </div>
        <span className="font-black text-2xl text-[#1b3d1a] tracking-tight">
          Oyo Agri-Connect
        </span>
      </Link>

      {/* Language Toggle */}
      {showLanguageToggle && (
        <div className="bg-[#E8F5E9] rounded-full p-1.5 flex items-center gap-1 border border-white shadow-sm">
          <button className="bg-[#00E31A] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-all">
            English
          </button>
          <button className="text-gray-500 px-5 py-2 rounded-full text-sm font-bold hover:text-[#1b3d1a] transition-all">
            Yoruba
          </button>
        </div>
      )}
    </nav>
  );
}