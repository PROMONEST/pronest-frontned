export interface RegisterProps {
  setErrors: (errors: Record<string, string[]>) => void;
  [key: string]: any;
}

export interface LoginProps {
  setErrors: (errors: Record<string, string[]>) => void;
  setStatus: (status: string | null) => void;
  [key: string]: any;
}

export interface ForgotPasswordProps {
  setErrors: (errors: Record<string, string[]>) => void;
  setStatus: (status: string | null) => void;
  email: string;
}

export interface ResetPasswordProps {
  setErrors: (errors: Record<string, string[]>) => void;
  setStatus: (status: string | null) => void;
  [key: string]: any;
}

export interface ResendEmailVerificationProps {
  setStatus: (status: string | null) => void;
}
