interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    label?: string;
    statusLabel?: string;
}

export default function StepIndicator({
    currentStep,
    totalSteps,
    label,
    statusLabel,
}: StepIndicatorProps) {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className="mb-10 w-full">
            <div className="flex justify-between items-end mb-3">
                <p className="text-[#00E31A] text-[10px] font-black uppercase tracking-[0.2em]">
                    {label || `Step ${currentStep} of ${totalSteps}`}
                </p>
                {statusLabel && (
                    <p className="text-[#00E31A] text-[10px] font-black uppercase tracking-widest">
                        {statusLabel}
                    </p>
                )}
                {!statusLabel && (
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        {Math.round(percentage)}% Complete
                    </p>
                )}
            </div>
            <div className="w-full h-2 bg-[#E8F5E9] rounded-full overflow-hidden border border-white shadow-inner">
                <div
                    className="h-full bg-[#00E31A] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,227,26,0.3)]"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
