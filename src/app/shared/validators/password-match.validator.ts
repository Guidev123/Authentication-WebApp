import { FormGroup } from "@angular/forms";

export function passwordMatchValidator(formGroup: FormGroup): Record<string, boolean> | null {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;
  return password && confirmPassword && password !== confirmPassword
    ? { passwordsDoNotMatch: true }
    : null;
}
