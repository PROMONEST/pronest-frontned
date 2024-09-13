import axios from "@/utils/axios";
import { ForgotPasswordProps } from "@/types/auth";

/**
 * パスワードリセットリンク送信機能を提供します。
 * @param setErrors - エラーを設定する関数。
 * @param setStatus - ステータスを設定する関数。
 * @param email - ユーザーのメールアドレス。
 */
export const useForgotPassword = () => {
  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: ForgotPasswordProps) => {
    setErrors({});
    setStatus(null);

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    forgotPassword,
  };
};
