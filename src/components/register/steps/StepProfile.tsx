import { DateOfBirthInput, PhoneNumberInput, ProfileImageInput } from "../inputs";

export const StepProfile = ({ form }: StepComponentProps) => {
  return (
    <div className="space-y-5">
      <PhoneNumberInput control={form.control} name="phoneNumber" />
      <DateOfBirthInput control={form.control} name="dateOfBirth" />
      <ProfileImageInput control={form.control} name="profileImage" />
    </div>
  );
};
