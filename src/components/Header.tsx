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
      <div className="flex items-center gap-4 shrink-0 overflow-hidden max-w-[30%]">
        {backHref ? (
          <Link href={backHref} className="flex items-center gap-3 group">
            <span className="text-2xl text-primary-dark group-hover:text-primary transition-colors font-bold">←</span>
            <span className="font-black text-xl text-primary-dark tracking-tight truncate hidden sm:block">
              {title || "Back"}
            </span>
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <Tractor size={24} strokeWidth={2.5} />
            </div>
            <span className="font-black text-2xl text-primary-dark tracking-tight hidden lg:block">
              Oyo Agri-Connect
            </span>
          </Link>
        )}
      </div>

      {/* Location Selector (Centered) */}
      {(showLocationSelector || showLocation) && (
        <div className="absolute left-1/2 -translate-x-1/2 bg-neutral-soft/30 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-3 text-sm font-black text-primary-dark border border-white shadow-sm cursor-pointer hover:bg-neutral transition-all whitespace-nowrap">
          <span className="text-primary hidden md:block">📍</span>
          Oyo Central
          <ChevronDown size={16} className="text-gray-400" strokeWidth={3} />
        </div>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-6 shrink-0">
        {showLanguageToggle && (
          <div className="bg-primary/5 rounded-full p-1.5 flex items-center gap-1 border border-white shadow-sm">
            <button className="bg-primary text-white px-4 py-2 rounded-full text-[10px] font-black shadow-sm transition-all whitespace-nowrap">
              EN
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-full text-[10px] font-black hover:text-primary-dark transition-all whitespace-nowrap">
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