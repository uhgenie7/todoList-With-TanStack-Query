import { UseMutationOptions } from '@tanstack/react-query';
import { IErrorHandler } from './error';

export interface ITodoItem {
  title: string;
  content: string;
}

export interface ITodoData extends ITodoItem {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetTodoByIdQueryParams extends IErrorHandler {
  todoId: string;
}

export interface ICreateTodoQuery extends IErrorHandler {
  options?: UseMutationOptions<{ data: ITodoItem }, Error, ITodoItem>;
  todo: ITodoItem;
}

export interface IUpdateTodoQuery extends IErrorHandler {
  options?: UseMutationOptions<{ data: ITodoItem }, Error, ITodoItem>;
  todoId: string;
  todo: ITodoItem;
}

export interface IDeleteTodoQuery extends IErrorHandler {
  options?: UseMutationOptions<{ data: ITodoItem }, Error, ITodoItem>;
  todoId: string;
}
