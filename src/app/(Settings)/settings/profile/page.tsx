"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import { useAuth } from "@/hooks/auth";

export default function ProfilePage() {
  const { user, error } = useAuth({ middleware: "auth" });
  if (!user && !error) return <div>Loading...</div>;

  return (
    <PageContainer title="プロフィール" description="プロフィール">
      <DashboardCard title="プロフィール">
        <Typography>プロフィールです</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
