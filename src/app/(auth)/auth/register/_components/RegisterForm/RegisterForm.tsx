import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Link from "next/link";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import Alert from "@mui/material/Alert";

interface RegisterFormProps {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
  onSubmit: (data: { name: string; email: string; password: string }) => void;
  errors: Record<string, string[]>;
  successMessage: string | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  title,
  subtitle,
  subtext,
  onSubmit,
  errors,
  successMessage,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      {successMessage && <Alert severity="success">{successMessage}</Alert>}

      <Stack mb={3}>
        <CustomFormLabel htmlFor="name">名前</CustomFormLabel>
        <CustomTextField
          id="name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setName(e.target.value)
          }
          error={!!errors.name}
          helperText={errors.name?.[0]}
        />
        <CustomFormLabel htmlFor="email">メールアドレス</CustomFormLabel>
        <CustomTextField
          id="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          error={!!errors.email}
          helperText={errors.email?.[0]}
        />
        <CustomFormLabel htmlFor="password">パスワード</CustomFormLabel>
        <CustomTextField
          id="password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
          error={!!errors.password}
          helperText={errors.password?.[0]}
        />
      </Stack>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        fullWidth
      >
        新規登録
      </Button>

      {subtitle}
    </Box>
  );
};

export default RegisterForm;
