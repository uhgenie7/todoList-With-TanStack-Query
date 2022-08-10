import { instance } from '..';

export const signUpAPI = async (data: any) => {
  try {
    const response = await instance.post('/users/create', data);
    localStorage.setItem('token', response.token);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const loginAPI = async (data: any) => {
  try {
    const response = await instance.post('/users/login', data);
    console.log(response);
    localStorage.setItem('token', response.token);
    return response;
  } catch (error) {
    return error;
  }
};
