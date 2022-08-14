import { UseMutationResult } from '@tanstack/react-query';
import { IUserAuthResponse } from '@src/types/response';
import { AxiosError } from 'axios';

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
  useQuery: ({ email, password }: IUserInfo) => UseMutationResult<{ data: IUserAuthResponse }, AxiosError, IUserInfo>;
}
