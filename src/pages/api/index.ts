import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response);
  },
);
