"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import { useAuth } from "@/hooks/auth";

export default function SamplePage() {
  // 認証チェックを実行し、ユーザーがログインしていない場合はログインページにリダイレクト
  const { user, error } = useAuth({ middleware: "auth" });

  // 認証状態が確認できるまで、ロード中の状態を表示する（スピナーなど）
  if (!user && !error) return <div>Loading...</div>;

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>This is a sample2 page</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
