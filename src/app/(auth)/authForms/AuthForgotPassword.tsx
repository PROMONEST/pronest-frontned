import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";

export default function AuthForgotPassword() {
  return (
    <>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel htmlFor="reset-email">メールアドレス</CustomFormLabel>
        <CustomTextField id="reset-email" variant="outlined" fullWidth />

        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/"
        >
          パスワードをリセット
        </Button>
        <Button
          color="primary"
          size="large"
          fullWidth
          component={Link}
          href="/auth/auth1/login"
        >
          ログイン画面へ
        </Button>
      </Stack>
    </>
  );
}
