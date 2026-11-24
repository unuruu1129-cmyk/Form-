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
    <div className="flex flex-col items-center first:items-start last:items-end text-amber-50">
      <span className={cn("size-6 rounded-full ", step > number ? "bg-pink-500" : "bg-black")}>{step > number ? <Check /> : number}</span>
      <span className="flex flex-row gap-x-1.5">
        <Icon size={16} />
        <span>{label}</span>
      </span>
    </div>
  );
};
