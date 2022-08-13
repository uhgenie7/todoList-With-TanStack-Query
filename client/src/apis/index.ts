import axios, { AxiosError, AxiosResponse, AxiosInstance } from 'axios';
import { IErrorResponse } from '@src/types/response';
import { ISSERVER } from '@src/constants';

export const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

export const instanceAuth: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: !ISSERVER && `Bearer ${localStorage.getItem('USER_TOKEN')}`,
  },
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log(response.data);
  return response.data;
};

const onResponseError = (error: AxiosError<IErrorResponse>): Promise<AxiosError> => {
  console.log(error);
  const code = error.code;
  const message = error.response?.data.details;

  // if (message === 'todo를 찾는 도중 문제가 생겼습니다') {
  //   throw (window.location.href = '/');
  // }

  switch (code) {
    case 'ERR_BAD_REQUEST':
      throw error.response?.data.details;
  }

  return Promise.reject(error.response);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

setupInterceptorsTo(instance);
setupInterceptorsTo(instanceAuth);
