"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import PageContainer from "@/app/components/container/PageContainer";
import { useAuth } from "@/hooks/auth";
import Alert from "@mui/material/Alert";
import ResetPasswordForm from "./_components/ResetPasswordForm/ResetPasswordForm";

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const params = useParams();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const token = params.token;
    const emailFromUrl = searchParams.get("email") || "";

    setEmail(emailFromUrl);
  }, [params, searchParams]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = params.token;
    if (!token) {
      setErrors({ token: ["リセットトークンが無効です。"] });
      return;
    }

    resetPassword({
      token,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    });
  };

  return (
    <PageContainer title="パスワード再設定" description="パスワード再設定画面">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <Typography
                color="textSecondary"
                textAlign="center"
                variant="subtitle2"
                fontWeight="400"
              >
                新しいパスワードを設定してください。
              </Typography>
              {status && <Alert severity="success">{status}</Alert>}
              {errors.token && (
                <Alert severity="error">{errors.token[0]}</Alert>
              )}
              <ResetPasswordForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                passwordConfirmation={passwordConfirmation}
                setPasswordConfirmation={setPasswordConfirmation}
                errors={errors}
                handleSubmit={handleSubmit}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
