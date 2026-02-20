import Link from "next/link";
import { Tractor, Bell, ChevronDown } from "lucide-react";

interface HeaderProps {
  showLanguageToggle?: boolean;
  showLocationSelector?: boolean;
  showNotificationBell?: boolean;
  showLocation?: boolean; // For backward compatibility
  backHref?: string;
  title?: string;
}

export default function Header({
  showLanguageToggle = true,
  showLocationSelector = false,
  showNotificationBell = false,
  showLocation = false,
  backHref,
  title
}: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-6 z-50 bg-white/40 backdrop-blur-md border-b border-neutral-soft/20">
      {/* Logo or Back Button */}
      {backHref ? (
        <Link href={backHref} className="flex items-center gap-3 group shrink-0">
          <div className="text-primary-dark font-black text-lg hover:text-primary transition-colors flex items-center gap-2">
            <span className="text-2xl">←</span> {title || "Back"}
          </div>
        </Link>
      ) : (
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-[#00E31A] rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200 transition-transform group-hover:scale-110">
            <Tractor size={24} strokeWidth={2.5} />
          </div>
          <span className="font-black text-2xl text-[#1b3d1a] tracking-tight hidden md:block">
            Oyo Agri-Connect
          </span>
        </Link>
      )}

      {/* Location Selector */}
      {(showLocationSelector || showLocation) && (
        <div className="bg-neutral-soft/80 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-3 text-sm font-black text-primary-dark border border-white shadow-sm cursor-pointer hover:bg-neutral transition-all">
          <span className="text-[#00E31A]">📍</span>
          Oyo Central
          <ChevronDown size={16} className="text-gray-400" strokeWidth={3} />
        </div>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {showLanguageToggle && (
          <div className="bg-[#E8F5E9] rounded-full p-1.5 flex items-center gap-1 border border-white shadow-sm">
            <button className="bg-[#00E31A] text-white px-4 py-2 rounded-full text-xs font-black shadow-sm transition-all whitespace-nowrap">
              EN
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-full text-xs font-black hover:text-[#1b3d1a] transition-all whitespace-nowrap">
              YO
            </button>
          </div>
        )}

        {showNotificationBell && (
          <button className="w-11 h-11 bg-white border border-neutral-soft rounded-2xl flex items-center justify-center text-primary-dark shadow-sm hover:bg-neutral transition-all relative">
            <Bell size={20} strokeWidth={2.5} />
            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        )}
      </div>
    </nav>
  );
}