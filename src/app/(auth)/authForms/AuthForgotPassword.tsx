import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import Link from "next/link";

interface AuthForgotPasswordProps {
  email: string;
  setEmail: (value: string) => void;
  errors: Record<string, string[]>;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function AuthForgotPassword({
  email,
  setEmail,
  errors,
  handleSubmit,
}: AuthForgotPasswordProps) {
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
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          パスワードをリセット
        </Button>
        <Button
          color="primary"
          size="large"
          fullWidth
          component={Link}
          href="/auth/login"
        >
          ログイン画面へ
        </Button>
      </Stack>
    </form>
  );
}
