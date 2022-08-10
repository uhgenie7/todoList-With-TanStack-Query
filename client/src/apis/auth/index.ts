import { instance } from '..';
import showToast from '@src/libs/common';
const toast = showToast();

export const signUpAPI = async (data: any) => {
  try {
    const response = await instance.post('/users/create', data);
    if (response.status === 200) {
      toast.success(response.data.message);
    }

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginAPI = async (data: any) => {
  try {
    const response = await instance.post('/users/login', data);
    if (response.status === 200) {
      toast.success(response.data.message);
      localStorage.setItem('token', response.data.token);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
