import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodoListAPI, getTodoByIdAPI, createTodoAPI, updateTodoAPI, deleteTodoAPI } from '@src/apis/todos';
import type { IErrorHandler } from '@src/types/error';
import type {
  ICreateTodoQuery,
  IUpdateTodoQuery,
  IDeleteTodoQuery,
  IGetTodoByIdQueryParams,
} from '@src/types/todoTypes';
import { QueryTodoKeys } from '@src/constants/QueryTodoKeys';

export const useGetTodoListQuery = ({ errorHandler }: IErrorHandler) => {
  return useQuery(QueryTodoKeys.todoList, () => getTodoListAPI(errorHandler));
};

export const useGetTodoByIdQuery = ({ todoId, errorHandler }: IGetTodoByIdQueryParams) => {
  return useQuery(QueryTodoKeys.todo, () => getTodoByIdAPI(todoId, errorHandler));
};

export const useCreateTodoQuery = ({ options, todo, errorHandler }: ICreateTodoQuery) => {
  return useMutation(() => createTodoAPI(todo, errorHandler), options);
};

export const useUpdateTodoQuery = ({ options, todoId, todo, errorHandler }: IUpdateTodoQuery) => {
  return useMutation(() => updateTodoAPI(todoId, todo, errorHandler), options);
};

export const useDeleteTodoQuery = ({ options, todoId, errorHandler }: IDeleteTodoQuery) => {
  return useMutation(() => deleteTodoAPI(todoId, errorHandler), options);
};
