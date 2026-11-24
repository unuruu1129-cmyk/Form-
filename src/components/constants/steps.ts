import { User, Lock, Camera } from "lucide-react";
import { FieldPath } from "react-hook-form";

export const STEPS = [
  { label: "Personal info", Icon: User },
  { label: "Security", Icon: Lock },
  { label: "Profile", Icon: Camera },
] as const;
