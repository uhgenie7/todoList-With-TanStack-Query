import { instance } from '..';

export const signUpAPI = async (data: any) => {
  const response = await instance.post('/users/create', data);
  try {
    localStorage.setItem('USER_TOKEN', response.token);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const loginAPI = async (data: any) => {
  const response = await instance.post('/users/login', data);
  try {
    console.log(response);
    localStorage.setItem('USER_TOKEN', response.token);
    return response;
  } catch (error) {
    return error;
  }
};
