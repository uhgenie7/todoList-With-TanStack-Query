import { instanceAuth } from '..';
import { ITodoListResponse, ITodoItemResponse } from '@src/types/response';
import { ITodoItem } from '@src/types/todoTypes';
import { AxiosResponse } from 'axios';

export const getTodoListAPI = async (): Promise<AxiosResponse<ITodoListResponse>> => {
  const response = await instanceAuth.get<ITodoListResponse>('/todos');
  try {
    console.log(response);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const getTodoByIdAPI = async (id: string): Promise<AxiosResponse<ITodoItemResponse>> => {
  try {
    const response = await instanceAuth.get(`/todos/${id}`);
    console.log(response);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const createTodoAPI = async (data: ITodoItem): Promise<AxiosResponse<ITodoItemResponse>> => {
  const response = await instanceAuth.post('/todos', data);
  try {
    console.log(response);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const updateTodoAPI = async (id: string, data: ITodoItem): Promise<AxiosResponse<ITodoItemResponse>> => {
  const response = await instanceAuth.put(`/todos/${id}`, data);
  try {
    return response;
  } catch (error: any) {
    return error;
  }
};

export const deleteTodoAPI = async (id: string): Promise<AxiosResponse> => {
  const response = await instanceAuth.delete(`/todos/${id}`);
  try {
    console.log(response);
    return response;
  } catch (error: any) {
    return error;
  }
};
