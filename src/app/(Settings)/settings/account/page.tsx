"use client";

import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import { useAuth } from "@/hooks/auth";
import { Typography } from "@mui/material";

export default function AccountPage() {
  const { user, error } = useAuth({ middleware: "auth" });
  if (!user && !error) return <div>Loading...</div>;

  return (
    <PageContainer title="アカウント" description="アカウント">
      <DashboardCard title="アカウント">
        <Typography>アカウントです</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
