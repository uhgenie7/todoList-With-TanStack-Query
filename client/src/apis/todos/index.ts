import { instanceAuth } from '..';

export const getTodoListAPI = async () => {
  const response = await instanceAuth.get('/todos');
  try {
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getTodoByIdAPI = async (id: string) => {
  try {
    const response = await instanceAuth.get(`/todos/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const createTodoAPI = async (data: any) => {
  const response = await instanceAuth.post('/todos', data);
  try {
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateTodoAPI = async (id: string, data: any) => {
  const response = await instanceAuth.put(`/todos/${id}`, data);
  try {
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteTodoAPI = async (id: string) => {
  const response = await instanceAuth.delete(`/todos/${id}`);
  try {
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
