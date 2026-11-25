import { cn } from "cn";
import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

type StepIndicatorProps = {
  label: string;
  step: number;
  number: number;
  Icon: LucideIcon;
};

export const StepIndicator = ({ Icon, label, number, step }: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center first:items-start last:items-end text-[#FAF5FF]">
      <span className={cn("size-8 rounded-full flex justify-center items-center ", step >= number ? "bg-[#BE94FD] border border-[#007A55] text-[#261432]" : "bg-black border")}>
        {step > number ? <Check className="size-3" strokeWidth={3} /> : number}
      </span>
      <span className="flex flex-row gap-x-1.5">
        <Icon size={16} />
        <span>{label}</span>
      </span>
    </div>
  );
};
