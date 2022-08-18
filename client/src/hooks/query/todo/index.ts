import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodoListAPI, getTodoByIdAPI, createTodoAPI, updateTodoAPI, deleteTodoAPI } from '@src/apis/todos';
import type { IErrorHandler } from '@src/types/error';
import type {
  ICreateTodoQuery,
  IUpdateTodoQuery,
  IDeleteTodoQuery,
  IGetTodoByIdQueryParams,
} from '@src/types/todoTypes';
import { QueryTodoKeys } from '@src/constants/QueryTodoKeys';
import customToast from '@src/utils/customToast';
const toast = customToast();

export const useGetTodoListQuery = ({ errorHandler }: IErrorHandler) => {
  return useQuery(QueryTodoKeys.todoList, () => getTodoListAPI(errorHandler));
};

export const useGetTodoByIdQuery = ({ todoId, errorHandler }: IGetTodoByIdQueryParams) => {
  return useQuery(QueryTodoKeys.todo, () => getTodoByIdAPI(todoId, errorHandler));
};

export const useCreateTodoQuery = ({ todo, errorHandler }: ICreateTodoQuery) => {
  const queryClient = useQueryClient();
  return useMutation(() => createTodoAPI(todo, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        queryClient.invalidateQueries(QueryTodoKeys.todoList);
        toast.success('등록 성공');
      }
    },
  });
};

export const useUpdateTodoQuery = ({ todoId, todo, errorHandler }: IUpdateTodoQuery) => {
  const queryClient = useQueryClient();
  return useMutation(() => updateTodoAPI(todoId, todo, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        queryClient.invalidateQueries(QueryTodoKeys.todoList);
        toast.success('수정 성공');
      }
    },
  });
};

export const useDeleteTodoQuery = ({ todoId, errorHandler }: IDeleteTodoQuery) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteTodoAPI(todoId, errorHandler), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryTodoKeys.todoList);
      toast.success('삭제 성공');
    },
  });
};
