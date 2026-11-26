import React from "react";
import { Field, FieldError, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";

export const DateOfBirthInput = ({ control, name }: RegistrationFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
  );
};
