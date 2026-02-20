"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastCount = 0;
const generateToastId = () => {
    toastCount += 1;
    return `toast-${Date.now()}-${toastCount}`;
};

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: ToastType = "success") => {
        const id = generateToastId();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), 5000);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-24 right-6 z-[9999] flex flex-col gap-4 max-w-md w-full sm:w-auto">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`flex items-center gap-4 p-4 rounded-2xl shadow-2xl border backdrop-blur-md animate-in slide-in-from-right fade-in duration-300 ${toast.type === "success"
                            ? "bg-[#1D4D1A]/90 border-[#1D4D1A] text-white"
                            : toast.type === "error"
                                ? "bg-red-500/90 border-red-600 text-white"
                                : "bg-blue-500/90 border-blue-600 text-white"
                            }`}
                    >
                        <div className="shrink-0">
                            {toast.type === "success" && <CheckCircle size={24} />}
                            {toast.type === "error" && <AlertCircle size={24} />}
                            {toast.type === "info" && <Info size={24} />}
                        </div>
                        <p className="font-bold text-sm flex-1">{toast.message}</p>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
