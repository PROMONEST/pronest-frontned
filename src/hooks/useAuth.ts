import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/hooks/fetcher";
import axios from "@/utils/axios";

// 型定義
interface UseAuthOptions {
  middleware?: string;
  redirectIfAuthenticated?: string;
}

/**
 * 認証関連の共通フック。
 * @param options - ミドルウェアとリダイレクトオプション。
 * @returns 認証関連のユーザー情報や関数。
 */
export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: UseAuthOptions = {}) => {
  const router = useRouter();
  const params = useParams();

  const { data: user, error, mutate } = useSWR("/user", fetcher);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated!);
    }

    if (
      window.location.pathname === "/verify-email" &&
      user?.email_verified_at
    ) {
      router.push(redirectIfAuthenticated!);
    }

    if (middleware === "auth" && error) logout();
  }, [user, error]);

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate());
    }
    window.location.pathname = "/auth/login";
  };

  return {
    user,
    error,
    csrf,
    mutate,
    logout,
  };
};
