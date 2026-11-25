import { StepLine } from "./StepLine";
import { StepIndicator } from "./StepIndicator";
import { STEPS } from "@/components/constants/steps";
import { icons } from "lucide-react";

type StepperProps = {
  step: number;
};

export const Stepper = ({ step }: StepperProps) => {
  return (
    <div className="relative w-113 h-10">
      <div className="absolute top-3.5 flex inset-x-0 h-0.5 bg-[#34253F] w-full">
        <StepLine filled={step > 1} />
        <StepLine filled={step > 2} />
      </div>

      <div className=" absolute inset-x-0 flex items-center justify-between">
        {STEPS.map(({ Icon, label }, index) => (
          <StepIndicator key={index} Icon={Icon} label={label} number={index + 1} step={step} />
        ))}
      </div>
    </div>
  );
};
