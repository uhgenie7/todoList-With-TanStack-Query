import { instanceAuth } from '..';
import { ITodoListResponse } from '@src/types/response';
import { ITodoItem } from '@src/types/todoTypes';
import CustomError from '@src/utils/customError';

export const getTodoListAPI = async (errorHandler: (message: string) => void) => {
  try {
    const { data } = await instanceAuth.get<ITodoListResponse>('/todos');
    return data.data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};

export const getTodoByIdAPI = async (id: string, errorHandler: (message: string) => void) => {
  try {
    const { data } = await instanceAuth.get(`/todos/${id}`);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};

export const createTodoAPI = async (todoItem: ITodoItem, errorHandler: (message: string) => void) => {
  try {
    const { data } = await instanceAuth.post('/todos', todoItem);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};

export const updateTodoAPI = async (id: string, todoItem: ITodoItem, errorHandler: (message: string) => void) => {
  try {
    const { data } = await instanceAuth.put(`/todos/${id}`, todoItem);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};

export const deleteTodoAPI = async (id: string, errorHandler: (message: string) => void) => {
  try {
    const { data } = await instanceAuth.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    if (typeof error === 'string') {
      throw new CustomError(error, errorHandler);
    } else {
      throw error;
    }
  }
};
