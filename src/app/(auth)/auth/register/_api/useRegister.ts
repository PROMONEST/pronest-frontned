import axios from "@/utils/axios";
import { useAuth } from "@/hooks/useAuth";
import { RegisterProps } from "@/types/auth";

/**
 * 新規登録機能を提供します。
 * @param setErrors - エラーを設定する関数。
 * @param props - 登録用のプロパティ。
 */
export const useRegister = () => {
  const { csrf, mutate } = useAuth();

  const register = async ({ setErrors, ...props }: RegisterProps) => {
    await csrf();
    setErrors({});

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    register,
  };
};
