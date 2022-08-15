import { instance } from '..';
import type { IUserInfo } from '@src/types/userAuthTypes';
import type { IUserAuthResponse } from '@src/types/response';
import { Axios, AxiosResponse } from 'axios';
import { USER_TOKEN } from '@src/constants';
import useToast from '@src/hooks/useToast';

export const loginAPI = async (userInfo: IUserInfo) => {
  const toast = useToast();
  try {
    const { data } = await instance.post<IUserAuthResponse>('/users/login', userInfo);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      toast.error(error);
    } else {
      return error;
    }
  }
};

export const signUpAPI = async (userInfo: IUserInfo) => {
  const toast = useToast();
  try {
    const { data } = await instance.post<IUserAuthResponse>('/users/create', userInfo);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      toast.error(error);
    } else {
      return error;
    }
  }
};
