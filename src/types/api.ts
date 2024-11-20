export interface LoginDataType {
  email: string;
  password: string;
}

export interface SignUpDataType {}

export interface EmailResponse {
  data: Record<string, never>; // for empty object {}
  message: string;
}
