import { instanceAuth } from '..';
import showToast from '@src/libs/common';
const toast = showToast();

export const getTodosAPI = async () => {
  try {
    const response = await instanceAuth.get('/todos');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTodoByIdAPI = async (id: string) => {
  try {
    const response = await instanceAuth.get(`/todos/${id}`);
    if (response.status === 200) {
      toast.success(response.data.message);
    }

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createTodoAPI = async (data: any) => {
  try {
    const response = await instanceAuth.post('/todos', data);
    if (response.status === 200) {
      toast.success('추가되었습니다.');
    }

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoAPI = async (id: string, data: any) => {
  try {
    const response = await instanceAuth.put(`/todos/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data.message);
    }

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoAPI = async (id: string) => {
  try {
    const response = await instanceAuth.delete(`/todos/${id}`);
    if (response.status === 200) {
      toast.success(response.data.message);
    }

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
