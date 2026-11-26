import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
type RegisterActionsProps = {
  step: FormStep;
  onBack: () => void;
};
export const RegisterActions = ({ step, onBack }: RegisterActionsProps) => {
  return (
    <div className="flex w-fit gap-3">
      {step > 0 && (
        <Button type="button" onClick={onBack} className="h-11 w-21.25 border border-[#90A1B9] ">
          Back
        </Button>
      )}
      <Button type="submit" className="h-11 w-full bg-[#BE94FD] text-[#261432]">
        Continue <ArrowRight />
      </Button>
    </div>
  );
};
