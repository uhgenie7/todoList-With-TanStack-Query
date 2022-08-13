import { instance } from '..';
import type { IUserInfo } from '@src/types/userAuthTypes';
import type { IUserAuthResponse } from '@src/types/response';
import { AxiosResponse } from 'axios';
import { USER_TOKEN } from '@src/constants';

export const signUpAPI = async (data: IUserInfo): Promise<AxiosResponse<IUserAuthResponse>> => {
  const response = await instance.post<IUserAuthResponse>('/users/create', data);
  try {
    const { token } = response;
    localStorage.setItem(USER_TOKEN, token);
    console.log(response);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const loginAPI = async (data: IUserInfo): Promise<AxiosResponse<IUserAuthResponse>> => {
  const response = await instance.post<IUserAuthResponse>('/users/login', data);
  try {
    const { token } = response;
    console.log(response);
    localStorage.setItem(USER_TOKEN, token);
    return response;
  } catch (error: any) {
    return error;
  }
};
