import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";

interface ResetPasswordFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  passwordConfirmation: string;
  setPasswordConfirmation: (value: string) => void;
  errors: Record<string, string[]>;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function ResetPasswordForm({
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  errors,
  handleSubmit,
}: ResetPasswordFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel htmlFor="reset-email">メールアドレス</CustomFormLabel>
        <CustomTextField
          id="reset-email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e: { target: { value: string } }) =>
            setEmail(e.target.value)
          }
          error={!!errors.email}
          helperText={errors.email?.[0]}
        />

        <CustomFormLabel htmlFor="password">新しいパスワード</CustomFormLabel>
        <CustomTextField
          id="password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e: { target: { value: string } }) =>
            setPassword(e.target.value)
          }
          error={!!errors.password}
          helperText={errors.password?.[0]}
        />

        <CustomFormLabel htmlFor="passwordConfirmation">
          パスワード確認
        </CustomFormLabel>
        <CustomTextField
          id="passwordConfirmation"
          type="password"
          variant="outlined"
          fullWidth
          value={passwordConfirmation}
          onChange={(e: { target: { value: string } }) =>
            setPasswordConfirmation(e.target.value)
          }
          error={!!errors.password_confirmation}
          helperText={errors.password_confirmation?.[0]}
        />

        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          パスワードをリセット
        </Button>
      </Stack>
    </form>
  );
}
