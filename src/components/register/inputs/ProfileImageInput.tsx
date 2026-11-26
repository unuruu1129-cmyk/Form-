import React from "react";
import { Field, FieldError, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";

export const ProfileImageInput = ({ control, name }: RegistrationFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <input type="file" name="" id="" />
      <FieldError>Choose another username.</FieldError>
    </Field>
  );
};
