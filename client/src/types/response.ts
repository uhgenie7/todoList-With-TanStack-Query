import { ITodoData } from './todoTypes';

export interface IErrorResponse {
  details: string;
}

export interface IUserAuthResponse {
  message: string;
  token: string;
}

export interface ITodoItemResponse {
  data: ITodoData;
}

export interface ITodoListResponse {
  data: ITodoData[];
}

export interface IResponse<T> {
  code: string;
  message: string;
  result: T;
}
