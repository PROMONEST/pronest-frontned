"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";

export default function SamplePage() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard page">
      <DashboardCard title="Dashboard">
        <Typography>This is a Dashboard page</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
