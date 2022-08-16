import type { IErrorHandler } from '@src/types/error';

export interface IUserInfo {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
}

export interface ErrorResponse {
  details: string;
}

export interface IFormProps {
  buttonValue: string;
  useQuery: any;
}

export interface IUserQueryParams extends IErrorHandler {
  userInfo: IUserInfo;
}
