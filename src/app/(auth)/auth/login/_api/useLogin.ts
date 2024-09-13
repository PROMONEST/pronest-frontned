import axios from "@/utils/axios";
import { useAuth } from "@/hooks/useAuth";
import { LoginProps } from "@/types/auth";

/**
 * ログイン機能を提供します。
 * @param setErrors - エラーを設定する関数。
 * @param setStatus - ステータスを設定する関数。
 * @param props - ログインに必要なプロパティ。
 */
export const useLogin = () => {
  const { csrf, mutate } = useAuth();

  const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
    await csrf();
    setErrors({});
    setStatus(null);

    axios
      .post("/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    login,
  };
};
