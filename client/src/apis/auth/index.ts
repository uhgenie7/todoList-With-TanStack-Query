import { instance } from '..';
import type { IUserInfo } from '@src/types/userAuthTypes';
import type { IUserAuthResponse } from '@src/types/response';
import CustomError from '@src/utils/customError';

export const loginAPI = async (userInfo: IUserInfo, errorHandler: (message: string) => void) => {
  try {
    const { data } = await instance.post<IUserAuthResponse>('/users/login', userInfo);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};

export const signUpAPI = async (userInfo: IUserInfo, errorHandler: (message: string) => void) => {
  try {
    const { data } = await instance.post<IUserAuthResponse>('/users/create', userInfo);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};
