import Link from "next/link";
import { NavItem } from "../types";
import { Home, Search, FileText, Briefcase, User, LucideIcon } from "lucide-react";

interface BottomNavProps {
    activeItem?: NavItem;
}

export default function BottomNav({ activeItem }: BottomNavProps) {
    const items: { id: NavItem; Icon: LucideIcon; label?: string; href: string }[] = [
        { id: "home", Icon: Home, label: "HOME", href: "/dashboard" },
        { id: "search", Icon: Search, label: "SEARCH", href: "/search" },
        { id: "bookings", Icon: FileText, label: "MY RENTALS", href: "/summary" },
        { id: "equipment", Icon: Briefcase, label: "MY EQUIPMENT", href: "/my-quipment" },
        { id: "profile", Icon: User, label: "PROFILE", href: "/profile" },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-100 px-8 py-4 rounded-full shadow-2xl flex items-center gap-12 z-50">
            {items.map((item) => {
                const isActive = activeItem === item.id;
                return (
                    <Link key={item.id} href={item.href} className="flex flex-col items-center gap-1 group">
                        <span className={`transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-gray-300 group-hover:text-gray-400"}`}>
                            <item.Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        </span>
                        {isActive && item.label && (
                            <span className="text-[10px] font-black text-primary tracking-widest">{item.label}</span>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
