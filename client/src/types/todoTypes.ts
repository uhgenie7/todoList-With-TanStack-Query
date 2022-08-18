import { IErrorHandler } from './error';

export interface ITodoId {
  todoId: string;
}

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
  todo: ITodoItem;
}

export interface IUpdateTodoQuery extends IErrorHandler {
  todoId: string;
  todo: ITodoItem;
}

export interface IDeleteTodoQuery extends IErrorHandler {
  todoId: string;
}
