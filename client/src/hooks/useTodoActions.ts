import { instanceAuth } from '@src/apis';

export const useTodoActions = () => {
  const handleGetTodoList = async () => {
    try {
      const response = await instanceAuth.get('/todos');
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleGetTodoById = async (id: string) => {
    try {
      const response = await instanceAuth.get(`/todos/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleCreateTodoItem = async (data: any) => {
    try {
      const response = await instanceAuth.post('/todos', data);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleUpdateTodoItem = async (id: string, data: any) => {
    try {
      const response = await instanceAuth.put(`/todos/${id}`, data);
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleDeleteTodoItem = async (id: string) => {
    try {
      const response = await instanceAuth.delete(`/todos/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    handleGetTodoList,
    handleGetTodoById,
    handleCreateTodoItem,
    handleUpdateTodoItem,
    handleDeleteTodoItem,
  };
};
