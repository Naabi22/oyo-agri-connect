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
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                    {label || `Step ${currentStep} of ${totalSteps}`}
                </p>
                {statusLabel && (
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest">
                        {statusLabel}
                    </p>
                )}
                {!statusLabel && (
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        {Math.round(percentage)}% Complete
                    </p>
                )}
            </div>
            <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden border border-white shadow-inner">
                <div
                    className="h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_10px_rgba(29,77,26,0.3)]"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
