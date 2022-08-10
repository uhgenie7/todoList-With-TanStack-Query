import { instanceAuth } from '..';

export const getTodosAPI = async () => {
  try {
    const response = await instanceAuth.get('/todos');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTodoByIdAPI = async (id: string) => {
  try {
    const response = await instanceAuth.get(`/todos/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createTodoAPI = async (data: any) => {
  try {
    const response = await instanceAuth.post('/todos', data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoAPI = async (id: string, data: any) => {
  try {
    const response = await instanceAuth.put(`/todos/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoAPI = async (id: string) => {
  try {
    const response = await instanceAuth.delete(`/todos/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
