import useSWR from "swr";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "@/utils/axios";

// 型定義
interface UseAuthOptions {
  middleware?: string;
  redirectIfAuthenticated?: string;
}

interface RegisterProps {
  setErrors: (errors: Record<string, string[]>) => void;
  [key: string]: any;
}

interface LoginProps {
  setErrors: (errors: Record<string, string[]>) => void;
  setStatus: (status: string | null) => void;
  [key: string]: any;
}

interface ForgotPasswordProps {
  setErrors: (errors: Record<string, string[]>) => void;
  setStatus: (status: string | null) => void;
  email: string;
}

interface ResetPasswordProps {
  setErrors: (errors: Record<string, string[]>) => void;
  setStatus: (status: string | null) => void;
  [key: string]: any;
}

interface ResendEmailVerificationProps {
  setStatus: (status: string | null) => void;
}

/**
 * 認証関連のフックを提供します。
 * @param options - ミドルウェアとリダイレクト先を指定するオプション。
 * @returns 認証関連の関数とユーザーデータを含むオブジェクト。
 */
export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: UseAuthOptions = {}) => {
  const router = useRouter();
  const params = useParams();

  // ユーザーデータを取得
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );

  /**
   * CSRFトークンを取得します。
   */
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  /**
   * 新規登録を行います。
   * @param setErrors - エラーを設定する関数。
   * @param props - 登録に必要なその他のプロパティ。
   */
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

  /**
   * ログインを行います。
   * @param setErrors - エラーを設定する関数。
   * @param setStatus - ステータスを設定する関数。
   * @param props - ログインに必要なその他のプロパティ。
   */
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

  /**
   * パスワードリセットのメールを送信します。
   * @param setErrors - エラーを設定する関数。
   * @param setStatus - ステータスを設定する関数。
   * @param email - ユーザーのメールアドレス。
   */
  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: ForgotPasswordProps) => {
    await csrf();

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

  /**
   * パスワードをリセットします。
   * @param setErrors - エラーを設定する関数。
   * @param setStatus - ステータスを設定する関数。
   * @param props - リセットに必要なその他のプロパティ。
   */
  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: ResetPasswordProps) => {
    await csrf();

    setErrors({});
    setStatus(null);

    if (params.token) {
      axios
        .post("/reset-password", { token: params.token as string, ...props })
        .then((response) =>
          router.push("/login?reset=" + btoa(response.data.status))
        )
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    } else {
      setErrors({ token: ["Token is missing"] });
    }
  };

  /**
   * 認証メールを再送信します。
   * @param setStatus - ステータスを設定する関数。
   */
  const resendEmailVerification = ({
    setStatus,
  }: ResendEmailVerificationProps) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
      });
  };

  /**
   * ログアウトを行います。
   */
  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated!); // 非nullアサーションを使用

    if (window.location.pathname === "/verify-email" && user?.email_verified_at)
      router.push(redirectIfAuthenticated!); // 非nullアサーションを使用

    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
