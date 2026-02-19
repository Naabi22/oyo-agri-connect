import Link from "next/link";

interface HeaderProps {
  showLocation?: boolean;
  backHref?: string;
  title?: string;
}

export default function Header({ showLocation, backHref, title }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50 border-b border-gray-100">
      <div className="flex items-center gap-4">
        {backHref && (
          <Link href={backHref} className="text-gray-500 font-bold text-sm hover:text-[#4CAF50] transition-colors">
            ← {title || "Back"}
          </Link>
        )}
        {!backHref && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center text-white text-xs font-bold">
              🚜
            </div>
            <span className="font-bold text-[#1b3d1a]">Oyo Agri-Connect</span>
          </div>
        )}
      </div>

      {showLocation && (
        <div className="bg-[#F1F3F1] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-[#1b3d1a]">
          <span className="text-[#4CAF50]">📍</span> Oyo Central
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-[#E8F5E9] rounded-full p-1 text-[10px] font-bold border border-gray-100">
          <button className="bg-[#4CAF50] text-white px-3 py-1 rounded-full">EN</button>
          <button className="text-gray-400 px-3 py-1">YO</button>
        </div>
        {!backHref && (
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
            🔔
          </div>
        )}
      </div>
    </nav>
  );
}