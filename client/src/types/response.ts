import { ITodoData } from './todoTypes';

export interface IErrorResponse {
  details: string;
}

export interface IUserAuthResponse {
  message: string;
  token: string;
}

export interface ITodoItemResponse {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITodoListResponse {
  data: ITodoData[];
}
