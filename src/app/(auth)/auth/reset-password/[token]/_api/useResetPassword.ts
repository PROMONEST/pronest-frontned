import axios from "@/utils/axios";
import { useRouter, useParams } from "next/navigation";
import { ResetPasswordProps } from "@/types/auth";

/**
 * パスワードリセット機能を提供します。
 * @param setErrors - エラーを設定する関数。
 * @param setStatus - ステータスを設定する関数。
 * @param props - リセットに必要なその他のプロパティ。
 */
export const useResetPassword = () => {
  const router = useRouter();
  const params = useParams();

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: ResetPasswordProps) => {
    setErrors({});
    setStatus(null);

    if (params.token) {
      axios
        .post("/reset-password", { token: params.token as string, ...props })
        .then((response) =>
          router.push("/auth/login?reset=" + btoa(response.data.status))
        )
        .catch((error) => {
          if (error.response.status !== 422) throw error;
          setErrors(error.response.data.errors);
        });
    } else {
      setErrors({ token: ["Token is missing"] });
    }
  };

  return {
    resetPassword,
  };
};
