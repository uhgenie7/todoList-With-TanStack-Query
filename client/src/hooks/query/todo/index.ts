import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodoListAPI, getTodoByIdAPI, createTodoAPI, updateTodoAPI, deleteTodoAPI } from '@src/apis/todos';
import type { ITodoItem } from '@src/types/todoTypes';

interface IQueryParams {
  errorHandler: (message: string) => void;
}

interface IUseGetTodoByIdQueryParams extends IQueryParams {
  todoId: string;
}

interface IUseCreateTodoQueryParams extends IQueryParams {
  todo: ITodoItem;
}

interface IUseUpdateTodoQueryParams extends IUseCreateTodoQueryParams {
  todoId: string;
}

export const useGetTodoListQuery = ({ errorHandler }: IQueryParams) => {
  return useQuery(['todoList'], () => getTodoListAPI(errorHandler), {
    suspense: true,
    staleTime: 5000,
  });
};

export const useGetTodoByIdQuery = ({ todoId, errorHandler }: IUseGetTodoByIdQueryParams) => {
  return useQuery(['todo'], () => getTodoByIdAPI(todoId, errorHandler), {
    suspense: true,
    staleTime: 5000,
  });
};

export const useCreateTodoQuery = ({ todo, errorHandler }: IUseCreateTodoQueryParams) => {
  const queryClient = useQueryClient();
  return useMutation(() => createTodoAPI(todo, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        queryClient.invalidateQueries(['todoList']);
      }
    },
  });
};

export const useUpdateTodoQuery = ({ todoId, todo, errorHandler }: IUseUpdateTodoQueryParams) => {
  const queryClient = useQueryClient();
  return useMutation(() => updateTodoAPI(todoId, todo, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        queryClient.invalidateQueries(['todoList']);
      }
    },
  });
};

export const useDeleteTodoQuery = ({ todoId, errorHandler }: IUseGetTodoByIdQueryParams) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteTodoAPI(todoId, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        console.log(res);
        queryClient.invalidateQueries(['todo']);
      }
    },
  });
};
