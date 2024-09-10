"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import { useAuth } from "@/hooks/useAuth";

export default function DashBoard() {
  const { user, error } = useAuth({ middleware: "auth" });
  if (!user && !error) return <div>Loading...</div>;

  return (
    <PageContainer title="ダッシュボード" description="ダッシュボード">
      <DashboardCard title="ダッシュボード">
        <Typography>ダッシュボードです</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
