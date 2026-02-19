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
            <div className="flex justify-between items-end mb-2">
                <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-widest">
                    {label || `Step ${currentStep} of ${totalSteps}`}
                </p>
                {statusLabel && (
                    <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-widest">
                        {statusLabel}
                    </p>
                )}
                {!statusLabel && (
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        {Math.round(percentage)}% Complete
                    </p>
                )}
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#4CAF50] transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
