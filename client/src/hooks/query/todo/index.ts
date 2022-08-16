import { useMutation, useQuery, useQueryClient, UseMutationOptions } from '@tanstack/react-query';
import { getTodoListAPI, getTodoByIdAPI, createTodoAPI, updateTodoAPI, deleteTodoAPI } from '@src/apis/todos';
import type { IErrorHandler } from '@src/types/error';
import type {
  ITodoItem,
  ICreateTodoQuery,
  IUpdateTodoQuery,
  IDeleteTodoQuery,
  IGetTodoByIdQueryParams,
} from '@src/types/todoTypes';

export const useGetTodoListQuery = ({ errorHandler }: IErrorHandler) => {
  return useQuery(['todoList'], () => getTodoListAPI(errorHandler));
};

export const useGetTodoByIdQuery = ({ todoId, errorHandler }: IGetTodoByIdQueryParams) => {
  return useQuery(['todo'], () => getTodoByIdAPI(todoId, errorHandler));
};

export const useCreateTodoQuery = ({ options, todo, errorHandler }: ICreateTodoQuery) => {
  return useMutation<any, Error, ITodoItem>(() => createTodoAPI(todo, errorHandler), options);
};

export const useUpdateTodoQuery = ({ options, todoId, todo, errorHandler }: IUpdateTodoQuery) => {
  return useMutation<any, Error, ITodoItem>(() => updateTodoAPI(todoId, todo, errorHandler), options);
};

export const useDeleteTodoQuery = ({ options, todoId, errorHandler }: IDeleteTodoQuery) => {
  return useMutation(() => deleteTodoAPI(todoId, errorHandler), options);
};
