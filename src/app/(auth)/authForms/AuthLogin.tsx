import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

interface AuthLoginProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  shouldRemember: boolean;
  setShouldRemember: (value: boolean) => void;
  errors: Record<string, string[]>;
  handleSubmit: (event: React.FormEvent) => void;
  subtitle?: React.ReactNode;
}

const AuthLogin: React.FC<AuthLoginProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  shouldRemember,
  setShouldRemember,
  errors,
  handleSubmit,
  subtitle,
}) => {
  return (
    <Stack component="form" onSubmit={handleSubmit}>
      <Box>
        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
        <CustomTextField
          id="email"
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
      </Box>
      <Box>
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
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
      </Box>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        my={2}
      >
        <FormControlLabel
          control={
            <CustomCheckbox
              checked={shouldRemember}
              onChange={(e) => setShouldRemember(e.target.checked)}
            />
          }
          label="Remember this Device"
        />
        <Typography
          component={Link}
          href="/auth/auth1/forgot-password"
          fontWeight="500"
          sx={{
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          Forgot Password?
        </Typography>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Sign In
        </Button>
      </Box>
      {subtitle}
    </Stack>
  );
};

export default AuthLogin;
