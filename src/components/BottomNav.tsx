import Link from "next/link";
import { NavItem } from "../types";

interface BottomNavProps {
    activeItem?: NavItem;
}

export default function BottomNav({ activeItem }: BottomNavProps) {
    const items: { id: NavItem; icon: string; label?: string; href: string }[] = [
        { id: "home", icon: "🏠", label: "HOME", href: "/dashboard" },
        { id: "search", icon: "🔍", label: "SEARCH", href: "/search" },
        { id: "bookings", icon: "📄", label: "BOOKINGS", href: "/summary" },
        { id: "equipment", icon: "🚜", label: "EQUIPMENT", href: "/search" },
        { id: "profile", icon: "👤", label: "PROFILE", href: "/dashboard" },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-100 px-8 py-4 rounded-full shadow-2xl flex items-center gap-12 z-50">
            {items.map((item) => {
                const isActive = activeItem === item.id;
                return (
                    <Link key={item.id} href={item.href} className="flex flex-col items-center gap-1">
                        <span className={`text-xl ${isActive ? "text-[#4CAF50]" : "text-gray-300"}`}>
                            {item.icon}
                        </span>
                        {isActive && item.label && (
                            <span className="text-[10px] font-bold text-[#4CAF50]">{item.label}</span>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
