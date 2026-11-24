import { cn } from "cn";

type StepLineProps = {
  filled: boolean;
};
export const StepLine = ({ filled }: StepLineProps) => {
  return <div className={cn("flex-1 origin-left bg-pink-400 h-1 transition duration-300", filled ? "scale-x-100" : "scale-0")} />;
};
