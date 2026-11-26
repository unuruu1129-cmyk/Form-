import { z } from "zod";
import type { RegisterValues } from "@/schemas";
import { UseFormReturn } from "react-hook-form";
import type { Control, FieldPath } from "react-hook-form";
import { registrationSchema } from "@/schema/register.schema";

declare global {
  type FormStep = 0 | 1 | 2;

  type RegisterValues = z.infer<typeof registrationSchema>;

  type UploadResult = { url: string };

  type StepComponentProps = { form: UseFormReturn<RegisterValues> };

  type RegistrationFieldProps = { control: Control<RegisterValues>; name: T };

  type ApiError = { error: string };

  type UploadedImageType = {
    file: File;
    result: UploadResult;
  };

  type RegistrationFieldProps<Name extends FieldPath<RegisterValues>> = { control: Control<RegisterValues>; name: Name };
}
