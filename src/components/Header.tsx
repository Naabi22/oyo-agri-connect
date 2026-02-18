export default function Header() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-6 z-50 bg-white/80 backdrop-blur-sm">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">🚜</span>
        </div>
        <span className="font-bold text-[#1b3d1a] text-lg">Oyo Agri-Connect</span>
      </div>

      {/* Language Toggle */}
      <div className="flex items-center bg-[#E8F5E9] rounded-full p-1 border border-gray-100">
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#4CAF50] text-white">
          English
        </button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold text-gray-500">
          Yoruba
        </button>
      </div>
    </nav>
  );
}