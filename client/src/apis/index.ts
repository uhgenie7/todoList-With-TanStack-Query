import axios, { AxiosError, AxiosResponse, AxiosInstance } from 'axios';
import { IResponse } from '@src/types/response';
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

const onResponseError = (error: AxiosError<IResponse>): Promise<AxiosError> => {
  const code = error.code;
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
