import axios, { AxiosError, AxiosResponse } from 'axios';
import showToast from '@src/libs/common';

interface IRequestError {
  details: string;
}

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  validateStatus: function (status) {
    return status < 500;
  },
});

const responseError = (res: AxiosResponse) => {
  const toast = showToast();
  const code = res.status;
  const message = res.data.details;
  switch (code) {
    case 400:
      return toast.error(message);
    case 409:
      return toast.error(message);
    default:
      return res;
  }
};

instance.interceptors.response.use(responseError, (error: AxiosError<IRequestError>) => {
  return Promise.reject(error.response);
});
