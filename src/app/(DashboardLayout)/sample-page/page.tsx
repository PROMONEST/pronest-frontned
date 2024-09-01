"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import { useAuth } from "@/hooks/auth";

export default function SamplePage() {
  const { user, error } = useAuth({ middleware: "auth" });
  if (!user && !error) return <div>Loading...</div>;

  return (
    <PageContainer title="サンプルページ" description="サンプルページ">
      <DashboardCard title="サンプルページ">
        <Typography>サンプルページです</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
