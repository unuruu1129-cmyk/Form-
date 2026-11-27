"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { Stepper } from "../stepper/Stepper";
import { RegisterActions } from "./RegisterActions";
import { RegisterStep } from "../steps/RegisterStep";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ImportIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { registrationSchema } from "@/schema/register.schema";
import { defaults } from "@/components/constants";

export const RegisterForm = () => {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: defaults,
  });

  const [step, setStep] = useState<FormStep | 3>(0);

  const submit = (values: RegisterValues) => {
    setStep(3);
  };

  const startOver = () => {
    setStep(0);
  };

  const handleBack = () => {
    const previousStep = step === 2 ? 1 : 0;
    setStep(previousStep);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 2) return form.handleSubmit(submit)(event);

    const nextStep = step === 0 ? 1 : 2;
    setStep(nextStep);
  };

  return (
    <Card className="relative w-113 gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6">
        <Stepper step={step + 1} />
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <RegisterStep step={step} form={form} />
          {step === 3 ? (
            <Button type="button" onClick={startOver} className="h-11 w-full bg-[#BE94FD] text-[#261432] ">
              Start over <ArrowRight size={16} />
            </Button>
          ) : (
            <RegisterActions step={step} onBack={handleBack} />
          )}
        </form>
      </CardContent>
    </Card>
  );
};
